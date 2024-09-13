'use client';

import ConfirmModal from '@/components/modal/ConfirmModal';
import AddReviewModal from '@/components/modal/reviewmodal/AddReviewModal';
import NoReviewContent from '@/components/wines/NoReviewContent';
import WineDetailCard from '@/components/wines/WineDetailCard';
import WineReviewList from '@/components/wines/WineReviewList';
import WineReviewsRating from '@/components/wines/WineReviewsRating';
import useLoginConfrimModal from '@/hooks/modal/useLoginConfirmModal';
import useReviewModal from '@/hooks/modal/useReviewModal';
import { useAuthStore } from '@/providers/auth';
import { useWineDetail } from '@/queries/wines.queries';
import { useReviewModalStore } from '@/store/useReviewModalStore';
import { Suspense, useEffect } from 'react';
import WineDetailCardSkeleton from './skeletons/WineDetailCardSkeleton';

type WineDetailProps = { wineId: number };

export default function WineDetail({ wineId }: WineDetailProps) {
  const { wineDetail } = useWineDetail({ id: wineId });
  const { isReviewOpen, handleOpenAddReview } = useReviewModal();
  const { reviewModalMode, selectedReviewToUpdateId } = useReviewModalStore();
  const {
    isConfirmOpen,
    setIsConfirmOpen,
    handleConfirmOpenClick,
    handleConfirmClick,
  } = useLoginConfrimModal();
  const user = useAuthStore((set) => set.user);

  useEffect(() => {
    if (!user) {
      setIsConfirmOpen(true);
    } else {
      setIsConfirmOpen(false);
    }
  }, [user, setIsConfirmOpen]);

  return (
    <>
      <Suspense fallback={<WineDetailCardSkeleton />}>
        {wineDetail && <WineDetailCard wineDetail={wineDetail} />}
      </Suspense>
      <Suspense>
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
      </Suspense>
      {wineDetail && (
        <AddReviewModal
          isOpen={isReviewOpen}
          onClick={handleOpenAddReview}
          mode={reviewModalMode}
          wineDetail={{ id: wineDetail.id, name: wineDetail.name }}
          reviewId={selectedReviewToUpdateId}
        />
      )}
      <ConfirmModal
        isOpen={isConfirmOpen}
        confirmMessage="로그인이 필요한 서비스입니다"
        label="로그인"
        onConfirm={handleConfirmClick}
        onCancel={handleConfirmOpenClick}
        isOnlyConfirm
      />
    </>
  );
}
