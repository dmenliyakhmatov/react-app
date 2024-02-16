import { post } from '../../../../services/transport';
import { Article } from '../../../../shared/types/articles';
import { CreateArticleParams } from '../schemes/createArticles';

export const createArticleApi = {
  createArticle: (data: CreateArticleParams) => post<Article>('/articles?_relations=users', data),
};
