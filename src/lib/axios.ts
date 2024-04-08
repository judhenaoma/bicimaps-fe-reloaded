import Axios, { InternalAxiosRequestConfig } from 'axios';

import { API_BASE_URL } from '@/config';
import { handleStorage } from '@/utils/storage';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = handleStorage.getToken();
  config.headers = config.headers ?? {}

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_BASE_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    console.log(response.data)
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message)
    return Promise.reject(error);
  }
);
