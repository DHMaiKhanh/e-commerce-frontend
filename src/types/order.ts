import type { CartItem } from './cart';

export type OrderStatus = 'pending' | 'confirmed' | 'shipping' | 'delivered' | 'cancelled';
export type PaymentMethod = 'cod' | 'card' | 'momo' | 'vnpay';

export interface ShippingAddress {
  fullName: string;
  phone: string;
  province: string;
  district: string;
  ward: string;
  address: string;
}

export interface Order {
  id: string;
  code: string;
  items: CartItem[];
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  shippingAddress: ShippingAddress;
  subtotal: number;
  shippingFee: number;
  total: number;
  createdAt: string;
}
