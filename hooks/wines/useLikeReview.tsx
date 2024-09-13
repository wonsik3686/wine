import { useAuthStore } from '@/providers/auth';

export default function useLikeReview() {
  const { reviewLikedList, setReviewLiked, setReviewUnlike } = useAuthStore(
    (state) => ({
      reviewLikedList: state.reviewLikedList,
      setReviewLiked: state.setReviewLiked,
      setReviewUnlike: state.setReviewUnlike,
    })
  );

  const isReviewLiked = (reviewId: number) => {
    return reviewLikedList.includes(reviewId);
  };

  const likeReview = (reviewId: number) => {
    if (isReviewLiked(reviewId)) setReviewUnlike(reviewId);
    else setReviewLiked(reviewId);
  };

  return { likeReview, isReviewLiked };
}
