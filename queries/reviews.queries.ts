import { deleteReview } from '@/api/reviews.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useRemoveReview(onSuccess?: () => void) {
  const queryClient = useQueryClient();
  const { mutate: removeReview, isPending: isRemoveReviewPending } =
    useMutation({
      mutationFn: deleteReview,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['wineDetail'] });
        onSuccess?.();
      },
    });

  return { removeReview, isRemoveReviewPending };
}
