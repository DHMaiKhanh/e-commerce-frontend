import { ROUTES } from '@constants/routes';

import { CategoryGrid } from '../components/CategoryGrid';
import { FlashSale } from '../components/FlashSale';
import { HeroBanner } from '../components/HeroBanner';
import { ProductGrid } from '../components/ProductGrid';
import { SectionHeader } from '../components/SectionHeader';
import { featuredProducts } from '../data/homeMockData';

export default function HomePage() {
  return (
    <div className="bg-brand-glow bg-gray-50 pb-16">
      <div className="container mx-auto flex flex-col gap-6 pt-5">
        <HeroBanner />
        <CategoryGrid />
        <FlashSale />

        <section className="overflow-hidden rounded-2xl bg-white shadow-soft">
          <SectionHeader title="GỢI Ý HÔM NAY" accent viewAllHref={ROUTES.PRODUCTS} />
          <div className="p-3 sm:p-4">
            <ProductGrid products={featuredProducts} />
          </div>
          <div className="py-6 text-center">
            <button
              type="button"
              className="rounded-full border border-brand-200 bg-white px-8 py-2.5 text-sm font-semibold text-brand-500 shadow-soft transition hover:border-brand-300 hover:bg-brand-50 active:scale-95"
            >
              Xem thêm
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
