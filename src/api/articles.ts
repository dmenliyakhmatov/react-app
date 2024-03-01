import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateArticleActionPayload } from '../features/create-article/model/schemes/createArticles';
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
    createArticle: builder.mutation<unknown, CreateArticleActionPayload & { user_id: number }>({
      query: article => ({
        url: '/articles?_relations=users',
        method: 'POST',
        body: {
          ...article,
          publication_date: new Date().toISOString(),
          views: 0,
          likes: 0,
          comments: 0,
          bookmarks: 0,
        },
      }),
    }),
  }),
});

export const { useGetFreshArticlesQuery, useCreateArticleMutation } = articlesApi;
