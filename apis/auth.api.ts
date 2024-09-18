import { User } from '@/types/user.types';
import { axiosInstance } from './_axiosInstance';

export type LoginResponse = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};

export const oAuthLoginAPI = async ({
  provider,
  data,
}: {
  provider: string;
  data: Record<string, string>;
}): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(
    `https://winereview-api.vercel.app/8-4/auth/signIn/${provider}`,
    data
  );
  return response.data;
};

export const loginAPI = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(
    '/auth/signIn',
    {
      email,
      password,
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return response.data;
};

export const registerAPI = async ({
  email,
  nickname,
  password,
  passwordConfirmation,
}: {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>(
    '/auth/signUp',
    {
      email,
      nickname,
      password,
      passwordConfirmation,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};
