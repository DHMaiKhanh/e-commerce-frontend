export type UserRole = 'customer' | 'admin' | 'staff';

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  phone?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}
