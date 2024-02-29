import { useGetFreshArticlesQuery } from '../../../api/articles';
import { ArticleList } from '../../../shared/features/ArticleList/ui';

export const Fresh = () => {
  const { isLoading, data: articles } = useGetFreshArticlesQuery('');

  if (isLoading) return <div>Loading....</div>;
  if (!articles) return <div>{`There aren't articles `}</div>;

  return (
    <div>
      <ArticleList articles={articles} />;
    </div>
  );
};
