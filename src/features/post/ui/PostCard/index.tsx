import TrashIcon from 'assets/icons/trash.svg';
import { IconButton } from '../../../../shared/IconButton';
import { Post } from '../../model/types';
import { PostStatsButtons } from './PostStatsButtons';
import styles from './post.module.css';

type PostCardProps = { post: Post; onDeleteClick: (id: number) => void };

export const PostCard = ({ post, onDeleteClick }: PostCardProps) => {
  // const handleClick = (event: React.MouseEvent) => {
  //     console.log(event.target)
  // }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event.target.value)
  // }

  const onDeleteHandler = () => {
    onDeleteClick(post.id);
  };

  return (
    <div className={styles.postCard}>
      {/* <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Click me, please</button> */}

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
          <IconButton onClick={onDeleteHandler} icon={<TrashIcon />} />
        </div>
      </div>
      <h2>{post.title}</h2>

      <div className={styles.coverImage}>
        <img src={post.coverImage} alt="Cover" />
      </div>

      <PostStatsButtons likes={post.likes} bookmarks={post.bookmarks} comments={post.comments} views={post.views} />
    </div>
  );
};
