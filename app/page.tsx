import Image from 'next/image';
import WineCard from '@/components/common/WineCard';

export default function Home() {
  return (
    <>
      <WineCard />
      <main className="flex min-h-screen flex-col items-center justify-center p-24"></main>
    </>
  );
}
