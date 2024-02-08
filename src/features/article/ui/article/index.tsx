import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IconButton } from '../../../../shared/components/IconButton';
import { Article } from '../../../../shared/types/articles';
import { PostStatsButtons } from './PostStatsButtons';
import styles from './post.module.css';
import { get } from 'services/transport';

export const ArticleContent = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    get(`https://68f241df693169c2.mokky.dev/articles/${id}`)
      .then(({ data: recievedArticle }) => {
        setArticle(recievedArticle);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [id]);

  if (!article) return <div>Not found article</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.postCard}>
      {/* <button
        onClick={() => {
          navigate(ROUTES.root);
        }}
      >
        submit form
      </button> */}
      <div className={styles.centeredContentWrapper}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span>{article.section}</span>
            <div className={styles.authorInfo}>
              <img src={article.authorAvatar} alt={`${article.authorName}'s Avatar`} className={styles.avatar} />
              <span>{article.authorName}</span>
            </div>
            <span>{article.publicationDate}</span>
          </div>
          <div className={styles.headerRight}>
            <IconButton>...</IconButton>
          </div>
        </div>

        <h2>{article.title}</h2>
      </div>

      <div className={styles.coverImage}>
        <img src={article.coverImage} alt="Cover" />
      </div>

      <div className={styles.centeredContentWrapper}>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim mauris ligula, in suscipit tortor
        finibus id. In ac dui massa. Nam non leo mi. Donec sed tincidunt dolor, eu hendrerit nisi. Sed bibendum blandit
        est dapibus porttitor. Vivamus et tempor ligula. Integer ac condimentum turpis, non consequat lacus. Sed
        tincidunt magna dolor, nec ultrices sem scelerisque vel. Cras tempor sodales nunc vel facilisis. Morbi aliquam
        odio cursus ex rutrum, ut pharetra velit convallis. Cras in dignissim dui, a aliquam mauris. Suspendisse feugiat
        bibendum velit, vitae feugiat arcu consectetur at. Pellentesque porttitor magna eu sapien mattis volutpat. Nunc
        sit amet leo sit amet lorem luctus eleifend et sed urna. Aliquam sagittis eget est rutrum porta. Ut ligula urna,
        vehicula in tortor eget, porta pretium nulla. Nullam venenatis facilisis consectetur. Sed dictum tortor sed
        libero pellentesque semper sed ut erat. Duis sagittis, libero ac blandit porta, nisi lacus imperdiet justo, eu
        tincidunt eros lorem convallis ex. Nunc pharetra lacus ut aliquet faucibus. Nunc eget leo vitae velit gravida
        posuere. Sed quis bibendum quam. Suspendisse potenti. Duis lectus ante, dapibus ut metus non, venenatis
        malesuada quam. Curabitur porttitor at odio eget egestas. Nullam non diam ac quam tincidunt dapibus. Praesent
        ullamcorper lacus non nisl faucibus, sed lacinia justo suscipit. Mauris molestie molestie ante in tincidunt.
        Nunc commodo iaculis urna vitae dictum. Vestibulum tincidunt pretium arcu sit amet aliquam. Praesent pharetra
        lacus at sagittis convallis. Nam mattis at turpis ut venenatis. Vivamus finibus fringilla finibus.`,
      </div>
      <div className={styles.centeredContentWrapper}>
        <PostStatsButtons
          bookmarks={article.bookmarks}
          comments={article.comments}
          likes={article.likes}
          views={article.views}
        />
      </div>
    </div>
  );
};
