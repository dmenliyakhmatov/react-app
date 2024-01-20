import { useState } from 'react';
import { IconButton } from 'shared/components/IconButton';
import HeartIcon from 'shared/icons/heart.svg';
import { Article } from 'shared/types/articles';
import styles from './postStatsButtons.module.css';

type PostStatsButtonsProps = Pick<Article, 'views' | 'likes' | 'comments' | 'bookmarks'>;

export const PostStatsButtons = (props: PostStatsButtonsProps) => {
  const [likes, setLikes] = useState(0);

  const onLikeClick = () => {
    setLikes(prev => prev + 1);
    console.log('like clicked');
  };

  console.log('rendering PostStatsButtons');

  return (
    <div className={styles.stats}>
      <IconButton icon="Views">{props.views}</IconButton>
      <IconButton icon={<HeartIcon color="blue" height={20} width={20} />} onClick={onLikeClick}>
        {likes}
      </IconButton>
      <IconButton icon="Comments">{props.comments}</IconButton>
      <IconButton icon="Bookmarks">{props.bookmarks}</IconButton>
    </div>
  );
};
