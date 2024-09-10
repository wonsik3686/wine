import { deleteReview } from '@/api/reviews.api';
import { useMutation } from '@tanstack/react-query';

export function useRemoveReview(onSuccess?: () => void) {
  const { mutate: removeReview, isPending: isRemoveReviewPending } =
    useMutation({
      mutationFn: deleteReview,
      onSuccess: () => {
        onSuccess?.();
      },
    });

  return { removeReview, isRemoveReviewPending };
}
