import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '../../../../shared/components/IconButton';
import { mockPosts } from '../../model/mockData';
import { PostStatsButtons } from './PostStatsButtons';
import styles from './post.module.css';

export const ArticleContent = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate(ROUTES.root);
  //   }, 1000);
  // }, []);

  const [article, setArticle] = useState(mockPosts.find(article => Number(id) === article.id) ?? null);

  if (!article) return null;

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

      <div className={styles.centeredContentWrapper}>{article.content}</div>
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
