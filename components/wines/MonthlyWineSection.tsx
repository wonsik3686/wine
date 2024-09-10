'use client';

import { getRecommendedWines } from '@/api/wines.api';
import { RecommendedWineResponse } from '@/types/dto/response/wine.response.types';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import MonthlyWineCard from './MonthlyWineCard';
import MonthlyWineTestCard from './MonthlyWineTestCard';

export default function MonthlyWineSection() {
  const [recommendedWines, setRecommendedWines] =
    useState<RecommendedWineResponse>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecommendedWines = async () => {
      setLoading(true);
      try {
        const response = await getRecommendedWines(5);
        setRecommendedWines(response);
      } catch (error) {
        console.error('Error fetching recommended wines:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedWines();
  }, []);

  if (loading) {
    return <div>LOADING!</div>;
  }

  return (
    <section
      className="relative mb-[40px] flex h-[310px] max-w-[1140px] flex-col
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
        {recommendedWines.map((wine) => (
          <SwiperSlide key={wine.id} className="!w-auto">
            <MonthlyWineCard
              wineName={wine.name}
              wineImageUrl={wine.image}
              wineRating={wine.avgRating}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide className="!w-auto">
          <MonthlyWineTestCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineTestCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineTestCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineTestCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineTestCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineTestCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineTestCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
