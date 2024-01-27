import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ArticleList } from '../../../shared/features/ArticleList/ui';
import { mockPosts } from '../model/mockData';

export const Popular = () => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();

  const [articles, setArtcicles] = useState(mockPosts);

  useEffect(() => {
    if (params.get('category') !== 'all') {
      setArtcicles(
        mockPosts.filter(article => article.section.toLowerCase() === params.get('category')?.toLowerCase()),
      );
    }
  }, [params]);

  return (
    <div>
      <select
        name=""
        id=""
        value={params.get('category') || 'all'}
        onChange={e => {
          params.set('category', e.target.value);
          setParams(params);
        }}
      >
        <option value="all">all</option>
        <option value="Technology">technology</option>
        <option value="sports">technology</option>
      </select>
      <ArticleList articles={articles} />;
    </div>
  );
};
