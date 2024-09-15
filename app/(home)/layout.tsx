import { Suspense } from 'react';
import HeaderWrapper from './header-wrapper';

function HomeLayout({ children }: { children: React.ReactNode | JSX.Element }) {
  return (
    <>
      <Suspense>
        <HeaderWrapper />
      </Suspense>

      {children}
    </>
  );
}

export default HomeLayout;
