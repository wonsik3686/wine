'use client';

import AddReviewModal from '@/components/modal/reviewmodal/AddReviewModal';
import WineDetailCard from '@/components/wines/WineDetailCard';
import WineReviewList from '@/components/wines/WineReviewList';
import WineReviewsRating from '@/components/wines/WineReviewsRating';
import useReviewModal from '@/hooks/modal/useReviewModal';
import { useWineDetail } from '@/queries/wines.queries';
import { useEffect } from 'react';

export default function WineDetail({ params }: { params: { id: number } }) {
  const { wineDetail } = useWineDetail({ id: params.id });
  const { isReviewOpen, handleOpenAddReview } = useReviewModal();

  useEffect(() => {}, [wineDetail]);

  return (
    <>
      <section className="hidden">{params.id}</section>
      {wineDetail && <WineDetailCard wineDetail={wineDetail} />}
      <section className="flex tab:flex-col-reverse tab:gap-[2.25rem] mob:gap-[1.25rem] pc:flex-row pc:gap-[3.75rem] ">
        {wineDetail && <WineReviewList reviews={wineDetail.reviews} />}
        {wineDetail && (
          <WineReviewsRating
            avgRating={wineDetail.avgRating}
            avgRatings={wineDetail.avgRatings}
            reviewCount={wineDetail.reviewCount}
            onOpenReviewModal={handleOpenAddReview}
          />
        )}
      </section>
      <AddReviewModal isOpen={isReviewOpen} onClick={handleOpenAddReview} />
    </>
  );
}
