import { axiosInstance } from './_axiosInstance';

export const postWineReview = async (reviewData: {
  rating: number;
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  aroma: string[];
  content: string;
  wineId: number;
}) => {
  const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;
  const response = await axiosInstance({
    method: 'POST',
    url: '/reviews',
    data: reviewData,
    headers: {
      Authorization: accessToken,
    },
  });

  return response;
};
