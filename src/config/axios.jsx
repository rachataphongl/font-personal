import axios from 'axios';
import { getAccessToken } from '../utils/localStorage';
import { API_ENDPOINT_URL } from './env';

axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err) //or throw err
);

export default axios;
