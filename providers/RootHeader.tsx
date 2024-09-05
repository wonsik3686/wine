'use client';

import Header from '@/components/common/Header';
import { usePathname } from 'next/navigation';

function RootHeader({ children }: { children: React.ReactNode | JSX.Element }) {
  const pathname = usePathname();
  const isAuthPage = pathname === ('/login' || '/signup');

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
    </>
  );
}

export default RootHeader;
