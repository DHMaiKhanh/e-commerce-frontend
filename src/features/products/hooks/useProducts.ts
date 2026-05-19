import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@constants/config';
import { productService } from '@services/product.service';

import type { PaginationParams } from '@/types/api';
import type { ProductFilters } from '@/types/product';

export function useProducts(params: PaginationParams & ProductFilters = {}) {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS.LIST(params),
    queryFn: () => productService.list(params),
    placeholderData: (prev) => prev,
  });
}
