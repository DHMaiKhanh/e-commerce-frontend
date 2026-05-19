import { useParams } from 'react-router-dom';

import { Button } from '@components/ui/Button';
import { PageLoader } from '@components/ui/PageLoader';
import { useCartStore } from '@store/cart.store';
import { formatCurrency } from '@utils/format';

import { useProductDetail } from '../hooks/useProductDetail';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading, isError } = useProductDetail(slug);
  const addItem = useCartStore((s) => s.addItem);

  if (isLoading) return <PageLoader />;
  if (isError || !product) return <p className="p-6 text-center text-red-600">Không tìm thấy sản phẩm.</p>;

  return (
    <div className="container mx-auto grid gap-8 py-8 md:grid-cols-2">
      <img src={product.images[0]} alt={product.name} className="w-full rounded-lg object-cover" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-2xl font-semibold text-primary-700">
          {formatCurrency(product.salePrice ?? product.price)}
        </p>
        <p className="leading-relaxed text-gray-700">{product.description}</p>
        <Button size="lg" onClick={() => addItem(product)}>
          Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  );
}
