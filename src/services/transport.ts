import axios from 'axios';
import { getStorageItem, STORAGE_KEY } from './storage';

const BASE_URL = 'https://68f241df693169c2.mokky.dev';

const baseInstance = axios.create({ baseURL: BASE_URL, timeout: 10000 });

baseInstance.interceptors.request.use(config => {
  const token = getStorageItem(STORAGE_KEY.USER_DATA)?.token;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  }

  return config;
});

export const get = baseInstance.get;
export const post = baseInstance.post;
