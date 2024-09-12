import {
  WineDetailRequest,
  WineListRequest,
} from '@/types/dto/request/wine.request.types';
import {
  RecommendedWineResponse,
  WineDetailResponse,
  WineListResponse,
} from '@/types/dto/response/wine.response.types';
import { axiosInstance } from './_axiosInstance';

export const getWineDetail = async ({ ...params }: WineDetailRequest) => {
  const response = await axiosInstance<WineDetailResponse>({
    method: 'GET',
    url: `/wines/${params.id}`,
    params,
  });
  return response;
};

export const getWine = async ({ ...params }: WineListRequest) => {
  const response = await axiosInstance<WineListResponse>({
    method: 'GET',
    url: '/wines',
    params,
  });
  return response;
};

export const getRecommendedWines = async (limit: number) => {
  const response = await axiosInstance<RecommendedWineResponse>({
    method: 'GET',
    url: '/wines/recommended',
    params: { limit },
  });
  return response;
};
