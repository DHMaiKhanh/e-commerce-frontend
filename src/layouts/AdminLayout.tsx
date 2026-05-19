import { Outlet } from 'react-router-dom';

import { Sidebar } from '@components/layout/Sidebar';

const ADMIN_NAV = [
  { label: 'Dashboard', to: '/admin' },
  { label: 'Sản phẩm', to: '/admin/products' },
  { label: 'Đơn hàng', to: '/admin/orders' },
  { label: 'Người dùng', to: '/admin/users' },
];

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar items={ADMIN_NAV} />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
