import clsx from 'clsx';
import { IconButton } from 'shared/components/IconButton';
import TrashIcon from 'shared/icons/trash.svg';
import { Article } from 'shared/types/articles';
import { PostStatsButtons } from './PostStatsButtons';
import styles from './post.module.css';

type PostCardProps = {
  post: Article;
};

export const ArticleCard = ({ post }: PostCardProps) => {
  return (
    <div className={clsx(styles.postCard)}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span>{post.section}</span>
          <div className={styles.authorInfo}>
            <img src={post.authorAvatar} alt={`${post.authorName}'s Avatar`} className={styles.avatar} />
            <span>{post.authorName}</span>
          </div>
          <span>{post.publicationDate}</span>
        </div>
        <div className={styles.headerRight}>
          <IconButton icon={<TrashIcon />} />
        </div>
      </div>

      <h2>{post.title}</h2>

      <div className={styles.coverImage}>
        <img src={post.coverImage} alt="Cover" />
      </div>

      <PostStatsButtons bookmarks={post.bookmarks} comments={post.comments} likes={post.likes} views={post.views} />
    </div>
  );
};
