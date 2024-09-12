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
  id: number,
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
// 이미지 업로드
export const uploadWineImage = async (imgFile: File): Promise<string> => {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;
  const formData = new FormData();
  formData.append('image', imgFile, btoa(encodeURI(imgFile.name)));

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
  image: string;
}) => {
  const response = await axiosInstance({
    method: 'POST',
    url: '/wines',
    data: wineData,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export async function deleteWine({ id }: { id: number }) {
  const response = await axiosInstance<{
    id?: number;
    message?: string;
  }>({
    method: 'DELETE',
    url: `/wines/${id}`,
  });

  return response;
}
