import { axiosInstance } from '@/api/_axiosInstance';
import { User } from '@/types/user.types';
import { create } from 'zustand';

export type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthActions = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((setState, getState) => ({
  user: null,
  accessToken: null,
  refreshToken: null,

  login: async (email, password) => {
    const response = await axiosInstance.post<AuthState>(
      '/auth/signIn',
      {
        email,
        password,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    setState(() => ({ ...response.data }));
  },
  logout: () => {
    setState(() => ({
      user: null,
      accessToken: null,
      refreshToken: null,
    }));
  },
}));
