import { WineDetailRequest } from '@/types/dto/request/wine.request.types';
import { WineDetailResponse } from '@/types/dto/response/wine.response.types';
import { axiosInstance } from './_axiosInstance';

export const getWineDetail = async ({ ...params }: WineDetailRequest) => {
  const response = await axiosInstance<WineDetailResponse>({
    method: 'GET',
    url: `/wines/${params.id}`,
    params,
  });
  return response;
};
