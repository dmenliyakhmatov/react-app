import { useState } from 'react';
import { IconButton } from '../../../../shared/IconButton';
import { Post } from '../../model/types';
import styles from './postStatsButtons.module.css';

type PostStatsButtonsProps = Pick<Post, 'views' | 'likes' | 'comments' | 'bookmarks'>;

export const PostStatsButtons = (props: PostStatsButtonsProps) => {

    const [likes, setLikes] = useState(0)

    const onLikeClick = () => {
        setLikes(prev => prev + 1)
        console.log('like clicked');
    }

    console.log('rendering PostStatsButtons');

    return (
        <div className={styles.stats}>
            <IconButton icon="Views">{props.views}</IconButton>
            <IconButton icon="Likes" onClick={onLikeClick}>{likes}</IconButton>
            <IconButton icon="Comments">{props.comments}</IconButton>
            <IconButton icon="Bookmarks">{props.bookmarks}</IconButton>
        </div>
    );
};
