import { ReviewDetailType } from '@/types/review.types';

export type DeleteReviewResponse = {
  id?: number;
  message?: string;
};

export type GetReviewResponse = ReviewDetailType;

export type PostWineReviewResponse = ReviewDetailType;
