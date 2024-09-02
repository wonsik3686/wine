import Image from 'next/image';
import Header from '@/components/common/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24"></main>
    </>
  );
}
