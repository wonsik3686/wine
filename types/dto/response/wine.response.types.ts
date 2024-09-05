import { WineListType } from '@/types/wine.types';

export type CreateWineResponse = Pick<
  WineListType,
  | 'id'
  | 'name'
  | 'region'
  | 'image'
  | 'price'
  | 'type'
  | 'avgRating'
  | 'reviewCount'
  | 'recentReview'
>;
