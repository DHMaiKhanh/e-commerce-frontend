import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { useAuth } from '@contexts/AuthContext';
import { useCartStore } from '@store/cart.store';

const HOT_KEYWORDS = ['iPhone 15', 'Áo thun nam', 'Giày sneaker', 'Tai nghe bluetooth', 'Đồng hồ'];

function TopBar() {
  return (
    <div className="hidden bg-brand-gradient-dark text-white/90 md:block">
      <div className="container mx-auto flex h-8 items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <a href="#" className="transition-colors hover:text-white">Kênh người bán</a>
          <a href="#" className="transition-colors hover:text-white">Tải ứng dụng</a>
          <span className="h-3 w-px bg-white/25" />
          <span className="text-white/70">Kết nối</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="transition-colors hover:text-white">Thông báo</a>
          <a href="#" className="transition-colors hover:text-white">Hỗ trợ</a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const itemCount = useCartStore((state) => state.items.reduce((sum, i) => sum + i.quantity, 0));
  const [keyword, setKeyword] = useState('');

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = keyword.trim();
    if (!q) return;
    navigate(`${ROUTES.PRODUCTS}?search=${encodeURIComponent(q)}`);
  };

  return (
    <header className="glass sticky top-0 z-30 border-b border-white/10 bg-brand-gradient text-white shadow-lift">
      <TopBar />

      <div className="container mx-auto flex items-center gap-5 py-3.5">
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-1.5 text-2xl font-extrabold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 text-xl shadow-inner ring-1 ring-white/20">
            🛒
          </span>
          <span className="hidden sm:inline">E-Shop</span>
        </Link>

        <form onSubmit={onSearch} className="flex flex-1 flex-col gap-1.5">
          <div className="flex items-center overflow-hidden rounded-full bg-white/95 p-1 pl-4 shadow-soft ring-1 ring-black/5 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-white">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Tìm sản phẩm, thương hiệu, và tên shop"
              aria-label="Tìm kiếm"
              className="flex-1 bg-transparent px-1 py-1.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-full bg-brand-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 active:scale-95"
            >
              🔍<span className="hidden sm:inline">Tìm</span>
            </button>
          </div>
          <div className="hidden flex-wrap gap-2 px-1 md:flex">
            {HOT_KEYWORDS.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => {
                  setKeyword(kw);
                  navigate(`${ROUTES.PRODUCTS}?search=${encodeURIComponent(kw)}`);
                }}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/20 hover:text-white"
              >
                {kw}
              </button>
            ))}
          </div>
        </form>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to={ROUTES.CART}
            className="relative grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-white/10"
            aria-label="Giỏ hàng"
          >
            <span className="text-2xl">🛒</span>
            {itemCount > 0 && (
              <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-brand-500 bg-amber-400 px-1 text-[11px] font-bold text-brand-800 shadow">
                {itemCount}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="hidden items-center gap-2.5 md:flex">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-sm font-bold uppercase ring-1 ring-white/20">
                {user?.name?.charAt(0) ?? 'U'}
              </span>
              <span className="text-sm font-medium">{user?.name}</span>
              <button
                type="button"
                onClick={logout}
                className="rounded-full border border-white/30 px-3.5 py-1.5 text-xs font-medium transition-colors hover:border-white/50 hover:bg-white/10"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 text-sm font-medium md:flex">
              <Link
                to={ROUTES.REGISTER}
                className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-white/10"
              >
                Đăng ký
              </Link>
              <Link
                to={ROUTES.LOGIN}
                className="rounded-full bg-white px-4 py-1.5 text-brand-600 shadow-soft transition-colors hover:bg-white/90"
              >
                Đăng nhập
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
