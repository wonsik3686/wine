import { AuthStoreProvider, SessionProviderWrapper } from '@/providers/auth';
import { QueryProvider } from '@/providers/query';
import { AnimatePresence } from 'framer-motion';
import type { Metadata } from 'next';
import './globals.css';

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
  icons: {
    icon: '/icons/icon.svg',
    shortcut: '/icons/icon.svg',
    apple: '/icons/icon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/icon.svg',
    },
  },
  openGraph: {
    title: 'Wine',
    description:
      '와인을 추천해드립니다! 와인 전문가들이 제공하는 리뷰와 시음 노트, 와인 추천 정보를 한눈에 확인하세요!',
    url: 'https://wine-cdi.vercel.app',
    siteName: 'Wine',
    images: [
      {
        url: 'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/245/1726402235052/wine.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/245/1726402235052/wine.png',
        width: 1800,
        height: 1600,
        alt: 'Wine',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="max-w-full overflow-x-hidden">
        <SessionProviderWrapper>
          <QueryProvider>
            <AuthStoreProvider>
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </AuthStoreProvider>
          </QueryProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
