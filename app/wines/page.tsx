import '@/app/globals.css';
import MonthlyWineSection from '@/components/wines/MonthlyWineSection';
import WineSection from '@/components/wines/WineSection';

export default function Wines() {
  return (
    <main
      className="mt-[50px] flex min-h-screen flex-col bg-white
      p-[20px] mob:p-[16px]"
    >
      <MonthlyWineSection />
      <WineSection />
    </main>
  );
}
