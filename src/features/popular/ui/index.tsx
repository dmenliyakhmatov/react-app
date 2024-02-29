import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '../../../shared/features/ArticleList/ui';
import { useAppDispatch } from '../../../store';
import { getPopularArticle } from '../model/store/effects';
import { clearPopularStore, getPopularArticles, getPopularIsLoading } from '../model/store/slice';

export const Popular = () => {
  const articles = useSelector(getPopularArticles);
  const isLoading = useSelector(getPopularIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPopularArticle());

    return () => {
      dispatch(clearPopularStore());
    };
  }, [dispatch]);

  if (isLoading) return <div>Loading....</div>;
  if (!articles) return <div>{`There aren't articles `}</div>;

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};
