import { getWineDetail } from '@/api/wine.api';
import { WineDetailRequest } from '@/types/dto/request/wine.request.types';
import { WineDetailResponse } from '@/types/dto/response/wine.response.types';
import { useQuery } from '@tanstack/react-query';

export default function useWineDetail({ ...params }: WineDetailRequest) {
  const { data, error, isLoading } = useQuery<WineDetailResponse>({
    queryKey: ['wineDetail', params.id],
    queryFn: async () => {
      const response = await getWineDetail(params);
      return response.data;
    },
  });

  return {
    wineDetail: data,
    wineDetailError: error,
    isWineDetailLoading: isLoading,
  };
}
