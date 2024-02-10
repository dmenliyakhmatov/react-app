import axios from 'axios';

export const baseTranspport = axios.create({
  baseURL: 'https://68f241df693169c2.mokky.dev',
  timeout: 3000,
});

export const get = baseTranspport.get;
export const post = baseTranspport.post;
