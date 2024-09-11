/* eslint-disable import/no-cycle */
import { loginAPI, registerAPI } from '@/api/auth.api';
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
      }),

      {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};

//       setAccessToken: (pAccessToken) => {
//         set((state) => ({
//           ...state,
//           accessToken: pAccessToken,
//         }));
//       },
//     };
//   },

//   logout: () => {
//     setState(() => ({
//       user: null,
//       accessToken: null,
//       refreshToken: null,
//       reviewLikedList: [],
//     }));
//   },
//   setAccessToken: (pAccessToken) => {
//     setState((state) => ({
//       ...state,
//       accessToken: pAccessToken,
//     }));
//   },
//   setReviewLiked: (reviewId) => {
//     setState((state) => ({
//       ...state,
//       reviewLikedList: state.reviewLikedList.includes(reviewId)
//         ? state.reviewLikedList
//         : [...state.reviewLikedList, reviewId],
//     }));
//   },
//   setReviewUnlike: (reviewId) => {
//     setState((state) => ({
//       ...state,
//       reviewLikedList: state.reviewLikedList.filter(
//         (id) => id !== reviewId
//       ),
//     }));
//   },
// }),
