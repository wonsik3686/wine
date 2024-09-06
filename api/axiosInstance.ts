import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://winereview-api.vercel.app',
});

export default instanse;
