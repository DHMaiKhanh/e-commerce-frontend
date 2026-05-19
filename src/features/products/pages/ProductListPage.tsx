import { PageLoader } from '@components/ui/PageLoader';

import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export default function ProductListPage() {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <PageLoader />;
  if (isError) return <p className="p-6 text-center text-red-600">Không tải được danh sách sản phẩm.</p>;
  if (!data) return null;

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-2xl font-semibold">Sản phẩm</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
