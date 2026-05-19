import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { MESSAGES } from '@constants/messages';
import { ROUTES } from '@constants/routes';
import { authService } from '@services/auth.service';
import { useAuthStore } from '@store/auth.store';
import { getErrorMessage } from '@utils/error';

import type { RegisterInput } from '@schemas/auth.schema';

export function useRegister() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: ({ confirmPassword: _c, acceptTerms: _a, ...input }: RegisterInput) =>
      authService.register(input),
    onSuccess: ({ user, accessToken }) => {
      login(user, accessToken);
      toast.success(MESSAGES.SUCCESS.REGISTER);
      navigate(ROUTES.HOME);
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}
