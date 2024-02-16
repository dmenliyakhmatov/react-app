import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { IconButton } from 'shared/components/IconButton';
import TrashIcon from 'shared/icons/trash.svg';
import { ArticleV2 } from 'shared/types/articles';
import { ROUTES } from '../../../../../router/routes';
import { PostStatsButtons } from './PostStatsButtons';
import styles from './post.module.css';

type PostCardProps = {
  post: ArticleV2;
  count?: number;
};

const longTask = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return 'done';
};

export const ArticleCard = ({ post, count }: PostCardProps) => {
  const statistics = longTask();
  console.log('render');

  return (
    <div className={clsx(styles.postCard)}>
      {count}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span>{post.section}</span>
          <div className={styles.authorInfo}>
            <img src={post.user.avatar} alt={`${post.user.fullName}'s Avatar`} className={styles.avatar} />
            <span>{post.user.fullName}</span>
          </div>
          <span>{post.publication_date}</span>
        </div>
        <div className={styles.headerRight}>
          <IconButton icon={<TrashIcon />} />
        </div>
      </div>

      <Link to={`${ROUTES.article}/${post.id}`}>
        <h2>{post.title}</h2>

        <div className={styles.coverImage}>
          <img src={post.cover_image} alt="Cover" />
        </div>
      </Link>
      <PostStatsButtons bookmarks={post.bookmarks} comments={post.comments} likes={post.likes} views={post.views} />
    </div>
  );
};
//
// export const ArticleCard = memo(NotOptimizedArticleCard, (prevProps, nextProps) => {
//   return prevProps.post.title === nextProps.post.title;
// });
