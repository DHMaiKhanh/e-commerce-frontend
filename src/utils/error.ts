import axios, { AxiosError } from 'axios';

import { MESSAGES } from '@constants/messages';

export interface ApiErrorPayload {
  message?: string;
  errors?: Record<string, string[]>;
  code?: string;
}

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiErrorPayload>;
    if (axiosError.response?.data?.message) return axiosError.response.data.message;
    if (axiosError.code === 'ECONNABORTED') return MESSAGES.ERROR.NETWORK;
    if (!axiosError.response) return MESSAGES.ERROR.NETWORK;
    return axiosError.message || MESSAGES.ERROR.GENERIC;
  }
  if (error instanceof Error) return error.message;
  return MESSAGES.ERROR.GENERIC;
}

export function getValidationErrors(error: unknown): Record<string, string[]> {
  if (axios.isAxiosError(error)) {
    const payload = error.response?.data as ApiErrorPayload | undefined;
    return payload?.errors ?? {};
  }
  return {};
}
