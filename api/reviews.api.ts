import { axiosInstance } from './_axiosInstance';

type ReviewRequest = {
  id: string;
};

type ReviewResponse = {
  name: string;
  price: number;
  region: string;
  type: string;
  imageUrl?: string;
};

type UpdateReviewRequest = {
  name?: string;
  price?: number;
  region?: string;
  type?: string;
  imageUrl?: string;
};

export const updateWineDetail = async (
  id: string,
  updateData: UpdateReviewRequest
) => {
  try {
    const response = await axiosInstance<ReviewResponse>({
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
