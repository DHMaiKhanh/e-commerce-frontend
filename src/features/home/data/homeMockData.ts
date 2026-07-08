import type { Product } from '@/types/product';

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  bgColor: string;
  ctaText: string;
}

export interface HomeCategory {
  id: string;
  name: string;
  slug: string;
  iconUrl: string;
}

export const heroBanners: HeroBanner[] = [
  {
    id: 'b1',
    title: 'Siêu Sale 5.5',
    subtitle: 'Giảm đến 50% - Freeship toàn quốc',
    imageUrl: 'https://picsum.photos/seed/banner1/1200/400',
    bgColor: 'from-brand-500 to-brand-700',
    ctaText: 'Mua ngay',
  },
  {
    id: 'b2',
    title: 'Flash Sale Mỗi Ngày',
    subtitle: 'Săn deal giờ vàng - Voucher 100K',
    imageUrl: 'https://picsum.photos/seed/banner2/1200/400',
    bgColor: 'from-yellow-400 to-brand-600',
    ctaText: 'Khám phá',
  },
  {
    id: 'b3',
    title: 'Hàng Chính Hãng',
    subtitle: '100% Authentic - Đổi trả 7 ngày',
    imageUrl: 'https://picsum.photos/seed/banner3/1200/400',
    bgColor: 'from-blue-500 to-indigo-600',
    ctaText: 'Xem thêm',
  },
];

export const homeCategories: HomeCategory[] = [
  { id: 'c1', name: 'Thời trang Nam', slug: 'thoi-trang-nam', iconUrl: 'https://picsum.photos/seed/cat1/80' },
  { id: 'c2', name: 'Điện thoại', slug: 'dien-thoai', iconUrl: 'https://picsum.photos/seed/cat2/80' },
  { id: 'c3', name: 'Thiết bị điện tử', slug: 'dien-tu', iconUrl: 'https://picsum.photos/seed/cat3/80' },
  { id: 'c4', name: 'Máy tính & Laptop', slug: 'laptop', iconUrl: 'https://picsum.photos/seed/cat4/80' },
  { id: 'c5', name: 'Máy ảnh', slug: 'may-anh', iconUrl: 'https://picsum.photos/seed/cat5/80' },
  { id: 'c6', name: 'Đồng hồ', slug: 'dong-ho', iconUrl: 'https://picsum.photos/seed/cat6/80' },
  { id: 'c7', name: 'Thời trang Nữ', slug: 'thoi-trang-nu', iconUrl: 'https://picsum.photos/seed/cat7/80' },
  { id: 'c8', name: 'Giày dép', slug: 'giay-dep', iconUrl: 'https://picsum.photos/seed/cat8/80' },
  { id: 'c9', name: 'Túi xách', slug: 'tui-xach', iconUrl: 'https://picsum.photos/seed/cat9/80' },
  { id: 'c10', name: 'Mỹ phẩm', slug: 'my-pham', iconUrl: 'https://picsum.photos/seed/cat10/80' },
  { id: 'c11', name: 'Sức khoẻ', slug: 'suc-khoe', iconUrl: 'https://picsum.photos/seed/cat11/80' },
  { id: 'c12', name: 'Mẹ & Bé', slug: 'me-be', iconUrl: 'https://picsum.photos/seed/cat12/80' },
  { id: 'c13', name: 'Nhà cửa', slug: 'nha-cua', iconUrl: 'https://picsum.photos/seed/cat13/80' },
  { id: 'c14', name: 'Sách & VPP', slug: 'sach', iconUrl: 'https://picsum.photos/seed/cat14/80' },
  { id: 'c15', name: 'Thể thao', slug: 'the-thao', iconUrl: 'https://picsum.photos/seed/cat15/80' },
  { id: 'c16', name: 'Xe máy', slug: 'xe-may', iconUrl: 'https://picsum.photos/seed/cat16/80' },
  { id: 'c17', name: 'Ô tô', slug: 'o-to', iconUrl: 'https://picsum.photos/seed/cat17/80' },
  { id: 'c18', name: 'Voucher', slug: 'voucher', iconUrl: 'https://picsum.photos/seed/cat18/80' },
  { id: 'c19', name: 'Bách hoá', slug: 'bach-hoa', iconUrl: 'https://picsum.photos/seed/cat19/80' },
  { id: 'c20', name: 'Thú cưng', slug: 'thu-cung', iconUrl: 'https://picsum.photos/seed/cat20/80' },
];

const defaultCategory = { id: 'c1', name: 'Tổng hợp', slug: 'tong-hop' };
const now = new Date().toISOString();

function makeProduct(id: number, overrides: Partial<Product> = {}): Product {
  const basePrice = 100_000 + ((id * 37) % 30) * 50_000;
  const discount = 10 + ((id * 13) % 50);
  return {
    id: `p${id}`,
    slug: `san-pham-${id}`,
    name: overrides.name ?? `Sản phẩm chất lượng cao chính hãng phiên bản ${id} - giá cực sốc`,
    description: 'Mô tả ngắn của sản phẩm.',
    price: basePrice,
    salePrice: Math.round((basePrice * (100 - discount)) / 100),
    stock: 100,
    images: [`https://picsum.photos/seed/prod${id}/400/400`],
    category: defaultCategory,
    rating: 3.5 + ((id * 7) % 15) / 10,
    reviewCount: 50 + ((id * 17) % 200),
    sold: 100 + ((id * 53) % 9000),
    location: ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Hải Phòng'][id % 4],
    isOfficial: id % 3 === 0,
    freeShipping: id % 2 === 0,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

export const flashSaleProducts: Product[] = Array.from({ length: 8 }, (_, i) => makeProduct(i + 1));

export const featuredProducts: Product[] = Array.from({ length: 20 }, (_, i) => makeProduct(i + 100));
