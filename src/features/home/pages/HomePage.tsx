import { Link } from 'react-router-dom';

import { Button } from '@components/ui/Button';
import { ROUTES } from '@constants/routes';

export default function HomePage() {
  return (
    <section className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-4xl font-bold md:text-5xl">Chào mừng đến E-commerce</h1>
      <p className="max-w-xl text-gray-600">
        Khám phá hàng nghìn sản phẩm chất lượng với giá tốt nhất, giao hàng toàn quốc.
      </p>
      <Link to={ROUTES.PRODUCTS}>
        <Button size="lg">Khám phá ngay</Button>
      </Link>
    </section>
  );
}
