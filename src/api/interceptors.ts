import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { STORAGE_KEYS } from '@constants/config';
import { logger } from '@utils/logger';
import { storage } from '@utils/storage';

import { API_ENDPOINTS } from './endpoints';

interface RetryableRequest extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (err: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (token) resolve(token);
    else reject(error);
  });
  failedQueue = [];
};

export function setupInterceptors(client: AxiosInstance) {
  client.interceptors.request.use(
    (config) => {
      const token = storage.get<string>(STORAGE_KEYS.ACCESS_TOKEN);
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as RetryableRequest | undefined;
      const status = error.response?.status;

      if (status === 401 && originalRequest && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({
              resolve: (token) => {
                if (originalRequest.headers) {
                  originalRequest.headers.Authorization = `Bearer ${token}`;
                }
                resolve(client(originalRequest));
              },
              reject,
            });
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const { data } = await client.post<{ accessToken: string }>(
            API_ENDPOINTS.AUTH.REFRESH,
          );
          storage.set(STORAGE_KEYS.ACCESS_TOKEN, data.accessToken);
          processQueue(null, data.accessToken);

          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          }
          return client(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          storage.remove(STORAGE_KEYS.ACCESS_TOKEN);
          window.location.href = '/login';
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      logger.error('[API]', error.response?.data ?? error.message);
      return Promise.reject(error);
    },
  );
}
