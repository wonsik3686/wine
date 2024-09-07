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
  reviewCount,
  avgRating,
}: WineReviewsRatingProps) {
  // Ratings에 넣기 위한 변환
  const ratingsArray = Object.entries(avgRatings).map(([key, value]) => ({
    key: Number(key),
    value,
  }));
  return (
    <div className="mt-14 flex pc:flex-col tab:justify-center mob:mt-10 mob:flex-col">
      <div className="flex tab:flex-col mob:mb-4 mob:flex-row mob:justify-between">
        <div className="flex justify-center pc:mb-5 tab:mb-5 tab:mr-20 mob:mb-0 mob:mr-0">
          <b className="font-font-sans text-7xl font-extrabold text-gray-800">
            {avgRating.toFixed(1)}
          </b>
          <div className="ml-5 flex flex-col justify-center">
            <StarRating isInteractive={false} rating={avgRating} size="small" />
            <p className="mt-[0.31rem] text-gray-500">
              {reviewCount.toLocaleString()}개의 후기
            </p>
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
      <div className="pc:mb-[1.88rem]">
        <RatingProgressbar Ratings={ratingsArray} totalCount={reviewCount} />
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
  );
}
