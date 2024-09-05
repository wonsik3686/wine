import { QueryProvider } from '@/providers/query';
import RootHeader from '@/providers/RootHeader';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <QueryProvider>
          <RootHeader>{children}</RootHeader>
        </QueryProvider>
      </body>
    </html>
  );
}
