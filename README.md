# E-commerce Frontend (React + TypeScript + Vite)

Bộ khung dự án React tiêu chuẩn doanh nghiệp, áp dụng kiến trúc **feature-based** kết hợp **layered architecture** cho phần dùng chung.

## Tech stack

| Lớp                | Thư viện                                              |
| ------------------ | ----------------------------------------------------- |
| Build & dev server | Vite 5                                                |
| Ngôn ngữ           | TypeScript 5 (strict)                                 |
| UI                 | React 18 + Tailwind CSS                               |
| Routing            | React Router v6 (data router, lazy routes)            |
| Server state       | TanStack Query v5                                     |
| Client state       | Zustand (persist middleware)                          |
| Form               | React Hook Form + Zod                                 |
| HTTP               | Axios (interceptors + refresh token)                  |
| Mock API           | MSW (browser + node)                                  |
| Test               | Vitest + Testing Library + jsdom                      |
| Code quality       | ESLint + Prettier + Husky + lint-staged + EditorConfig |
| Notification       | react-hot-toast                                       |
| Class helper       | clsx + tailwind-merge                                 |

## Cấu trúc thư mục

```
src/
├── api/          # Axios instance, interceptors, endpoint constants
├── app/          # App entry: App.tsx + router definition
├── assets/       # Tài nguyên tĩnh (images, icons, fonts)
├── components/
│   ├── ui/       # Primitive UI: Button, Input, Modal, Spinner, Badge…
│   ├── forms/    # Form-aware wrappers (RHF integration)
│   └── layout/   # Header, Footer, Sidebar
├── constants/    # config (env), routes, messages, regex, query keys
├── contexts/     # AuthContext, ThemeContext
├── features/     # Module theo nghiệp vụ (auth, products, cart, …)
│   └── <feature>/
│       ├── api/         # Endpoint riêng cho feature (tùy chọn)
│       ├── components/  # Chỉ dùng nội bộ feature
│       ├── hooks/       # React Query hooks, business logic
│       ├── pages/       # Route-level pages (export default → lazy)
│       └── index.ts     # Barrel public
├── hooks/        # Hook dùng chung: useDebounce, useMediaQuery…
├── layouts/      # MainLayout, AuthLayout, AdminLayout
├── lib/          # Cấu hình thư viện bên thứ ba (queryClient, i18n…)
├── mocks/        # MSW handlers + worker/server setup
├── providers/    # AppProviders bọc toàn ứng dụng, ErrorBoundary
├── routes/       # ProtectedRoute, PublicRoute (route guards)
├── schemas/      # Zod schemas (validation cho form + API)
├── services/     # Hàm gọi API (thuần — không state)
├── store/        # Zustand stores (auth, cart, ui)
├── styles/       # globals.css, variables.css
├── types/        # TypeScript types dùng chung
├── utils/        # cn, format, storage, logger, error
├── tests/        # setup + test-utils + ví dụ
└── main.tsx      # Entry point
```

### Tại sao chia như vậy?

- **`features/`** — Mỗi module nghiệp vụ self-contained để **scale theo team** và dễ tách thành micro-frontend sau này. Không import chéo `features/A → features/B`; nếu cần dùng chung thì nâng lên `components/`, `hooks/`, `services/`.
- **`services/` vs `features/<x>/api/`** — `services/` chứa hàm gọi API thuần (không state, không React); hook React Query ở `features/<x>/hooks/`. Tách lớp giúp test dễ hơn và có thể tái dùng service ở SSR/Node script.
- **`store/` (Zustand)** dành cho **client state** persist được (cart, auth user, UI). **Server state** dùng TanStack Query — không lưu vào store.
- **`schemas/`** — Zod schema làm single source of truth cho cả form validation và type inference (`z.infer<typeof schema>`).
- **`routes/`** chỉ chứa **route guards** (HOC component). Khai báo route nằm trong `app/router.tsx` để gọn 1 chỗ.
- **Path alias** (`@components/*`, `@features/*`, …) thay vì relative `../../../`.

## Chạy dự án

```bash
# Cài dependency
npm install

# Khởi động dev server (mặc định port 5173)
npm run dev

# Type-check + build production
npm run build

# Preview build
npm run preview

# Lint / Format / Test
npm run lint
npm run format
npm run test
npm run test:coverage
```

## Biến môi trường

Copy `.env.example` → `.env.local` và điền giá trị tương ứng. Vite chỉ expose biến tiền tố `VITE_*` vào bundle.

| Biến                     | Mô tả                                |
| ------------------------ | ------------------------------------ |
| `VITE_API_BASE_URL`      | Base URL của backend API             |
| `VITE_API_PROXY_TARGET`  | Target proxy `/api` khi dev          |
| `VITE_ENABLE_MOCK_API`   | Bật MSW (true/false)                 |
| `VITE_ENABLE_DEVTOOLS`   | Bật React Query devtools             |

## Quy ước code

- **Đặt tên**: Component PascalCase, hook camelCase prefix `use`, file theo tên export chính.
- **Import order** (ESLint enforced): builtin → external → internal aliases → parent/sibling → type-only.
- **Type-only imports** dùng `import type { … }`.
- **Component export**: page dùng `export default` (cho `lazy()`), component thường named export.
- **Comment**: chỉ viết khi giải thích "tại sao", tránh comment "cái gì".
- **Test**: file `*.test.ts(x)` đặt cạnh source hoặc trong `src/tests/`.

## Workflow Git

- Husky chạy `lint-staged` trước commit: tự động ESLint fix + Prettier format.
- Pre-push (tuỳ chọn): chạy `npm run type-check && npm run test`.

## Mở rộng tiếp theo

- Thêm i18n (`react-i18next`) khi cần đa ngôn ngữ.
- Tích hợp Sentry (`@sentry/react`) cho monitoring.
- Bổ sung Storybook cho `components/ui/`.
- CI: GitHub Actions chạy lint + type-check + test + build.
