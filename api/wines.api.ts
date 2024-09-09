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

// 이미지 업로드
export const uploadWineImage = async (imgFile: File): Promise<string> => {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;
  const formData = new FormData();
  formData.append('imgFile', imgFile, btoa(encodeURI(imgFile.name)));

  const response = await axiosInstance({
    method: 'POST',
    url: '/images/upload',
    data: formData,
    headers: {
      Authorization: accessToken,
    },
  });

  return response.data.url;
};

// 와인 상세 정보 POST
export const postWineDetail = async (wineData: {
  name: string;
  region: string;
  price: number;
  type: string;
  imageUrl: string;
}) => {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;
  const response = await axiosInstance({
    method: 'POST',
    url: '/wines',
    data: wineData,
    headers: {
      Authorization: accessToken,
    },
  });

  return response;
};
