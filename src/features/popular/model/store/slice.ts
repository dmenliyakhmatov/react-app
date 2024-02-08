import { createSlice } from '@reduxjs/toolkit';
import { Article } from '../../../../shared/types/articles';
import { fetchPopularArticles } from './effects';

export type PostSliceState = {
  articles: Article[] | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: PostSliceState = {
  articles: [],
  isLoading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {
    clearPopularArticles: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchPopularArticles.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPopularArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    });
    builder.addCase(fetchPopularArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? 'Что-то пошло не так';
    });
  },
  selectors: {
    selectArticles: state => state.articles,
    selectArticlesLoading: state => state.isLoading,
    selectArticlesError: state => state.error,
  },
});

const { actions, reducer, selectors } = postsSlice;

export const { clearPopularArticles } = actions;

export const { selectArticles, selectArticlesLoading, selectArticlesError } = selectors;

export default reducer;
