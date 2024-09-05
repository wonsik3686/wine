import axios from 'axios';

const BASE_URL = 'https://winereview-api.vercel.app';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
