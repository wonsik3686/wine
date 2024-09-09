import { QueryProvider } from '@/providers/query';
import RootHeader from '@/providers/RootHeader';
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
      <body className="font-sans">
        <QueryProvider>
          <RootHeader>{children}</RootHeader>
        </QueryProvider>
      </body>
    </html>
  );
}
