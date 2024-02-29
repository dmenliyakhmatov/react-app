import { ArticleV2 } from 'shared/types/articles';
import { ArticleCard } from './ArticleCard';
import styles from './articleList.module.css';

export const ArticleList = ({ articles }: { articles: ArticleV2[] }) => {
  // const listRef = useRef<HTMLDivElement | null>(null);
  // console.log(listRef);

  // useEffect(() => {
  //   const scrollHandler = (e: Event) => {
  //     // console.log(e);
  //   };

  //   console.log(listRef);

  //   const scrollElement = listRef.current;

  //   if (scrollElement) scrollElement.addEventListener('scroll', scrollHandler);

  //   return () => {
  //     if (scrollElement) scrollElement.removeEventListener('scroll', scrollHandler);
  //   };
  // }, [articles]);

  return (
    <div className={styles.articleListWrapper}>
      {articles.map(article => (
        <ArticleCard post={article} key={article.id} />
      ))}
    </div>
  );
};
