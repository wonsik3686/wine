import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wine',
  description: '와인을 추천해드립니다.',
};

export default function WineDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-[71.25rem] flex-col pc:mt-5 tab:mt-5 tab:px-5 mob:mt-3 mob:px-4">
        {children}
      </div>
    </main>
  );
}
