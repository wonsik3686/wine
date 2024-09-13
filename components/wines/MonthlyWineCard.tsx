'use client';

import StarRating from '@/components/common/StarRating';
import { useRouter } from 'next/navigation';

type MonthlyWineCardProps = {
  wineId: number;
  wineName: string;
  wineImageUrl: string;
  wineRating: number;
};

export default function MonthlyWineCard({
  wineId,
  wineName,
  wineImageUrl,
  wineRating,
}: MonthlyWineCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/wines/${wineId}`);
  };

  return (
    <div
      className="relative h-[185px] w-[232px] cursor-pointer overflow-hidden
    rounded-xl bg-white px-[30px]
    pt-[24px] shadow mob:h-[153px]
    mob:w-[193px] mob:px-[25px]"
      onClick={handleCardClick}
    >
      <div className="flex h-full w-full items-start justify-start gap-[28px]">
        <div
          className="h-[177px] w-[44px] bg-cover bg-bottom bg-no-repeat mob:h-[150px] mob:w-[38px]"
          style={{
            backgroundImage: `url(${wineImageUrl})`,
          }}
        />
        <div className="inline-flex w-[100px] flex-col items-start justify-start gap-[6px] mob:w-[80px]">
          <div className="text-4xl font-extrabold mob:text-[28px]">
            {wineRating}
          </div>
          <div className="h-full w-[100px] mob:w-[80px]">
            <StarRating rating={wineRating} />
          </div>
          <div className="w-[100px] text-xs font-normal leading-[18px] text-gray-500 mob:w-[80px] mob:text-[10px] mob:leading-[14px]">
            {wineName}
          </div>
        </div>
      </div>
    </div>
  );
}
