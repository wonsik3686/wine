import { Params, Reviews, User, Wines } from '@/types/user.types';
import { axiosInstance } from './_axiosInstance';

export async function getUser(): Promise<User> {
  const response = await axiosInstance<User>({
    method: 'GET',
    url: '/users/me',
  });

  if (!response.data) {
    throw new Error('getUser 리스폰스 에러');
  }

  return response.data;
}

export async function patchUser(data: { image: string; nickname: string }) {
  const response = await axiosInstance<User>({
    method: 'PATCH',
    url: '/users/me',

    data: JSON.stringify(data),
  });

  if (!response.data) {
    throw new Error('patchUser 리스폰스 에러');
  }

  return response.data;
}

export async function getUserReviews(data: Params) {
  const query = new URLSearchParams(data as string).toString();

  const response = await axiosInstance<Reviews>({
    method: 'GET',
    url: `/users/me/reviews?${query}`,
  });

  if (!response.data) {
    throw new Error('getUserReviews 리스폰스 에러');
  }

  return response.data;
}

export async function getUserWines(data: Params): Promise<Wines> {
  const query = new URLSearchParams(data as string).toString();

  const response = await axiosInstance<Wines>({
    method: 'GET',
    url: `/users/me/wines?${query}`,
  });

  if (!response.data) {
    throw new Error('getUserWines 리스폰스 에러');
  }

  return response.data;
}
