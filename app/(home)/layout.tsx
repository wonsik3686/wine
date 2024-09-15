import KakaoScript from '@/utils/script/KakaoScript';
import HeaderWrapper from './header-wrapper';

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
