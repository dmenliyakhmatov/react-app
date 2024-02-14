import { post } from '../../../../services/transport';
import { CreateArticleParams } from '../schemes/createArticles';
import { Article } from '../../../../shared/types/articles';

export const createArticleApi = {
  createArticle: (data: CreateArticleParams) => post<Article>('/articles?_relations=users', data),
};
