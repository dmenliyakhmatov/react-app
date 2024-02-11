import axios from 'axios';
import { STORAGE_KEY, getStorageItem } from './storage';

export const baseTranspport = axios.create({
  baseURL: 'https://68f241df693169c2.mokky.dev',
  timeout: 3000,
});

baseTranspport.interceptors.request.use(config => {
  const userData = getStorageItem(STORAGE_KEY.USER_DATA);
  const token = userData?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const get = baseTranspport.get;
export const post = baseTranspport.post;
