import { Params, Reviews, User, Wines } from '@/types/user.types';
import { axiosInstance } from './_axiosInstance';

export async function getUser() {
  const response = await axiosInstance<User>({
    method: 'GET',
    url: '/users/me',
  });

  return response.data;
}

export async function patchUser(Data: { image?: string; nickname?: string }) {
  const response = await axiosInstance<User>({
    method: 'PATCH',
    url: '/users/me',
    data: Data,
  });

  return response.data;
}

export async function getUserReviews(data: Params) {
  const query = new URLSearchParams(data as string).toString();

  const response = await axiosInstance<Reviews>({
    method: 'GET',
    url: `/users/me/reviews?${query}`,
  });

  return response.data;
}

export async function getUserWines(data: Params): Promise<Wines> {
  const query = new URLSearchParams(data as string).toString();

  const response = await axiosInstance<Wines>({
    method: 'GET',
    url: `/users/me/wines?${query}`,
  });

  return response.data;
}
