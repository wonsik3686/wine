'use client';

import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Chip from './Chip';

import 'swiper/css';
import 'swiper/css/free-mode';

type ChipSwiperProps = { slideData: string[] };

export default function ChipSwiper({ slideData }: ChipSwiperProps) {
  return (
    <div className="overflow-hidden">
      <Swiper
        loop={false}
        slidesPerView="auto"
        spaceBetween={8}
        freeMode
        modules={[FreeMode]}
      >
        {slideData.map((text) => (
          <SwiperSlide key={`slider-${text}`} style={{ width: 'auto' }}>
            <Chip label={text} isDisabled />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
