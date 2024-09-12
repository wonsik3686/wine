'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import MonthlyWineCard from './MonthlyWineCard';

// TODO: 불러오기 기능 구현
export default function MonthlyWineSection() {
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
        <SwiperSlide className="!w-auto">
          <MonthlyWineCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineCard />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <MonthlyWineCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
