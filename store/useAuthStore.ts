/* eslint-disable import/no-cycle */
import { loginAPI, oAuthLoginAPI, registerAPI } from '@/api/auth.api';
import { User } from '@/types/user.types';
import { createStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  reviewLikedList: number[];
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
  setReviewLiked: (reviewId: number) => void;
  setReviewUnlike: (reviewId: number) => void;
  setUser: (user: User | null) => void;
  oAuthLogin: (
    provider: 'GOOGLE' | 'KAKAO',
    data: {
      [key: string]: string;
    }
  ) => void;
};

export const initialAuthState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  reviewLikedList: [],
};

export type AuthStore = AuthState & AuthActions;

export const createAuthStore = (initState: AuthState = initialAuthState) => {
  return createStore<AuthStore>()(
    persist(
      (set) => ({
        ...initState,

        login: async (email, password) => {
          const userInfo = await loginAPI({ email, password });
          set(() => ({ ...userInfo }));
        },
        logout: () => {
          set(() => ({
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
          set(() => ({ ...userInfo }));
        },

        setAccessToken: (accessToken) => {
          set((state) => ({
            ...state,
            accessToken,
          }));
        },
        setReviewLiked: (reviewId) => {
          set((state) => ({
            ...state,
            reviewLikedList: state.reviewLikedList.includes(reviewId)
              ? state.reviewLikedList
              : [...state.reviewLikedList, reviewId],
          }));
        },
        setReviewUnlike: (reviewId) => {
          set((state) => ({
            ...state,
            reviewLikedList: state.reviewLikedList.filter(
              (id) => id !== reviewId
            ),
          }));
        },
        setUser: (user) => {
          set((state) => ({
            ...state,
            user,
          }));
        },
        oAuthLogin: async (provider, data) => {
          const userInfo = await oAuthLoginAPI({ provider, data });
          set(() => ({ ...userInfo }));
        },
      }),

      {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
