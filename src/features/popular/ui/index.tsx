import { useContext, useEffect, useState } from 'react';
import { get } from '../../../services/transport';
import { ArticleList } from '../../../shared/features/ArticleList/ui';
import { Article } from '../../../shared/types/articles';
import { LanguageContext } from '../../core/language';

export const Popular = () => {
  const [articles, setArtcicles] = useState<Article[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const lang = useContext(LanguageContext);

  console.log('Popular render');
  useEffect(() => {
    setIsLoading(true);

    get('/private_articles')
      .then(({ data: recievedArticles }) => {
        setArtcicles(recievedArticles);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading....</div>;
  if (!articles) return <div>{`There aren't articles `}</div>;

  return (
    <div>
      <ArticleList articles={articles} />;
    </div>
  );
};
