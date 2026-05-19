import { Link } from 'react-router-dom';

import { Button } from '@components/ui/Button';
import { ROUTES } from '@constants/routes';
import { useCartStore } from '@store/cart.store';
import { formatCurrency } from '@utils/format';

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal());
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  if (items.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[40vh] flex-col items-center justify-center gap-4 py-12 text-center">
        <p className="text-lg text-gray-600">Giỏ hàng của bạn đang trống</p>
        <Link to={ROUTES.PRODUCTS}>
          <Button>Tiếp tục mua sắm</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-2xl font-semibold">Giỏ hàng</h1>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 p-4">
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="h-20 w-20 rounded object-cover"
              />
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-gray-600">
                  {formatCurrency(item.product.salePrice ?? item.product.price)}
                </p>
                <div className="mt-auto flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.product.id, Math.max(1, Number(e.target.value)))
                    }
                    className="h-8 w-16 rounded border border-gray-300 px-2 text-sm"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-600"
                  >
                    Xoá
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-lg border border-gray-200 bg-white p-4">
          <div className="flex justify-between border-b border-gray-100 pb-2">
            <span>Tạm tính</span>
            <span className="font-semibold">{formatCurrency(subtotal)}</span>
          </div>
          <Button className="mt-4 w-full">Thanh toán</Button>
        </aside>
      </div>
    </div>
  );
}
