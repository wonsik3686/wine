import { AuthStoreProvider } from '@/providers/auth';
import { QueryProvider } from '@/providers/query';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wine',
  description: '와인을 추천해드립니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <QueryProvider>
          <AuthStoreProvider>{children}</AuthStoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
