import { WineDetailType, WineListType } from '@/types/wine.types';

// CreateWineBody 타입 정의
export type CreateWineRequest = Pick<
  WineDetailType,
  'name' | 'region' | 'image' | 'price' | 'type'
>;

export type WineListRequest = {
  teamId: string; // 필수 경로 파라미터 (8-4 형식)
  limit: number; // 필수 쿼리 파라미터, 가져올 항목의 최대 개수
  cursor?: number; // 선택적 쿼리 파라미터, 페이지네이션을 위한 커서
  minPrice?: number; // 선택적 쿼리 파라미터, 최소 가격 필터
  maxPrice?: number; // 선택적 쿼리 파라미터, 최대 가격 필터
  rating?: number; // 선택적 쿼리 파라미터, 평점 필터
} & Partial<Pick<WineListType, 'type' | 'name'>>;
