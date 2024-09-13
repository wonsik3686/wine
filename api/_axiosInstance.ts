/* eslint-disable import/no-cycle */
import axios, { InternalAxiosRequestConfig } from 'axios';

const TEAM_ID = '8-4';
const BASE_URL = `https://winereview-api.vercel.app/${TEAM_ID}`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authStorage = localStorage.getItem('auth-storage') || '{}';
    try {
      const { state } = JSON.parse(authStorage);
      const { accessToken } = state;
      if (accessToken) {
        const modifiedConfig = { ...config }; // 새로운 객체를 생성하여 수정
        // eslint-disable-next-line dot-notation
        modifiedConfig.headers['Authorization'] = `Bearer ${accessToken}`;
        return modifiedConfig;
      }
    } catch {
      return config;
    }
    return config;
  },
  (error) => {
    // 에러 핸들링
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => res,
  async (responseError) => {
    const originalRequest = responseError.config;
    let refreshToken = null;
    if (responseError.response?.status === 401 && !originalRequest._retry) {
      const authStorage = localStorage.getItem('auth-storage') || '{}';
      try {
        const { state } = JSON.parse(authStorage);
        refreshToken = state.refreshToken;
      } catch {
        return Promise.reject(responseError);
      }
      if (refreshToken) {
        try {
          // refreshToken으로 새로운 토큰 요청
          const response = await axiosInstance.post('/auth/refresh-token', {
            refreshToken,
          });
          const { accessToken } = response.data;

          // Zustand store에 새로운 토큰 저장

          localStorage.setItem(
            'auth-storage',
            JSON.stringify({ state: response.data, version: 0 })
          );

            // 새로운 accessToken으로 요청 재시도
            originalRequest._retry = true;
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            // 토큰 갱신 실패 시 로그아웃 처리
            localStorage.clear();
            return Promise.reject(refreshError);
          }
        }
      }
    }
    return Promise.reject(responseError);
  }
);

export { axiosInstance };
