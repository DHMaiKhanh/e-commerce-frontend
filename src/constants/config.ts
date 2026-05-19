export const env = {
  APP_NAME: import.meta.env.VITE_APP_NAME ?? 'E-commerce',
  APP_VERSION: import.meta.env.VITE_APP_VERSION ?? '0.1.0',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? '/api/v1',
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 15_000,
  ENABLE_MOCK_API: import.meta.env.VITE_ENABLE_MOCK_API === 'true',
  ENABLE_DEVTOOLS: import.meta.env.VITE_ENABLE_DEVTOOLS === 'true',
  SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN ?? '',
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
} as const;

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'app:access_token',
  REFRESH_TOKEN: 'app:refresh_token',
  USER: 'app:user',
  THEME: 'app:theme',
  LANGUAGE: 'app:language',
  CART: 'app:cart',
} as const;

export const QUERY_KEYS = {
  AUTH: {
    ME: ['auth', 'me'] as const,
  },
  PRODUCTS: {
    ALL: ['products'] as const,
    LIST: (filters?: unknown) => ['products', 'list', filters] as const,
    DETAIL: (id: string) => ['products', 'detail', id] as const,
    FEATURED: ['products', 'featured'] as const,
    CATEGORIES: ['products', 'categories'] as const,
  },
  CART: {
    CURRENT: ['cart', 'current'] as const,
  },
  ORDERS: {
    ALL: ['orders'] as const,
    DETAIL: (id: string) => ['orders', 'detail', id] as const,
  },
} as const;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
} as const;
