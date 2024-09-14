'use client';

import { SessionProvider } from 'next-auth/react';

import { type ReactNode, createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { type AuthStore, createAuthStore } from '@/store/useAuthStore';

export type AuthStoreApi = ReturnType<typeof createAuthStore>;

export const AuthStoreContext = createContext<AuthStoreApi | undefined>(
  undefined
);

export interface AuthStoreProviderProps {
  children: ReactNode;
}

export function AuthStoreProvider({ children }: AuthStoreProviderProps) {
  const storeRef = useRef<AuthStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createAuthStore();
  }

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
}

export const useAuthStore = <T,>(selector: (store: AuthStore) => T): T => {
  const authStoreContext = useContext(AuthStoreContext);

  if (!authStoreContext) {
    throw new Error('useAuthStore must be used within AuthStoreProvider');
  }

  return useStore(authStoreContext, selector);
};

export function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
