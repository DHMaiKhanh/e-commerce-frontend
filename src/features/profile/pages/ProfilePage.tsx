import { PageLoader } from '@components/ui/PageLoader';
import { useCurrentUser } from '@features/auth/hooks/useCurrentUser';

export default function ProfilePage() {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <PageLoader />;
  if (!user) return null;

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <h1 className="mb-6 text-2xl font-semibold">Thông tin tài khoản</h1>
      <dl className="grid grid-cols-1 gap-4 rounded-lg border border-gray-200 bg-white p-6 md:grid-cols-2">
        <div>
          <dt className="text-sm text-gray-500">Họ tên</dt>
          <dd className="font-medium">{user.name}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Email</dt>
          <dd className="font-medium">{user.email}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Số điện thoại</dt>
          <dd className="font-medium">{user.phone ?? '—'}</dd>
        </div>
        <div>
          <dt className="text-sm text-gray-500">Vai trò</dt>
          <dd className="font-medium capitalize">{user.role}</dd>
        </div>
      </dl>
    </div>
  );
}
