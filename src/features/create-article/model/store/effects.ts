import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateArticleActionPayload } from '../schemes/createArticles';
import { RootState } from 'store';
import { createArticleApi } from '../api';

export const createArticle = createAsyncThunk(
  'userData/postAuth',
  async (payload: CreateArticleActionPayload, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const user_id = state.userData.user.id;

    if (!user_id) {
      throw new Error('User is not authorized');
    }

    const body = {
      user_id,
      publication_date: new Date().toISOString(),
      views: 0,
      likes: 0,
      comments: 0,
      bookmarks: 0,
      ...payload,
    };

    const { data } = await createArticleApi.createArticle(body);

    return data;
  },
);
