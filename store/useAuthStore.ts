/* eslint-disable import/no-cycle */
import { loginAPI, registerAPI } from '@/api/auth.api';
import { User } from '@/types/user.types';
import { createStore } from 'zustand';
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

export const initialAuthState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

export type AuthStore = AuthState & AuthActions;

export const createAuthStore = (initState: AuthState = initialAuthState) => {
  return createStore<AuthStore>()(
    persist<AuthStore>(
      (setState) => {
        return {
          ...initState,

          login: async (email, password) => {
            const userInfo = await loginAPI({ email, password });
            setState(() => ({ ...userInfo }));
          },
          logout: () => {
            setState(() => ({
              user: null,
              accessToken: null,
              refreshToken: null,
            }));
          },
          register: async ({
            email,
            nickname,
            password,
            passwordConfirmation,
          }) => {
            const userInfo = await registerAPI({
              email,
              nickname,
              password,
              passwordConfirmation,
            });
            setState(() => ({ ...userInfo }));
          },
          setAccessToken: (pAccessToken) => {
            setState((state) => ({
              ...state,
              accessToken: pAccessToken,
            }));
          },
        };
      },
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
