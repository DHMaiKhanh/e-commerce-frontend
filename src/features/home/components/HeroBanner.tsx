import { useEffect, useState } from 'react';

import { cn } from '@utils/cn';
import { handleImageError } from '@utils/image';

import { heroBanners } from '../data/homeMockData';

export function HeroBanner() {
  const [index, setIndex] = useState(0);
  const total = heroBanners.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % total), 4500);
    return () => clearInterval(id);
  }, [total]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const active = heroBanners[index]!;

  return (
    <section className="grid gap-4 md:grid-cols-[2fr_1fr]">
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/50 shadow-glass">
        <div
          className={cn(
            'relative flex aspect-[2.4/1] w-full items-center bg-gradient-to-br p-8 text-white transition-all duration-700 md:p-12',
            active.bgColor,
          )}
        >
          <img
            src={active.imageUrl}
            alt={active.title}
            onError={handleImageError}
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay transition-transform duration-[6000ms] group-hover:scale-105"
          />
          {/* mesh + vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-glass-sheen opacity-40" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />

          <div key={active.id} className="relative max-w-md animate-slide-up">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Ưu đãi hôm nay
            </span>
            <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight drop-shadow-lg md:text-5xl">
              {active.title}
            </h2>
            <p className="mb-6 text-sm text-white/85 md:text-lg">{active.subtitle}</p>
            <button
              type="button"
              className="group/btn inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-7 py-2.5 text-sm font-semibold text-brand-600 shadow-lift backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-glow active:scale-95"
            >
              {active.ctaText}
              <span className="transition-transform group-hover/btn:translate-x-1">→</span>
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Banner trước"
          className="absolute left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/15 text-lg text-white opacity-0 backdrop-blur-md transition hover:bg-white/30 group-hover:opacity-100 md:grid"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Banner kế tiếp"
          className="absolute right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/15 text-lg text-white opacity-0 backdrop-blur-md transition hover:bg-white/30 group-hover:opacity-100 md:grid"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {heroBanners.map((b, i) => (
            <button
              key={b.id}
              type="button"
              aria-label={`Đi tới banner ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-1.5 overflow-hidden rounded-full transition-all',
                i === index ? 'w-8 bg-white/30' : 'w-1.5 bg-white/40 hover:bg-white/70',
              )}
            >
              {i === index && (
                <span
                  key={index}
                  className="block h-full origin-left animate-[progress_4.5s_linear] rounded-full bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/40 p-5 text-white shadow-glass transition-transform duration-300 hover:-translate-y-1">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=300&fit=crop&auto=format"
            alt=""
            onError={handleImageError}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/85 via-rose-500/80 to-orange-400/70" />
          <div className="pointer-events-none absolute inset-0 bg-glass-sheen opacity-30" />
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-xl transition-transform duration-500 group-hover:scale-125" />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider opacity-90">
                🎟️ Voucher
              </p>
              <p className="mt-1.5 text-2xl font-extrabold tracking-tight">Giảm 100K</p>
              <p className="text-sm opacity-90">Đơn từ 500K</p>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/15 text-sm backdrop-blur-md transition group-hover:bg-white/25 group-hover:translate-x-0.5">
              →
            </span>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/40 p-5 text-white shadow-glass transition-transform duration-300 hover:-translate-y-1">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop&auto=format"
            alt=""
            onError={handleImageError}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/85 via-teal-500/80 to-cyan-400/70" />
          <div className="pointer-events-none absolute inset-0 bg-glass-sheen opacity-30" />
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-xl transition-transform duration-500 group-hover:scale-125" />
          <div className="relative flex items-start justify-between">
            <div>
              <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider opacity-90">
                🚚 Freeship
              </p>
              <p className="mt-1.5 text-2xl font-extrabold tracking-tight">Miễn phí ship</p>
              <p className="text-sm opacity-90">Toàn quốc</p>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/15 text-sm backdrop-blur-md transition group-hover:bg-white/25 group-hover:translate-x-0.5">
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
