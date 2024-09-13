import '@/app/globals.css';
import MonthlyWineSection from '@/components/wines/MonthlyWineSection';
import WineSection from '@/components/wines/WineSection';

export default function Wines() {
  return (
    <main
      className="flex min-h-screen w-full
     flex-col items-center gap-[50px] bg-white p-[20px] mob:p-[16px]"
    >
      <MonthlyWineSection />
      <WineSection />
    </main>
  );
}
