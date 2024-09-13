'use client';

import { useRecommendedWines } from '@/queries/wines.queries';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import MonthlyWineCard from './MonthlyWineCard';

export default function MonthlyWineSection() {
  // useRecommendedWines 훅 사용
  const { recommendedWines, isLoading, error } = useRecommendedWines(10);

  if (isLoading) {
    return <div>LOADING!</div>;
  }

  if (error) {
    return <div>와인 데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <section
      className="relative flex h-[310px] w-full max-w-[1140px] flex-col
    gap-[30px] rounded-2xl bg-gray-100
    pb-[30px] pl-[30px] pr-[30px] pt-[30px] mob:h-[241px] 
    mob:gap-[20px] mob:pb-[20px] mob:pl-[20px] mob:pr-[20px] mob:pt-[20px]"
    >
      <h1 className="inline-flex select-none text-xl font-bold mob:text-lg">
        이번 달 추천 와인
      </h1>
      <Swiper
        className="h-[200px] w-full"
        spaceBetween={15}
        slidesPerView="auto"
      >
        {recommendedWines?.map((wine) => (
          <SwiperSlide key={wine.id} className="!w-auto">
            <MonthlyWineCard
              wineId={wine.id}
              wineName={wine.name}
              wineImageUrl={wine.image}
              wineRating={wine.avgRating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
