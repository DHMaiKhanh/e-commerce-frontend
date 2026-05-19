import { z } from 'zod';

import { REGEX } from '@constants/regex';

export const loginSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
    email: z.string().email('Email không hợp lệ'),
    phone: z.string().regex(REGEX.PHONE_VN, 'Số điện thoại không hợp lệ'),
    password: z
      .string()
      .regex(REGEX.PASSWORD_STRONG, 'Mật khẩu phải có chữ hoa, chữ thường, số và ≥8 ký tự'),
    confirmPassword: z.string(),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: 'Bạn phải đồng ý với điều khoản' }),
    }),
  })
  .refine((v) => v.password === v.confirmPassword, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['confirmPassword'],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
