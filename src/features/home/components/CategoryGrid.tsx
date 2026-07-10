import { Link } from 'react-router-dom';

import { handleImageError } from '@utils/image';

import { homeCategories } from '../data/homeMockData';

export function CategoryGrid() {
  return (
    <section className="rounded-3xl border border-white/50 bg-white/50 p-4 shadow-glass backdrop-blur-xl sm:p-5">
      <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-800">
        <span className="h-5 w-1 rounded-full bg-brand-gradient shadow-glow" />
        Danh mục nổi bật
      </h2>
      <ul className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-10">
        {homeCategories.map((cat) => (
          <li key={cat.id}>
            <Link
              to={`/products?category=${cat.slug}`}
              className="group flex flex-col items-center gap-2 rounded-2xl px-2 py-3 text-center transition-all hover:-translate-y-0.5 hover:bg-white/60"
            >
              <span className="overflow-hidden rounded-2xl ring-1 ring-white/60 transition group-hover:shadow-glow group-hover:ring-brand-200">
                <img
                  src={cat.iconUrl}
                  alt={cat.name}
                  loading="lazy"
                  onError={handleImageError}
                  className="h-14 w-14 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <span className="line-clamp-2 text-xs font-medium text-gray-600 transition-colors group-hover:text-brand-600">
                {cat.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
