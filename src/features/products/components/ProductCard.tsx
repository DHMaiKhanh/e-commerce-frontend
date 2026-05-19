import { Link } from 'react-router-dom';

import { Button } from '@components/ui/Button';
import { buildPath } from '@constants/routes';
import { useCartStore } from '@store/cart.store';
import { formatCurrency } from '@utils/format';

import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <Link to={buildPath.productDetail(product.slug)} className="block aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to={buildPath.productDetail(product.slug)} className="line-clamp-2 font-medium hover:text-primary-700">
          {product.name}
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold text-primary-700">
            {formatCurrency(product.salePrice ?? product.price)}
          </span>
          {product.salePrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>
        <Button size="sm" className="mt-auto" onClick={() => addItem(product)}>
          Thêm vào giỏ
        </Button>
      </div>
    </article>
  );
}
