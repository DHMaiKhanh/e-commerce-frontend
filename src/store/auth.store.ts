import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORAGE_KEYS } from '@constants/config';
import { storage } from '@utils/storage';

import type { User } from '@/types/user';

interface AuthState {
  user: User | null;
  accessToken: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      login: (user, accessToken) => {
        storage.set(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
        set({ user, accessToken });
      },
      logout: () => {
        storage.remove(STORAGE_KEYS.ACCESS_TOKEN);
        set({ user: null, accessToken: null });
      },
      setUser: (user) => set({ user }),
    }),
    {
      name: STORAGE_KEYS.USER,
      partialize: (state) => ({ user: state.user }),
    },
  ),
);
