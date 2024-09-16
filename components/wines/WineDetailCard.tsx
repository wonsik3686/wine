'use client';

import ShareButtons from '@/app/(home)/wines/[id]/components/ShareButtons';
import { WineDetailType } from '@/types/wine.types';
import Image from 'next/image';
import { PriceBox } from '../common/Boxes';

type WineDetailProps = { wineDetail: WineDetailType };

export default function WineDetailCard({ wineDetail }: WineDetailProps) {
  return (
    <article className="relative z-0 mt-10 flex h-[16.25rem] w-full flex-col justify-end mob:h-[13.0625rem]">
      <div className="absolute bottom-1 left-[3px] z-10 h-[13.0625rem] w-[15.25rem] tab:h-[18.875rem] tab:w-[12.75rem] mob:h-[15.0625rem] mob:w-[6.12rem]">
        <Image
          src={wineDetail.image}
          alt="와인 이미지"
          fill
          sizes="13.0625rem"
          className="object-contain"
        />
      </div>
      <div className="h-[16.25rem] w-full rounded-2xl border-[1px] border-gray-300 mob:h-[13.0625rem]">
        <div className="ml-[16rem] mt-2 flex h-full flex-col justify-center tab:ml-[13.5rem] mob:ml-[7rem]">
          <h2 className="mb-5 w-[18.75rem] font-sans text-h2xl font-semibold text-gray-800 mob:mb-3 mob:w-[12.5rem] mob:text-xl">
            {wineDetail.name}
          </h2>
          <p className="mb-[0.81rem] font-sans text-lg font-regular text-gray-500 mob:mb-1 mob:text-sm">
            {wineDetail.region}
          </p>
          <PriceBox price={wineDetail.price} />
        </div>
        <div className="absolute tab:bottom-5 tab:right-8 mob:bottom-1 mob:right-1 pc:bottom-6 pc:right-10">
          <ShareButtons
            shareImage={wineDetail.image}
            shareTitle={`${wineDetail.name}`}
            shareDesc={`원산지: ${wineDetail.region} | 평점: ${wineDetail.avgRating} | ${wineDetail.recentReview ? wineDetail.recentReview.content : ''}`}
          />
        </div>
      </div>
    </article>
  );
}
