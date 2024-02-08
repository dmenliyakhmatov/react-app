import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from 'services/transport';
import { Post } from '../types';

export const fetchPopularArticles = createAsyncThunk('popular/fetchPopularArticlesº', async () => {
  const { data } = await get<Post[]>('/articles');
  return data;
});
