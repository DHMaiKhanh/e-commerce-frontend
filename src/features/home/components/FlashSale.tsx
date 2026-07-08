import { Link } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { formatCurrency, formatNumber } from '@utils/format';

import type { Product } from '@/types/product';

import { flashSaleProducts } from '../data/homeMockData';

import { CountdownTimer } from './CountdownTimer';

const TARGET = new Date(Date.now() + 4 * 60 * 60 * 1000);

function FlashItem({ product }: { product: Product }) {
  const finalPrice = product.salePrice ?? product.price;
  const discount =
    product.salePrice && product.salePrice < product.price
      ? Math.round(((product.price - product.salePrice) / product.price) * 100)
      : 0;
  const stockPercent = Math.min(100, Math.max(20, ((product.sold ?? 100) / 200) % 100));

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex w-[160px] flex-shrink-0 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-lift hover:ring-brand-200"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {discount > 0 && (
          <span className="absolute left-2 top-2 rounded-full bg-yellow-400 px-2 py-0.5 text-[10px] font-bold text-brand-600 shadow">
            -{discount}%
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1.5 p-2.5">
        <p className="text-lg font-bold text-brand-500">{formatCurrency(finalPrice)}</p>
        <div className="relative h-4 overflow-hidden rounded-full bg-brand-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400"
            style={{ width: `${stockPercent}%` }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
            🔥 Đã bán {formatNumber(product.sold ?? 0)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function FlashSale() {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-soft">
      <div className="flex items-center justify-between bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 px-5 py-4 text-white">
        <div className="flex items-center gap-4">
          <span className="text-xl font-extrabold tracking-wide drop-shadow">⚡ FLASH SALE</span>
          <CountdownTimer targetDate={TARGET} />
        </div>
        <Link
          to={ROUTES.PRODUCTS}
          className="rounded-full bg-white/20 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30"
        >
          Xem tất cả ›
        </Link>
      </div>

      <div className="flex gap-3 overflow-x-auto p-4 scrollbar-thin">
        {flashSaleProducts.map((product) => (
          <FlashItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
