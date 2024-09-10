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

export const postWineReview = async (reviewData: {
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: string[];
  content: string;
  wineId: number;
}) => {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;
  const response = await axiosInstance({
    method: 'POST',
    url: '/reviews',
    data: reviewData,
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
