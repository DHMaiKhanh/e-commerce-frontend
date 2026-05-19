import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { FormField } from '@components/forms/FormField';
import { Button } from '@components/ui/Button';
import { ROUTES } from '@constants/routes';
import { loginSchema, type LoginInput } from '@schemas/auth.schema';

import { useLogin } from '../hooks/useLogin';

export function LoginForm() {
  const { control, handleSubmit } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const { mutate, isPending } = useLogin();

  const onSubmit = handleSubmit((values) => mutate(values));

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm flex-col gap-4">
      <h1 className="text-2xl font-semibold">Đăng nhập</h1>

      <FormField
        control={control}
        name="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
      />

      <FormField
        control={control}
        name="password"
        label="Mật khẩu"
        type="password"
        placeholder="••••••••"
        autoComplete="current-password"
      />

      <Button type="submit" isLoading={isPending} className="mt-2">
        Đăng nhập
      </Button>

      <p className="text-center text-sm text-gray-600">
        Chưa có tài khoản?{' '}
        <Link to={ROUTES.REGISTER} className="text-primary-600 hover:underline">
          Đăng ký ngay
        </Link>
      </p>
    </form>
  );
}
