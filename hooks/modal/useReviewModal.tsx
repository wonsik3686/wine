import { useState } from 'react';

export default function useReviewModal() {
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

  const handleOpenAddReview = () => {
    if (!isReviewOpen) {
      setIsReviewOpen(true);
    } else setIsReviewOpen(false);
  };

  return { isReviewOpen, setIsReviewOpen, handleOpenAddReview };
}
