import { Link } from 'react-router-dom';

import { Button } from '@components/ui/Button';
import { ROUTES } from '@constants/routes';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold text-primary-700">404</h1>
      <p className="text-lg text-gray-600">Không tìm thấy trang bạn yêu cầu.</p>
      <Link to={ROUTES.HOME}>
        <Button>Về trang chủ</Button>
      </Link>
    </div>
  );
}
