import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { FormField } from '@components/forms/FormField';
import { Button } from '@components/ui/Button';
import { ROUTES } from '@constants/routes';
import { registerSchema, type RegisterInput } from '@schemas/auth.schema';

import { useRegister } from '../hooks/useRegister';

export function RegisterForm() {
  const { control, handleSubmit, register } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false as unknown as true,
    },
  });

  const { mutate, isPending } = useRegister();
  const onSubmit = handleSubmit((values) => mutate(values));

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm flex-col gap-4">
      <h1 className="text-2xl font-semibold">Đăng ký</h1>

      <FormField control={control} name="name" label="Họ tên" autoComplete="name" />
      <FormField control={control} name="email" label="Email" type="email" autoComplete="email" />
      <FormField control={control} name="phone" label="Số điện thoại" autoComplete="tel" />
      <FormField control={control} name="password" label="Mật khẩu" type="password" />
      <FormField control={control} name="confirmPassword" label="Xác nhận mật khẩu" type="password" />

      <label className="flex items-start gap-2 text-sm text-gray-700">
        <input type="checkbox" {...register('acceptTerms')} className="mt-0.5" />
        Tôi đồng ý với điều khoản sử dụng
      </label>

      <Button type="submit" isLoading={isPending}>
        Đăng ký
      </Button>

      <p className="text-center text-sm text-gray-600">
        Đã có tài khoản?{' '}
        <Link to={ROUTES.LOGIN} className="text-primary-600 hover:underline">
          Đăng nhập
        </Link>
      </p>
    </form>
  );
}
