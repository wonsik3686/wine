import { WineDetailRequest } from '@/types/dto/request/wine.request.types';
import { WineDetailResponse } from '@/types/dto/response/wine.response.types';
import { axiosInstance } from './_axiosInstance';

export const getWineDetail = async ({ ...params }: WineDetailRequest) => {
  try {
    const response = await axiosInstance<WineDetailResponse>({
      method: 'GET',
      url: '/wines/' + params.id,
      params: params,
    });
    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    // console.error('error: ', error);
  }
};
