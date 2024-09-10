import { ReviewDetailType } from '@/types/review.types';

export type GetReviewRequest = Pick<ReviewDetailType, 'id'>;

export type UpdateReviewRequest = {
  reviewId: number;
  data: Pick<
    ReviewDetailType,
    | 'rating'
    | 'lightBold'
    | 'smoothTannic'
    | 'drySweet'
    | 'softAcidic'
    | 'aroma'
    | 'content'
  >;
};

export type PostWineReviewRequest = Pick<
  ReviewDetailType,
  | 'rating'
  | 'lightBold'
  | 'smoothTannic'
  | 'drySweet'
  | 'softAcidic'
  | 'aroma'
  | 'content'
  | 'wineId'
>;
