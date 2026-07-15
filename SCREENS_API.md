# Màn hình & API hiện có

Khảo sát ngày 2026-07-14 dựa trên source hiện tại (`src/app/router.tsx`, `src/api/`, `src/services/`, `src/features/*`).

## Cấu trúc API layer

- `src/api/axios.ts` — axios instance (`httpClient`), baseURL từ `env.API_BASE_URL`, `withCredentials: true`
- `src/api/interceptors.ts` — request/response interceptors (auth token attach + refresh)
- `src/api/endpoints.ts` — `API_ENDPOINTS` map tập trung
- `src/api/index.ts` — barrel export
- `src/services/auth.service.ts` — `authService` (login, register, logout, getMe, forgotPassword)
- `src/services/product.service.ts` — `productService` (list, getBySlug, getFeatured, getCategories)
- Chưa có `order.service.ts`, `cart.service.ts` dù đã có `src/types/order.ts`, `src/types/cart.ts` và endpoint `ORDERS`/`CART`
- `src/mocks/` — MSW, chỉ stub `POST /auth/login` và `GET /products` (rỗng), dùng cho test/dev
- Data fetching dùng TanStack Query (`useQuery`/`useMutation`) qua hook theo từng feature

### Endpoint đã định nghĩa (`src/api/endpoints.ts`)

- **AUTH**: `/auth/login`, `/auth/register`, `/auth/logout`, `/auth/refresh`, `/auth/me`, `/auth/forgot-password`, `/auth/reset-password`
- **USERS**: `/users`, `/users/:id`
- **PRODUCTS**: `/products`, `/products/:id`, `/products/slug/:slug`, `/products/categories`, `/products/featured`
- **CART**: `/cart`, `/cart/items`, `/cart/items/:id`
- **ORDERS**: `/orders`, `/orders/:id`, `/orders/checkout`

## Danh sách màn hình

| Màn hình | File | Route | API |
|---|---|---|---|
| HomePage | `src/features/home/pages/HomePage.tsx` | `/` | ⚠️ Mock data tĩnh (`src/features/home/data/homeMockData.ts`), không gọi API. Cần: `GET /products/featured`, `GET /products/categories` |
| ProductListPage | `src/features/products/pages/ProductListPage.tsx` | `/products` | ✅ `GET /products` qua `useProducts()` → `productService.list(params)` |
| ProductDetailPage | `src/features/products/pages/ProductDetailPage.tsx` | `/products/:slug` | ✅ `GET /products/slug/:slug` qua `useProductDetail(slug)`. "Add to cart" chỉ dùng Zustand store, không gọi API |
| CartPage | `src/features/cart/pages/CartPage.tsx` | `/cart` | ⚠️ Không gọi API — hoàn toàn client-side (`src/store/cart.store.ts`). Nút "Thanh toán" chưa có handler/API |
| LoginPage | `src/features/auth/pages/LoginPage.tsx` | `/login` | ✅ `POST /auth/login` qua `useLogin()` |
| RegisterPage | `src/features/auth/pages/RegisterPage.tsx` | `/register` | ✅ `POST /auth/register` qua `useRegister()` |
| ProfilePage | `src/features/profile/pages/ProfilePage.tsx` | `/profile` | ✅ `GET /auth/me` qua `useCurrentUser()`, chỉ hiển thị, chưa có update |
| NotFoundPage | `src/features/errors/pages/NotFoundPage.tsx` | `/404`, `*` | Không cần API |

## Khoảng trống / việc cần làm

- **HomePage**: 100% mock data (CategoryGrid, FlashSale, ProductGrid trên home đều import từ mock file, dùng ảnh Unsplash hardcode) — cần nối `GET /products/featured` và `GET /products/categories`.
- **CartPage**: chưa nối backend, nút thanh toán no-op — cần `cart.service.ts` + `POST /orders/checkout`, `/cart`, `/cart/items`.
- **Luồng đơn hàng** (checkout, lịch sử đơn, chi tiết đơn): mới có type definitions và endpoint path, chưa có page/hook/service nào.
- **Quản lý user** (`/users`, `/users/:id`): có `AdminLayout` (`src/layouts/AdminLayout.tsx`) nhưng chưa có trang/route admin nào đăng ký.
- **Quên/đặt lại mật khẩu**: service method và endpoint đã có (`authService.forgotPassword`, `/auth/reset-password`) nhưng chưa có màn hình tương ứng.
- MSW handlers rất sơ sài, chưa phải mock backend đầy đủ.
