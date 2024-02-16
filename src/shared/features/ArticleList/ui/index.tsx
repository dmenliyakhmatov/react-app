import { Article } from 'shared/types/articles';
import { ArticleCard } from './ArticleCard';
import styles from './articleList.module.css';

export const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <div className={styles.articleListWrapper}>
      {articles.map(article => (
        <ArticleCard post={article} key={article.id} />
      ))}
    </div>
  );
};
