import { useAuthStore } from '@/store/useAuthStore';

export default function useLikeReview() {
  const { reviewLikedList, setReviewLiked, setReviewUnlike } = useAuthStore();

  const isReviewLiked = (reviewId: number) => {
    return reviewLikedList.includes(reviewId);
  };

  const likeReview = (reviewId: number) => {
    if (isReviewLiked(reviewId)) setReviewUnlike(reviewId);
    else setReviewLiked(reviewId);
  };

  return { likeReview, isReviewLiked };
}
