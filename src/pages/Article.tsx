import { useParams } from 'react-router';
import { ArticleContent } from '../features/article/ui/article';

export const PostPage = () => {
  const { id } = useParams();
  console.log('eeeeeeeeeeeeeeeeeeee');
  return (
    <div>
      <ArticleContent />
    </div>
  );
};
