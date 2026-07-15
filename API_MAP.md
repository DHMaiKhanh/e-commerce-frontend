# API Integration Map — frontend-react

Source: `D:\Project\E-commerce\frontend-react`
Generated: 2026-07-14

## 1. API Layer Structure

| File | Purpose |
|---|---|
| `src/api/axios.ts` | `httpClient` axios instance, `baseURL` from `env.API_BASE_URL`, `withCredentials: true` |
| `src/api/interceptors.ts` | Request/response interceptors (auth token attach + refresh) |
| `src/api/endpoints.ts` | Centralized `API_ENDPOINTS` map |
| `src/api/index.ts` | Barrel export |
| `src/services/auth.service.ts` | `authService`: login, register, logout, getMe, forgotPassword |
| `src/services/product.service.ts` | `productService`: list, getBySlug, getFeatured, getCategories |
| `src/services/index.ts` | Barrel export |
| — | ❌ No `cart.service.ts` |
| — | ❌ No `order.service.ts` |

Data fetching pattern: TanStack Query (`useQuery`/`useMutation`) via feature-specific hooks in `src/features/*/hooks`.

## 2. Full Endpoint Map (`src/api/endpoints.ts`)

```ts
AUTH:     LOGIN /auth/login, REGISTER /auth/register, LOGOUT /auth/logout,
          REFRESH /auth/refresh, ME /auth/me,
          FORGOT_PASSWORD /auth/forgot-password, RESET_PASSWORD /auth/reset-password
USERS:    BASE /users, BY_ID /users/:id
PRODUCTS: BASE /products, BY_ID /products/:id, BY_SLUG /products/slug/:slug,
          CATEGORIES /products/categories, FEATURED /products/featured
CART:     BASE /cart, ITEMS /cart/items, ITEM_BY_ID /cart/items/:id
ORDERS:   BASE /orders, BY_ID /orders/:id, CHECKOUT /orders/checkout
```

## 3. Screen ↔ API Mapping

Routes defined in `src/app/router.tsx`.

| Screen | File | Route | API Status |
|---|---|---|---|
| HomePage | `src/features/home/pages/HomePage.tsx` | `/` | ⚠️ 100% mock data (`src/features/home/data/homeMockData.ts`) — `CategoryGrid` and `FlashSale` also import mock arrays (`homeCategories`, `flashSaleProducts`). Needed: `GET /products/featured`, `GET /products/categories` |
| ProductListPage | `src/features/products/pages/ProductListPage.tsx` | `/products` | ✅ `GET /products` via `useProducts()` → `productService.list(params)` (paginated, filters). ⚠️ Does not appear to read `?category=slug` query param from HomePage links |
| ProductDetailPage | `src/features/products/pages/ProductDetailPage.tsx` | `/products/:slug` | ✅ `GET /products/slug/:slug` via `useProductDetail(slug)` → `productService.getBySlug(slug)`. "Add to cart" only updates local Zustand store (`useCartStore`), no API call |
| CartPage | `src/features/cart/pages/CartPage.tsx` | `/cart` | ❌ No API calls — fully driven by `src/store/cart.store.ts` (Zustand). "Thanh toán" (Checkout) button has no handler wired |
| LoginPage | `src/features/auth/pages/LoginPage.tsx` | `/login` (public-only) | ✅ `POST /auth/login` via `useLogin()` → `authService.login()`. Stores user/token in `useAuthStore`, navigates home |
| RegisterPage | `src/features/auth/pages/RegisterPage.tsx` | `/register` (public-only) | ✅ `POST /auth/register` via `useRegister()` → `authService.register()` |
| ProfilePage | `src/features/profile/pages/ProfilePage.tsx` | `/profile` (protected) | ✅ `GET /auth/me` via `useCurrentUser()` → `authService.getMe()` (enabled only when access token present, 10 min staleTime). Display-only, no edit/update mutation |
| NotFoundPage | `src/features/errors/pages/NotFoundPage.tsx` | `/404`, `*` | No API — static content |

## 4. Endpoints Defined but Unused by Any Screen

| Endpoint | Blocking gap |
|---|---|
| `CART.*` (`/cart`, `/cart/items`, `/cart/items/:id`) | No `cart.service.ts` exists |
| `ORDERS.*` (`/orders`, `/orders/:id`, `/orders/checkout`) | No `order.service.ts`; no checkout/order-history/order-detail pages |
| `USERS.*` (`/users`, `/users/:id`) | `AdminLayout` exists (`src/layouts/AdminLayout.tsx`) but no admin pages/routes registered in router |
| `AUTH.FORGOT_PASSWORD`, `AUTH.RESET_PASSWORD` | `authService.forgotPassword()` exists but no forgot/reset-password pages or routes |

## 5. Mocking

`src/mocks/` (MSW): `handlers.ts`, `browser.ts`, `server.ts` — stubs only `POST /auth/login` and `GET /products` (returns `[]`). Minimal, likely test scaffolding only, not wired into all pages.

## 6. Priority Gaps (largest → smallest impact)

1. **HomePage** — entirely mock data; needs `GET /products/featured` + `GET /products/categories` wired via new hooks.
2. **Cart → Checkout → Order flow** — no `cart.service.ts` / `order.service.ts`, no checkout page, no order history/detail pages, despite types (`src/types/cart.ts`, `src/types/order.ts`) and endpoints already existing.
3. **User management / Admin** — `AdminLayout` unused; no admin routes/pages for `/users`, `/users/:id`.
4. **Password recovery** — no UI for `/auth/forgot-password`, `/auth/reset-password`.
5. **ProductListPage category filter** — verify `?category=slug` query param is actually read/applied.
6. **ProfilePage edit** — no `PUT /users/:id` mutation for profile updates.
