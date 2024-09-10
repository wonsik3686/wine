import { WineDetailType, WineListType } from '@/types/wine.types';

/** 와인 생성 응답 타입 정의 */
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

/** 와인 목록 조회 응답 타입 정의 */
export type WineListResponse = {
  list: WineListType[];
  totalCount: number;
  nextCursor: number | null; // nullable true
};

/** 와인 상세 정보 응답 타입 정의 */
export type WineDetailResponse = WineDetailType;

/** 추천 와인 응답 타입 정의 */
export type RecommendedWineResponse = WineListType[];
