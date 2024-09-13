'use client';

import ArrowRight from '@/assets/icons/iconArrowRight.svg';
import { PriceBox } from '@/components/common/Boxes';
import StarRating from '@/components/common/StarRating';
import { useRouter } from 'next/navigation';

export default function WineCard({
  wineId,
  wineName,
  wineImageUrl,
  wineRating,
  winePrice,
  wineRegion,
  recentReview,
  reviewCount,
}: {
  wineId: number;
  wineName: string;
  wineImageUrl: string;
  wineRating: number;
  winePrice: number;
  wineRegion: string;
  recentReview: string | null;
  reviewCount: number;
}) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/wines/${wineId}`);
  };

  const reducedWineName =
    wineName.length > 25 ? `${wineName.slice(0, 25)}…` : wineName;

  return (
    <div
      className="flex h-auto min-h-[375px] w-full min-w-[800px] flex-col rounded-2xl
      border border-gray-300 bg-white pl-[60px] pr-[40px] pt-[40px] shadow tab:min-w-full
      mob:pl-[20px] mob:pr-[20px] mob:pt-[30px]"
    >
      {/* 상단부 */}
      <div className="relative flex h-[210px] w-full gap-[80px] overflow-hidden mob:h-[220px] mob:gap-[36px]">
        <div
          className="h-[110%] w-[100px] bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${wineImageUrl})`,
          }}
        />
        {/* 와인명 + 국가 + 가격 */}
        <div className="flex w-full justify-between gap-[16px] mob:flex-col mob:justify-normal mob:gap-[22px]">
          <div className="inline-flex h-auto flex-col items-start justify-start gap-[11px] mob:gap-[0px]">
            <div className="mb-[6px] w-auto max-w-[300px] text-3xl font-semibold mob:text-xl">
              {reducedWineName}
            </div>
            <div className="text-base font-normal leading-relaxed text-gray-500 mob:text-sm mob:leading-normal">
              {wineRegion}
            </div>
            <div className="flex justify-between">
              <PriceBox
                className="mt-[8px] h-[42px] items-center justify-start gap-2.5 rounded-xl bg-purple-10 px-[15px] py-2 mob:h-[36px]"
                price={winePrice}
              />
            </div>
          </div>
          <div className="relative inline-flex max-w-[100px] flex-col items-start justify-start gap-[15px] mob:w-[80px] mob:flex-row mob:items-center mob:gap-[10px]">
            <div className="text-5xl font-extrabold mob:text-[28px]">
              {wineRating.toFixed(1)}
            </div>
            <div className="flex flex-col items-center gap-[10px] mob:gap-[5px]">
              <div className="h-[18px] w-[100px] mob:w-[80px]">
                <StarRating rating={wineRating} />
              </div>
              <div className="w-[100px] text-xs font-normal text-gray-500 mob:w-[80px] mob:text-[10px] mob:leading-[14px]">
                {reviewCount > 0 ? `${reviewCount}개의 후기` : '0개의 후기'}
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-[26px] right-[0px] flex h-[36px] w-[36px] items-center justify-center"
          type="button"
          aria-label="해당 와인 페이지로"
          onClick={handleRedirect}
        >
          <ArrowRight className="h-full w-full" />
        </button>
      </div>
      {/* 하단부 */}
      <hr className="mb-[20px] ml-[-60px] mr-[-40px] border-t-[1px] border-gray-300 tab:mr-[-20px] mob:ml-[-20px]" />
      <div className="inline-flex h-auto w-full flex-col items-start justify-start gap-[10px] pb-[20px]">
        <div className="select-none text-base font-bold leading-relaxed">
          최신 후기
        </div>
        <div className="w-full text-base font-normal leading-relaxed text-gray-500">
          {recentReview || '최신 후기가 없습니다.'}
        </div>
      </div>
    </div>
  );
}
