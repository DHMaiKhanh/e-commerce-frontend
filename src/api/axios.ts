import axios, { type AxiosInstance } from 'axios';

import { env } from '@constants/config';

import { setupInterceptors } from './interceptors';

export const httpClient: AxiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: env.API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

setupInterceptors(httpClient);

export default httpClient;
