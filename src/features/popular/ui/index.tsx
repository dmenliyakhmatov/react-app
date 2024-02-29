import { throttle } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '../../../shared/features/ArticleList/ui';
import { useAppDispatch } from '../../../store';
import { getPopularArticle } from '../model/store/effects';
import { clearPopularStore, getPopularArticles, getPopularIsLoading } from '../model/store/slice';

export const Popular = () => {
  const articles = useSelector(getPopularArticles);
  const isLoading = useSelector(getPopularIsLoading);
  const dispatch = useAppDispatch();
  const listRef = useRef<HTMLDivElement | null>(null);

  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    const listElement = listRef.current;
    if (!listElement) return;

    const handleScroll = throttle(() => {
      const { scrollTop, scrollHeight, clientHeight } = listElement;
      console.log(scrollTop);

      if (scrollTop + clientHeight >= scrollHeight * 0.6) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    }, 300);

    listElement.addEventListener('scroll', handleScroll);

    return () => {
      listElement.removeEventListener('scroll', handleScroll);
    };
  }, [articles]);

  useEffect(() => {
    dispatch(getPopularArticle());

    return () => {
      dispatch(clearPopularStore());
    };
  }, [dispatch]);

  if (isLoading) return <div>Loading....</div>;
  if (!articles) return <div>{`There aren't articles `}</div>;

  return (
    <div ref={listRef} style={{ maxHeight: 'calc(100vh - 80px)', overflow: 'scroll' }}>
      <ArticleList articles={articles} />
      {showToTopButton && (
        <button
          style={{ zIndex: 100, position: 'fixed', left: '50px', bottom: '60px' }}
          onClick={() => {
            if (listRef.current) listRef.current.scrollTo(0, 0);
            setShowToTopButton(false);
          }}
        >
          To top
        </button>
      )}
    </div>
  );
};
