import { Link } from 'react-router-dom';

import { buildPath } from '@constants/routes';
import { cn } from '@utils/cn';
import { formatCurrency, formatNumber } from '@utils/format';

import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

function RatingStars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  return (
    <div className="flex items-center gap-0.5 text-[10px] text-yellow-400">
      {stars.map((filled, i) => (
        <span key={i}>{filled ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const finalPrice = product.salePrice ?? product.price;
  const discount =
    product.salePrice && product.salePrice < product.price
      ? Math.round(((product.price - product.salePrice) / product.price) * 100)
      : 0;

  return (
    <Link
      to={buildPath.productDetail(product.slug)}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-200"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {discount > 0 && (
          <div className="absolute right-2 top-2 flex items-center gap-0.5 rounded-full bg-brand-gradient px-2 py-0.5 text-[10px] font-bold text-white shadow-glow">
            -{discount}%
          </div>
        )}

        {product.isOfficial && (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-600 backdrop-blur">
            Mall
          </span>
        )}
      </div>

      <div className={cn('flex flex-1 flex-col gap-1.5 p-3', compact && 'gap-1 p-2')}>
        <p
          className={cn(
            'line-clamp-2 text-sm font-medium leading-snug text-gray-700 transition-colors group-hover:text-brand-600',
            compact && 'text-xs',
          )}
        >
          {product.name}
        </p>

        <div className="mt-auto flex items-baseline gap-1.5">
          <span className={cn('font-bold text-brand-500', compact ? 'text-sm' : 'text-lg')}>
            {formatCurrency(finalPrice)}
          </span>
          {discount > 0 && (
            <span className="text-[11px] text-gray-400 line-through">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-[11px] text-gray-500">
          <RatingStars rating={product.rating} />
          <span>Đã bán {formatNumber(product.sold ?? 0)}</span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-50 pt-1.5 text-[11px] text-gray-400">
          <span className="flex items-center gap-1 truncate">📍 {product.location}</span>
          {product.freeShipping && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
              Freeship
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
