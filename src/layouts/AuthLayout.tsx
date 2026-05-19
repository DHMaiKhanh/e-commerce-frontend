import { Link, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto flex h-16 items-center">
          <Link to={ROUTES.HOME} className="text-lg font-bold text-primary-700">
            E-commerce
          </Link>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
}
