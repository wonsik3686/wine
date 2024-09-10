import { DeleteReviewRequest } from '@/types/dto/request/review.request.types';
import { DeleteReviewResponse } from '@/types/dto/response/review.response.types';
import { axiosInstance } from './_axiosInstance';

export const deleteReview = async ({ ...params }: DeleteReviewRequest) => {
  const response = await axiosInstance<DeleteReviewResponse>({
    method: 'DELETE',
    url: `/reviews/${params.id}`,
  });
  return response;
};
