import { getRecommendedWines, getWine, getWineDetail } from '@/api/wines.api';
import {
  WineDetailRequest,
  WineListRequest,
} from '@/types/dto/request/wine.request.types';
import {
  RecommendedWineResponse,
  WineDetailResponse,
  WineListResponse,
} from '@/types/dto/response/wine.response.types';
import {
  useInfiniteQuery,
  useQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';

export function useWineDetail({ ...params }: WineDetailRequest) {
  const { data, error, isLoading, refetch } =
    useSuspenseQuery<WineDetailResponse | null>({
      queryKey: ['wineDetail', params.id],
      queryFn: async () => {
        try {
          const response = await getWineDetail(params);
          return response.data;
        } catch (err: any) {
          // 401 에러 감지 및 처리
          if (err.response && err.response.status === 401) {
            return null;
          }
          throw err; // 다른 에러는 그대로 throw
        }
      },
    });

  return {
    wineDetail: data,
    wineDetailError: error,
    isWineDetailLoading: isLoading,
    refetchWineDetail: refetch,
  };
}

/**
 * ### 추천 와인 데이터 가져오는 훅
 *
 * @param {number} limit - 추천 와인 개수
 * @returns {{
 *   recommendedWines: RecommendedWineResponse | undefined;
 *   isLoading: boolean;
 *   error: Error | null;
 * }}
 */
export function useRecommendedWines(limit: number) {
  const { data, error, isLoading } = useQuery<RecommendedWineResponse, Error>({
    queryKey: ['recommendedWines', limit],
    queryFn: async () => {
      const response = await getRecommendedWines(limit);
      return response.data;
    },
    staleTime: 60000, // 1분간 캐시 유지
  });

  return {
    recommendedWines: data,
    isLoading,
    error,
  };
}

/**
 * ### 와인 리스트 데이터 가져오는 훅 (무한 스크롤 및 일반 페칭 통합)
 *
 * @param {WineListRequest} filters - 와인 목록을 필터링할 조건 객체
 * @returns {InfiniteQueryResult<WineListResponse, Error>}
 */
export function useWineList(filters: WineListRequest) {
  return useInfiniteQuery<WineListResponse, Error>({
    queryKey: ['wineList', filters],
    queryFn: async ({ pageParam = undefined }) => {
      const response = await getWine({
        ...filters,
        cursor: pageParam as number, // 무한 스크롤 시 nextCursor 사용
      });
      return response.data;
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined, // 다음 페이지를 위한 cursor 설정
    initialPageParam: undefined,
    staleTime: 5000, // 캐시 유지 시간
  });
}
