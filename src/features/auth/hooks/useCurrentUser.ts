import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@constants/config';
import { authService } from '@services/auth.service';
import { useAuthStore } from '@store/auth.store';

export function useCurrentUser() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: QUERY_KEYS.AUTH.ME,
    queryFn: () => authService.getMe(),
    enabled: !!accessToken,
    staleTime: 10 * 60 * 1000,
  });
}
