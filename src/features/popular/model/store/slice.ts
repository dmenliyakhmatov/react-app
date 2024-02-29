import { createSlice } from '@reduxjs/toolkit';
import { ArticleV2 } from 'shared/types/articles';

import { getPopularArticle } from './effects';

type PopularSliceState = {
  articles: ArticleV2[] | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: PopularSliceState = {
  articles: null,
  isLoading: false,
  error: null,
};

export const popularSlice = createSlice({
  name: 'popularArticles',
  initialState,
  reducers: {
    clearPopularStore: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(getPopularArticle.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPopularArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(getPopularArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Что-то пошло не так';
      });
  },
  selectors: {
    getPopularIsLoading: state => state.isLoading,
    getPopularArticles: state => state.articles,
  },
});

export const { clearPopularStore } = popularSlice.actions;

export const { getPopularArticles, getPopularIsLoading } = popularSlice.selectors;
