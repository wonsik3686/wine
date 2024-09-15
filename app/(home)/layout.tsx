import HeaderWrapper from './header-wrapper';
import KakaoScript from '@/utils/script/KakaoScript';

function HomeLayout({ children }: { children: React.ReactNode | JSX.Element }) {
  return (
    <>
      <HeaderWrapper />
      {children}
      <KakaoScript />
    </>
  );
}

export default HomeLayout;
