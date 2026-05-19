import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@constants/config';
import { productService } from '@services/product.service';

export function useProductDetail(slug: string | undefined) {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS.DETAIL(slug ?? ''),
    queryFn: () => productService.getBySlug(slug!),
    enabled: !!slug,
  });
}
