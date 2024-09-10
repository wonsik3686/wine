import {
  GetReviewRequest,
  PostWineReviewRequest,
  UpdateReviewRequest,
} from '@/types/dto/request/review.request.types';
import {
  GetReviewResponse,
  PostWineReviewResponse,
} from '@/types/dto/response/review.response.types';
import { axiosInstance } from './_axiosInstance';

export const getReview = async ({ ...params }: GetReviewRequest) => {
  const response = await axiosInstance<GetReviewResponse>({
    method: 'GET',
    url: `/reviews/${params.id}`,
  });
  return response;
};

export const updateReview = async ({ ...params }: UpdateReviewRequest) => {
  const response = await axiosInstance<PostWineReviewResponse>({
    method: 'PATCH',
    url: `/reviews/${params.reviewId}`,
    data: params.data,
  });
  return response.data;
};

export const postWineReview = async (reviewData: PostWineReviewRequest) => {
  const response = await axiosInstance<PostWineReviewResponse>({
    method: 'POST',
    url: '/reviews',
    data: reviewData,
  });

  return response;
};
