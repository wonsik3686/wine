'use client';

import { useReviewModalStore } from '@/store/useReviewModalStore';
import { WineDetailType } from '@/types/wine.types';
import Button from '../common/Button';
import RatingProgressbar from '../common/RatingProgressbar';
import StarRating from '../common/StarRating';

type WineReviewsRatingProps = Pick<
  WineDetailType,
  'avgRatings' | 'reviewCount' | 'avgRating'
> & { onOpenReviewModal?: () => void };

export default function WineReviewsRating({
  avgRatings,
  reviewCount,
  avgRating,
  onOpenReviewModal,
}: WineReviewsRatingProps) {
  const { setReviewModalMode } = useReviewModalStore();
  // Ratings에 넣기 위한 변환
  const ratingsArray = Object.entries(avgRatings).map(([key, value]) => ({
    key: Number(key),
    value,
  }));

  const handleOpenReviewModal = () => {
    if (onOpenReviewModal) {
      setReviewModalMode('add');
      onOpenReviewModal();
    }
  };

  return (
    <div className="mt-14 flex tab:justify-center mob:mt-10 mob:flex-col pc:flex-col">
      <div className="flex tab:flex-col mob:mb-4 mob:flex-row mob:justify-between">
        <div className="flex justify-center tab:mb-5 tab:mr-20 mob:mb-0 mob:mr-0 pc:mb-5">
          <b className="font-font-sans text-7xl font-extrabold text-gray-800">
            {avgRating ? avgRating.toFixed(1) : '0.0'}
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
            onClick={handleOpenReviewModal}
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
          onClick={handleOpenReviewModal}
        >
          리뷰 남기기
        </Button>
      </div>
    </div>
  );
}
