# Feature: Auth

Mỗi feature là một module độc lập, chứa toàn bộ tài nguyên cần thiết:

```
auth/
├── api/         # (tùy chọn) endpoint helpers riêng cho feature
├── components/  # Component chỉ dùng nội bộ feature
├── hooks/       # React Query hooks, business logic hooks
├── pages/       # Route-level page components (lazy imported)
├── types/       # (tùy chọn) feature-specific types
└── index.ts     # Public barrel — chỉ export những gì bên ngoài cần
```

## Nguyên tắc

- Không import chéo từ `features/<other>/...` — nếu cần dùng chung thì nâng lên `components/`, `hooks/`, `services/`.
- Page components dùng `export default` để hỗ trợ `lazy()` trong router.
- Hooks gọi service và return TanStack Query state; component chỉ lo UI.
