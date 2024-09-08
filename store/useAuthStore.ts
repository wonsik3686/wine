import { axiosInstance } from '@/api/_axiosInstance';
import { User } from '@/types/user.types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};

export type AuthActions = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setAccessToken: (accessToken: string) => void;
};

export type AuthStore = AuthState & AuthActions;

export const useAuthStore = create(
  persist<AuthStore>(
    (setState) => ({
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
      setAccessToken: (accessToken) => {
        setState(() => ({
          accessToken: accessToken,
        }));
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
