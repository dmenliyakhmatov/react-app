import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { STORAGE_KEY, getStorageItem } from '../services/storage';
import { ArticleV2 } from '../shared/types/articles';

const getToken = () => getStorageItem(STORAGE_KEY.USER_DATA);

export const articlesApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://68f241df693169c2.mokky.dev',
    prepareHeaders: headers => {
      const token = getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getFreshArticles: builder.query<ArticleV2[], unknown>({
      query: () => 'fresh_articles',
    }),
  }),
});

export const { useGetFreshArticlesQuery } = articlesApi;
