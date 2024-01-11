import { IconButton } from '../../../shared/IconButton';
import { Post } from '../model/types';
import styles from './postStatsButtons.module.css';

type PostStatsButtonsProps = Pick<Post, 'views' | 'likes' | 'comments' | 'bookmarks'>;

export const PostStatsButtons = (props: PostStatsButtonsProps) => (
    <div className={styles.stats}>
        <IconButton icon="Views" >{props.views}</IconButton>
        <IconButton icon="Likes" >{props.likes}</IconButton>
        <IconButton icon="Comments" >{props.comments}</IconButton>
        <IconButton icon="Bookmarks" >{props.bookmarks}</IconButton>
    </div>
);
