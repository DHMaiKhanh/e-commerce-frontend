import { API_ENDPOINTS, httpClient } from '@api';

import type { LoginInput, RegisterInput } from '@schemas/auth.schema';
import type { ApiResponse } from '@/types/api';
import type { User } from '@/types/user';

interface AuthPayload {
  user: User;
  accessToken: string;
}

export const authService = {
  async login(input: LoginInput): Promise<AuthPayload> {
    const { data } = await httpClient.post<ApiResponse<AuthPayload>>(
      API_ENDPOINTS.AUTH.LOGIN,
      input,
    );
    return data.data;
  },

  async register(input: Omit<RegisterInput, 'confirmPassword' | 'acceptTerms'>) {
    const { data } = await httpClient.post<ApiResponse<AuthPayload>>(
      API_ENDPOINTS.AUTH.REGISTER,
      input,
    );
    return data.data;
  },

  async logout(): Promise<void> {
    await httpClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  },

  async getMe(): Promise<User> {
    const { data } = await httpClient.get<ApiResponse<User>>(API_ENDPOINTS.AUTH.ME);
    return data.data;
  },

  async forgotPassword(email: string): Promise<void> {
    await httpClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
  },
};
