import axios from 'axios';
import { API_BASE_URL_EMAIL } from '../constants/AppConstants';

export const getAccessToken = () => {
  const tokens = localStorage.getItem('tokens');
  if (tokens) {
    const tokenData = JSON.parse(tokens);
    return `${tokenData.type} ${tokenData.accessToken.token}`;
  }
  return null;
};

export const httpClientEmail = axios.create({
  baseURL: API_BASE_URL_EMAIL,
});

// httpClient.interceptors.request.use(
//   (config) => {
//     const token = getAccessToken();
//     if (token) {
//       config.headers['Authorization'] = token;
//     }
//     // config.headers['Content-Type'] = 'application/json';
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );