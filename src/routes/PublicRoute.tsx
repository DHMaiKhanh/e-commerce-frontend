import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants/routes';
import { useAuth } from '@contexts/AuthContext';

export function PublicRoute() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to={ROUTES.HOME} replace />;
  return <Outlet />;
}
