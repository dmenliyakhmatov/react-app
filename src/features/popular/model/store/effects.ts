import { createAsyncThunk } from '@reduxjs/toolkit';

import { get } from '../../../../services/transport';
import { ArticleV2 } from '../../../../shared/types/articles';

export const getPopularArticle = createAsyncThunk('popularArticles/postAuth', async () => {
  const { data } = await get<ArticleV2[]>('/private_articles');

  return data;
});
