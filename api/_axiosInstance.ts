import axios, { InternalAxiosRequestConfig } from 'axios';

const TEAM_ID = '8-4';
const BASE_URL = `https://winereview-api.vercel.app/${TEAM_ID}`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const cookieStore = cookies();
    // const accessToken = cookieStore.get(AUTH_COOKIE_KEYS.accessToken)?.value;
    const accessToken = 'token';

    if (accessToken) {
      const modifiedConfig = { ...config }; // 새로운 객체를 생성하여 수정
      // eslint-disable-next-line dot-notation
      modifiedConfig.headers['Authorization'] = `Bearer ${accessToken}`;
      return modifiedConfig;
    }
    // throw new Error('로그인이 필요합니다.');
    return config;
  },
  (error) => {
    // 에러 핸들링
    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       await axiosInstance.post('/auth/refresh-token', undefined);
//       originalRequest._retry = true;
//       return axiosInstance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export { axiosInstance };
