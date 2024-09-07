'use client';

import { WineDetailType } from '@/types/wine.types';
import Button from '../common/Button';
import RatingProgressbar from '../common/RatingProgressbar';
import StarRating from '../common/StarRating';

type WineReviewsRatingProps = Pick<
  WineDetailType,
  'avgRatings' | 'reviewCount' | 'avgRating'
>;

export default function WineReviewsRating({
  avgRatings,
}: WineReviewsRatingProps) {
  return (
    <>
      <div className="mt-14 flex pc:flex-col tab:justify-center mob:mt-10 mob:flex-col">
        <div className="flex tab:flex-col mob:mb-4 mob:flex-row mob:justify-between">
          <div className="flex justify-center pc:mb-5 tab:mb-5 tab:mr-20 mob:mb-0 mob:mr-0">
            <b className="font-font-sans text-7xl font-extrabold text-gray-800">
              4.8
            </b>
            <div className="ml-5 flex flex-col justify-center">
              <StarRating isInteractive={false} rating={4.5} size="small" />
              <p className="mt-[0.31rem] text-gray-500">5,446개의 후기</p>
            </div>
          </div>
          <div className="pc:hidden">
            <Button
              buttonColor="purple"
              buttonStyle="box"
              buttonWidth="fitToChildren"
              textColor="white"
            >
              리뷰 남기기
            </Button>
          </div>
        </div>
        <div className="pc: mb-[1.88rem]">
          <RatingProgressbar
            Ratings={[
              { key: 5, value: 700 }, // 5점의 개수는 50개
              { key: 4, value: 2200 }, // 4점의 개수는 30개
              { key: 3, value: 1300 }, // 3점의 개수는 20개
              { key: 2, value: 446 }, // 2점의 개수는 10개
              { key: 1, value: 300 }, // 1점의 개수는 5개
            ]}
            totalCount={5446}
          />
        </div>
        <div className="tab:hidden">
          <Button
            buttonColor="purple"
            buttonStyle="box"
            buttonWidth="fitToChildren"
            textColor="white"
          >
            리뷰 남기기
          </Button>
        </div>
      </div>
    </>
  );
}
