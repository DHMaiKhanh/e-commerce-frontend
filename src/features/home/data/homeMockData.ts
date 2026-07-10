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
    title: 'Siêu Sale Thời Trang',
    subtitle: 'Giảm đến 50% toàn bộ quần áo - Freeship toàn quốc',
    imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop&auto=format',
    bgColor: 'from-brand-500 to-brand-700',
    ctaText: 'Mua ngay',
  },
  {
    id: 'b2',
    title: 'Bộ Sưu Tập Mới',
    subtitle: 'Săn deal giờ vàng - Voucher 100K cho đơn quần áo',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=400&fit=crop&auto=format',
    bgColor: 'from-yellow-400 to-brand-600',
    ctaText: 'Khám phá',
  },
  {
    id: 'b3',
    title: 'Hàng Chính Hãng',
    subtitle: '100% Authentic - Đổi trả 7 ngày',
    imageUrl: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=1200&h=400&fit=crop&auto=format',
    bgColor: 'from-blue-500 to-indigo-600',
    ctaText: 'Xem thêm',
  },
];

export const homeCategories: HomeCategory[] = [
  { id: 'c1', name: 'Áo thun', slug: 'ao-thun', iconUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=160&h=160&fit=crop&auto=format' },
  { id: 'c2', name: 'Áo sơ mi', slug: 'ao-so-mi', iconUrl: 'https://images.unsplash.com/photo-1602293589930-45821457c73a?w=160&h=160&fit=crop&auto=format' },
  { id: 'c3', name: 'Quần jean', slug: 'quan-jean', iconUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=160&h=160&fit=crop&auto=format' },
  { id: 'c4', name: 'Áo khoác', slug: 'ao-khoac', iconUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=160&h=160&fit=crop&auto=format' },
  { id: 'c5', name: 'Váy đầm', slug: 'vay-dam', iconUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=160&h=160&fit=crop&auto=format' },
  { id: 'c6', name: 'Chân váy', slug: 'chan-vay', iconUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=160&h=160&fit=crop&auto=format' },
  { id: 'c7', name: 'Áo len', slug: 'ao-len', iconUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=160&h=160&fit=crop&auto=format' },
  { id: 'c8', name: 'Áo hoodie', slug: 'ao-hoodie', iconUrl: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=160&h=160&fit=crop&auto=format' },
  { id: 'c9', name: 'Áo polo', slug: 'ao-polo', iconUrl: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=160&h=160&fit=crop&auto=format' },
  { id: 'c10', name: 'Quần tây', slug: 'quan-tay', iconUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=160&h=160&fit=crop&auto=format' },
  { id: 'c11', name: 'Quần short', slug: 'quan-short', iconUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=160&h=160&fit=crop&auto=format' },
  { id: 'c12', name: 'Đồ bộ', slug: 'do-bo', iconUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=160&h=160&fit=crop&auto=format' },
  { id: 'c13', name: 'Đồ ngủ', slug: 'do-ngu', iconUrl: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=160&h=160&fit=crop&auto=format' },
  { id: 'c14', name: 'Đồ lót', slug: 'do-lot', iconUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=160&h=160&fit=crop&auto=format' },
  { id: 'c15', name: 'Đồ thể thao', slug: 'do-the-thao', iconUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=160&h=160&fit=crop&auto=format' },
  { id: 'c16', name: 'Áo vest', slug: 'ao-vest', iconUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=160&h=160&fit=crop&auto=format' },
  { id: 'c17', name: 'Giày dép', slug: 'giay-dep', iconUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop&auto=format' },
  { id: 'c18', name: 'Túi xách', slug: 'tui-xach', iconUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=160&h=160&fit=crop&auto=format' },
  { id: 'c19', name: 'Phụ kiện', slug: 'phu-kien', iconUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=160&h=160&fit=crop&auto=format' },
  { id: 'c20', name: 'Set đồ', slug: 'set-do', iconUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=160&h=160&fit=crop&auto=format' },
];

const defaultCategory = { id: 'c1', name: 'Thời trang', slug: 'thoi-trang' };
const now = new Date().toISOString();

const clothingNames = [
  'Áo thun cotton in họa tiết',
  'Áo sơ mi tay dài công sở',
  'Quần jean skinny lưng cao',
  'Áo khoác bomber unisex',
  'Váy đầm hoa nhí tiểu thư',
  'Chân váy chữ A dáng xòe',
  'Áo len cổ lọ dệt kim',
  'Áo hoodie nỉ bông dày',
  'Áo polo nam basic',
  'Quần tây ống suông',
  'Quần short kaki nam',
  'Bộ đồ thể thao unisex',
  'Đồ ngủ lụa pyjama',
  'Áo vest blazer nữ',
  'Giày sneaker thể thao',
  'Túi xách tote da PU',
  'Set đồ bộ nữ mùa hè',
  'Áo khoác denim ngắn',
  'Chân váy jean ống rộng',
  'Áo thun oversize unisex',
];

const clothingImages = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1602293589930-45821457c73a?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=400&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format',
];

function makeProduct(id: number, overrides: Partial<Product> = {}): Product {
  const basePrice = 100_000 + ((id * 37) % 30) * 50_000;
  const discount = 10 + ((id * 13) % 50);
  const variant = (id - 1) % clothingNames.length;
  return {
    id: `p${id}`,
    slug: `san-pham-${id}`,
    name: overrides.name ?? `${clothingNames[variant]} - phiên bản ${id}`,
    description: 'Mô tả ngắn của sản phẩm.',
    price: basePrice,
    salePrice: Math.round((basePrice * (100 - discount)) / 100),
    stock: 100,
    images: [clothingImages[variant]!],
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

const flashSaleImages = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format', // áo thun
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop&auto=format', // quần jean
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&auto=format', // váy đầm
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format', // áo khoác
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format', // giày sneaker
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format', // túi xách
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop&auto=format', // áo len
  'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400&h=400&fit=crop&auto=format', // áo polo
];

export const flashSaleProducts: Product[] = Array.from({ length: 8 }, (_, i) =>
  makeProduct(i + 1, { name: `${clothingNames[i]} - Flash Sale`, images: [flashSaleImages[i]] }),
);

export const featuredProducts: Product[] = Array.from({ length: 20 }, (_, i) => makeProduct(i + 100));
