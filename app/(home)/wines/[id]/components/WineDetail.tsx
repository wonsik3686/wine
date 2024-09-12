'use client';

import AddReviewModal from '@/components/modal/reviewmodal/AddReviewModal';
import NoReviewContent from '@/components/wines/NoReviewContent';
import WineDetailCard from '@/components/wines/WineDetailCard';
import WineReviewList from '@/components/wines/WineReviewList';
import WineReviewsRating from '@/components/wines/WineReviewsRating';
import useReviewModal from '@/hooks/modal/useReviewModal';
import { useWineDetail } from '@/queries/wines.queries';
import { useReviewModalStore } from '@/store/useReviewModalStore';

type WineDetailProps = { wineId: number };

export default function WineDetail({ wineId }: WineDetailProps) {
  const { wineDetail } = useWineDetail({ id: wineId });
  const { isReviewOpen, handleOpenAddReview } = useReviewModal();
  const { reviewModalMode, selectedReviewToUpdateId } = useReviewModalStore();

  return (
    <>
      {wineDetail && <WineDetailCard wineDetail={wineDetail} />}
      <section className="flex tab:flex-col-reverse tab:gap-[2.25rem] mob:gap-[1.25rem] pc:flex-row pc:gap-[3.75rem] ">
        {wineDetail?.reviews && wineDetail.reviews.length > 0 ? (
          <>
            <WineReviewList
              reviews={wineDetail.reviews}
              onOpenReviewModal={handleOpenAddReview}
            />
            <WineReviewsRating
              avgRating={wineDetail.avgRating}
              avgRatings={wineDetail.avgRatings}
              reviewCount={wineDetail.reviewCount}
              onOpenReviewModal={handleOpenAddReview}
            />
          </>
        ) : (
          <NoReviewContent />
        )}
      </section>
      {wineDetail && (
        <AddReviewModal
          isOpen={isReviewOpen}
          onClick={handleOpenAddReview}
          mode={reviewModalMode}
          wineDetail={{ id: wineDetail.id, name: wineDetail.name }}
          reviewId={selectedReviewToUpdateId}
        />
      )}
    </>
  );
}
