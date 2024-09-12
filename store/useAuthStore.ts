/* eslint-disable import/no-cycle */
import { axiosInstance } from '@/api/_axiosInstance';
import { User } from '@/types/user.types';
import { create } from 'zustand';
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
  setAccessToken: (accessToken: string) => void;
  setReviewLiked: (reviewId: number) => void;
  setReviewUnlike: (reviewId: number) => void;
};

export type AuthStore = AuthState & AuthActions;

export const useAuthStore = create(
  persist<AuthStore>(
    (setState) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      reviewLikedList: [],

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
          reviewLikedList: [],
        }));
      },
      setAccessToken: (pAccessToken) => {
        setState((state) => ({
          ...state,
          accessToken: pAccessToken,
        }));
      },
      setReviewLiked: (reviewId) => {
        setState((state) => ({
          ...state,
          reviewLikedList: state.reviewLikedList.includes(reviewId)
            ? state.reviewLikedList
            : [...state.reviewLikedList, reviewId],
        }));
      },
      setReviewUnlike: (reviewId) => {
        setState((state) => ({
          ...state,
          reviewLikedList: state.reviewLikedList.filter(
            (id) => id !== reviewId
          ),
        }));
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
