import {
  deleteReview,
  getReview,
  postWineReview,
  updateReview,
} from '@/apis/reviews.api';
import { GetReviewRequest } from '@/types/dto/request/review.request.types';
import { GetReviewResponse } from '@/types/dto/response/review.response.types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useReview({ ...params }: GetReviewRequest) {
  const { data, error, isLoading, refetch } = useQuery<GetReviewResponse>({
    queryKey: ['reviewDetail', params.id],
    queryFn: async () => {
      const response = await getReview(params);
      return response.data;
    },
    enabled: params.id !== 0,
  });
  return { data, error, isLoading, refetch };
}

export function useAddReview() {
  const queryClient = useQueryClient();
  const { mutate, data, error, isError, isPending } = useMutation({
    mutationKey: ['addReview'],
    mutationFn: postWineReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviewDetail'] });
      queryClient.invalidateQueries({ queryKey: ['wineDetail'] });
    },
  });
  return { mutate, data, error, isError, isPending };
}

export function useUpdateReview() {
  const queryClient = useQueryClient();
  const { mutate, data, error, isError, isPending } = useMutation({
    mutationKey: ['updateReview'],
    mutationFn: updateReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviewDetail'] });
      queryClient.invalidateQueries({ queryKey: ['wineDetail'] });
    },
  });
  return { mutate, data, error, isError, isPending };
}

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
