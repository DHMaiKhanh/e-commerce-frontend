export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  stock: number;
  images: string[];
  category: Category;
  rating: number;
  reviewCount: number;
  sold?: number;
  location?: string;
  isOfficial?: boolean;
  freeShipping?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: 'price-asc' | 'price-desc' | 'newest' | 'popular';
}
