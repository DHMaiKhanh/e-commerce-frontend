import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { MESSAGES } from '@constants/messages';
import { ROUTES } from '@constants/routes';
import { authService } from '@services/auth.service';
import { useAuthStore } from '@store/auth.store';
import { getErrorMessage } from '@utils/error';

import type { LoginInput } from '@schemas/auth.schema';

export function useLogin() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: (input: LoginInput) => authService.login(input),
    onSuccess: ({ user, accessToken }) => {
      login(user, accessToken);
      toast.success(MESSAGES.SUCCESS.LOGIN);
      navigate(ROUTES.HOME);
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}
