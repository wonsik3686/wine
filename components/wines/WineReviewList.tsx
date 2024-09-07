'use client';

import { WineDetailType } from '@/types/wine.types';
import Image from 'next/image';
import { useState } from 'react';
import { RatingBox } from '../common/Boxes';
import ChipSwiper from '../common/ChipSwiper';
import Dropdown from '../common/dropdown/Dropdown';
import Profile from '../common/Profile';

type WineRevieListProps = Pick<WineDetailType, 'reviews'>;

export default function WineRevieList({ reviews }: WineRevieListProps) {
  const [expandedReviewIndexes, setExpandedReviewIndexes] = useState<number[]>(
    []
  );
  const dropdwonOptions = [
    { label: '수정하기', value: 'edit' },
    { label: '삭제하기', value: 'delete' },
  ];

  const toggleReview = (index: number) => {
    if (expandedReviewIndexes.includes(index)) {
      setExpandedReviewIndexes(
        expandedReviewIndexes.filter((i) => i !== index)
      );
    } else {
      setExpandedReviewIndexes([...expandedReviewIndexes, index]);
    }
  };

  return (
    <div className="flex flex-col pc:mt-[3.75rem] pc:w-[50rem]">
      <h3 className="font-sans text-xl font-bold text-gray-800 pc:mb-[1.38rem] tab:hidden mob:hidden">
        리뷰 목록
      </h3>
      {reviews.map((review, index) => (
        <article
          className="mb-5 mt-2 flex flex-col items-center justify-center
												gap-[0.625rem] self-stretch rounded-2xl border-[1px] border-gray-300 px-10 pb-6 pt-8
												mob:px-6 mob:py-4"
        >
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="h-16 w-16 mob:h-[2.625rem] mob:w-[2.625rem]">
                <Profile src="" />
              </div>
              <div className="flex flex-col">
                <b className="font-sans text-2lg font-semibold text-gray-800 mob:text-lg">
                  와인러버
                </b>
                <p className="font-sans text-lg font-normal text-gray-500 mob:text-md">
                  10시간 전
                </p>
              </div>
            </div>
            <div className="flex items-start gap-7 mob:gap-[1.12rem]">
              <div className="relative h-[2.375rem] w-[2.375rem] mob:h-8 mob:w-8">
                <button>
                  <Image
                    src="/icons/iconHeart.png"
                    alt="하트 아이콘"
                    fill
                    className="object-contain"
                  />
                </button>
              </div>
              <Dropdown
                type="action"
                options={dropdwonOptions}
                onSelect={(value: string | number) => {}}
                optionClassName="text-center"
                trigger={
                  <button className="relative h-[2.375rem] w-[2.375rem] cursor-pointer mob:h-8 mob:w-8">
                    <Image
                      src="/icons/iconDot.png"
                      alt="더보기 아이콘"
                      fill
                      className="object-contain"
                    />
                  </button>
                }
              />
            </div>
          </div>
          <div className="mt-5 flex w-full">
            <div className="relative overflow-hidden">
              <div
                className="pointer-events-none absolute z-10 h-full w-full
															bg-gradient-to-l from-white via-white/0 via-5% to-transparent"
              />
              <ChipSwiper
                slideData={[
                  '체리',
                  '오크',
                  '카라멜',
                  '시트러스',
                  '담배잎',
                  '커피',
                  '체리',
                  '오크',
                  '카라멜',
                  '시트러스',
                  '담배잎',
                  '커피',
                  '체리',
                  '오크',
                  '카라멜',
                  '시트러스',
                  '담배잎',
                  '커피',
                ]}
              />
            </div>
            <div>
              <RatingBox rating={5} />
            </div>
          </div>
          <div
            className={`mt-6 ${expandedReviewIndexes.includes(index) ? '' : 'hidden'}`}
          >
            <p className="font-sans text-lg font-normal text-gray-800">
              Deep maroon color, tasting notes of blackberry, dark chocolate,
              plum. Super jammy and bold with some smoky after notes. Big
              flavor. Amazing value (would pay three times the price for it),
              well balanced flavor. Could drink all day everyday with or without
              food. I need more immediately.
            </p>
            <div className="mt-5">바디감 타닌 당도 산미</div>
          </div>
          <button
            id="btnExpandReview"
            onClick={() => toggleReview(index)}
            className="relative h-[1.875rem] w-full rounded-b-xl transition-all duration-200 ease-in-out hover:bg-gray-200 hover:opacity-80"
          >
            <Image
              src={
                expandedReviewIndexes.includes(index)
                  ? '/icons/iconArrowUp.svg'
                  : '/icons/iconArrowDown.svg'
              }
              alt="펼치기 아이콘"
              fill
              className="object-contain"
            />
          </button>
        </article>
      ))}
    </div>
  );
}
