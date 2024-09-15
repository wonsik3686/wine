import Header from '@/components/common/Header';
import KakaoScript from '@/utils/script/KakaoScript';

function HomeLayout({ children }: { children: React.ReactNode | JSX.Element }) {
  return (
    <>
      <Header />
      {children}
      <KakaoScript />
    </>
  );
}

export default HomeLayout;
