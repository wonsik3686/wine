import { useRemoveReview } from '@/queries/reviews.queries';
import { useState } from 'react';

export default function useDeleteReview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { removeReview, isRemoveReviewPending } = useRemoveReview();

  const handleCancelClick = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    } else setIsModalOpen(false);
  };

  const handleDeleteClick = async (reviewId: number) => {
    if (!isRemoveReviewPending) {
      await removeReview({ id: reviewId });
    }
    setIsModalOpen(false);
  };

  return {
    isDeleteReviewModalOpen: isModalOpen,
    setIsDeleteReviewModalOpen: setIsModalOpen,
    handleDeleteReviewCancel: handleCancelClick,
    handleDeleteReview: handleDeleteClick,
  };
}
