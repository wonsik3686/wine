import Header from '@/components/common/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Wine', template: '%s | Wine' },
  description:
    '와인을 추천해드립니다. 와인 전문가들이 제공하는 리뷰와 시음 노트, 와인 추천 정보를 한눈에 확인하세요. 적합한 와인을 선택하는 데 도움을 드립니다.',
  keywords: [
    '와인 리뷰',
    '와인 추천',
    '와인 정보',
    '포도주',
    '스파클링 와인',
    '레드 와인',
    '화이트 와인',
  ],
  metadataBase: new URL('https://wine-cdi.vercel.app/'),
};

function HomeLayout({ children }: { children: React.ReactNode | JSX.Element }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default HomeLayout;
