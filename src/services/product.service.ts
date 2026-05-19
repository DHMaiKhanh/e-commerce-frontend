import { API_ENDPOINTS, httpClient } from '@api';

import type { ApiResponse, PaginatedResponse, PaginationParams } from '@/types/api';
import type { Category, Product, ProductFilters } from '@/types/product';

export const productService = {
  async list(params: PaginationParams & ProductFilters): Promise<PaginatedResponse<Product>> {
    const { data } = await httpClient.get<PaginatedResponse<Product>>(
      API_ENDPOINTS.PRODUCTS.BASE,
      { params },
    );
    return data;
  },

  async getBySlug(slug: string): Promise<Product> {
    const { data } = await httpClient.get<ApiResponse<Product>>(
      API_ENDPOINTS.PRODUCTS.BY_SLUG(slug),
    );
    return data.data;
  },

  async getFeatured(): Promise<Product[]> {
    const { data } = await httpClient.get<ApiResponse<Product[]>>(
      API_ENDPOINTS.PRODUCTS.FEATURED,
    );
    return data.data;
  },

  async getCategories(): Promise<Category[]> {
    const { data } = await httpClient.get<ApiResponse<Category[]>>(
      API_ENDPOINTS.PRODUCTS.CATEGORIES,
    );
    return data.data;
  },
};
