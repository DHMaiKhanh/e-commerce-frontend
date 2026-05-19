import { http, HttpResponse } from 'msw';

import { env } from '@constants/config';

const baseUrl = env.API_BASE_URL;

export const handlers = [
  http.post(`${baseUrl}/auth/login`, async () =>
    HttpResponse.json({
      success: true,
      data: {
        accessToken: 'mock-access-token',
        user: {
          id: '1',
          email: 'demo@example.com',
          name: 'Demo User',
          role: 'customer',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
    }),
  ),

  http.get(`${baseUrl}/products`, () =>
    HttpResponse.json({
      data: [],
      meta: { page: 1, limit: 20, total: 0, totalPages: 0, hasNext: false, hasPrev: false },
    }),
  ),
];
