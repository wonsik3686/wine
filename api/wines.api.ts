import { WineDetailRequest } from '@/types/dto/request/wine.request.types';
import { WineDetailResponse } from '@/types/dto/response/wine.response.types';
import { axiosInstance } from './_axiosInstance';

type UpdateWineRequest = {
  name?: string;
  price?: number;
  region?: string;
  type?: string;
  imageUrl?: string;
};

export const getWineDetail = async ({ ...params }: WineDetailRequest) => {
  const response = await axiosInstance<WineDetailResponse>({
    method: 'GET',
    url: `/wines/${params.id}`,
    params,
  });
  return response;
};

export const updateWineDetail = async (
  id: string,
  updateData: UpdateWineRequest
) => {
  try {
    const response = await axiosInstance<WineDetailResponse>({
      method: 'PATCH',
      url: `/wines/${id}`,
      data: updateData,
    });
    return response.data;
  } catch (error) {
    console.error('와인 정보를 수정하는 데 실패했습니다:', error);
    throw error; // 에러를 호출자에게 전달합니다.
  }
};
