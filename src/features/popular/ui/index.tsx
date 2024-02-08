import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '../../../shared/features/ArticleList/ui';
import { clearPopularArticles, selectArticles, selectArticlesLoading } from '../model/store/slice';
import { fetchPopularArticles } from '../model/store/effects';
import { useAppDispatch } from '../../../store';

export const Popular = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(selectArticles);
  const isLoading = useSelector(selectArticlesLoading);

  useEffect(() => {
    dispatch(fetchPopularArticles());

    return () => {
      dispatch(clearPopularArticles());
    };
  }, [dispatch]);

  if (isLoading) return <div>Loading....</div>;
  if (!articles) return <div>{`There aren't articles `}</div>;

  return (
    <div>
      <ArticleList articles={articles} />;
    </div>
  );
};
