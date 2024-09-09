/* eslint-disable import/no-cycle */
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
  register: ({
    email,
    nickname,
    password,
    passwordConfirmation,
  }: {
    email: string;
    nickname: string;
    password: string;
    passwordConfirmation: string;
  }) => Promise<void>;
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
      register: async ({ email, nickname, password, passwordConfirmation }) => {
        const response = await axiosInstance.post(
          '/auth/signUp',
          {
            email,
            nickname,
            password,
            passwordConfirmation,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 201) {
          setState(() => ({ ...response.data }));
        } else {
          throw new Error(response.data);
        }
      },
      setAccessToken: (pAccessToken) => {
        setState((state) => ({
          ...state,
          accessToken: pAccessToken,
        }));
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
