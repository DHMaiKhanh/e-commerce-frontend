import { Link, NavLink } from 'react-router-dom';

import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { ROUTES } from '@constants/routes';
import { useAuth } from '@contexts/AuthContext';
import { useCartStore } from '@store/cart.store';
import { cn } from '@utils/cn';

const NAV_ITEMS = [
  { label: 'Trang chủ', to: ROUTES.HOME },
  { label: 'Sản phẩm', to: ROUTES.PRODUCTS },
];

export function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const itemCount = useCartStore((state) => state.items.reduce((sum, i) => sum + i.quantity, 0));

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        <Link to={ROUTES.HOME} className="text-lg font-bold text-primary-700">
          E-commerce
        </Link>

        <nav className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-primary-700' : 'text-gray-600 hover:text-gray-900',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to={ROUTES.CART} className="relative">
            <Button variant="ghost" size="icon" aria-label="Giỏ hàng">
              🛒
            </Button>
            {itemCount > 0 && (
              <Badge variant="danger" className="absolute -right-1 -top-1">
                {itemCount}
              </Badge>
            )}
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <span className="hidden text-sm text-gray-700 md:inline">{user?.name}</span>
              <Button variant="outline" size="sm" onClick={logout}>
                Đăng xuất
              </Button>
            </div>
          ) : (
            <Link to={ROUTES.LOGIN}>
              <Button size="sm">Đăng nhập</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
