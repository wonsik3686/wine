import useReviewModal from './modal/useReviewModal';
import useDeleteReview from './reviews/useDeleteReview';

export default function useReviewsActionController() {
  const { isReviewOpen, handleOpenAddReview } = useReviewModal();
  const {
    isDeleteReviewModalOpen,
    setIsDeleteReviewModalOpen,
    handleDeleteReview,
    handleDeleteReviewCancel,
  } = useDeleteReview();

  return {
    isReviewOpen,
    handleOpenAddReview,
    isDeleteReviewModalOpen,
    setIsDeleteReviewModalOpen,
    handleDeleteReview,
    handleDeleteReviewCancel,
  };
}
