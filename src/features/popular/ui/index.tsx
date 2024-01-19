import { ArticleList } from '../../../shared/features/ArticleList/ui';
import { mockPosts } from '../model/mockData';

export const Popular = () => {
  return <ArticleList articles={mockPosts} />;
};
