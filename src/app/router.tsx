import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { PageLoader } from '@components/ui/PageLoader';
import { ROUTES } from '@constants/routes';
import { AuthLayout } from '@layouts/AuthLayout';
import { MainLayout } from '@layouts/MainLayout';
import { ProtectedRoute } from '@routes/ProtectedRoute';
import { PublicRoute } from '@routes/PublicRoute';

const HomePage = lazy(() => import('@features/home/pages/HomePage'));
const ProductListPage = lazy(() => import('@features/products/pages/ProductListPage'));
const ProductDetailPage = lazy(() => import('@features/products/pages/ProductDetailPage'));
const CartPage = lazy(() => import('@features/cart/pages/CartPage'));
const LoginPage = lazy(() => import('@features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('@features/auth/pages/RegisterPage'));
const ProfilePage = lazy(() => import('@features/profile/pages/ProfilePage'));
const NotFoundPage = lazy(() => import('@features/errors/pages/NotFoundPage'));

const withSuspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME, element: withSuspense(HomePage) },
      { path: ROUTES.PRODUCTS, element: withSuspense(ProductListPage) },
      { path: ROUTES.PRODUCT_DETAIL, element: withSuspense(ProductDetailPage) },
      { path: ROUTES.CART, element: withSuspense(CartPage) },
      {
        element: <ProtectedRoute />,
        children: [{ path: ROUTES.PROFILE, element: withSuspense(ProfilePage) }],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <PublicRoute />,
        children: [
          { path: ROUTES.LOGIN, element: withSuspense(LoginPage) },
          { path: ROUTES.REGISTER, element: withSuspense(RegisterPage) },
        ],
      },
    ],
  },
  { path: '/404', element: withSuspense(NotFoundPage) },
  { path: '*', element: <Navigate to="/404" replace /> },
]);
