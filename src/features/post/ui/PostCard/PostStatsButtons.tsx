import { useState } from 'react';
import { IconButton } from '../../../../shared/IconButton';
import { Post } from '../../model/types';
import styles from './postStatsButtons.module.css';

type PostStatsButtonsProps = Pick<Post, 'views' | 'likes' | 'comments' | 'bookmarks'>;

// const arr = [1, 2]

// const firstEl = arr[0]
// const secondEl = arr[1]

// const [first, second] = arr

const getCounter = (count: number) => {
    return () => count + 1
}

export const PostStatsButtons = (props: PostStatsButtonsProps) => {

    const [likes, setLikes] = useState(props.likes)

    const handleLikeClick = () => {

        setLikes(prev => prev + 1)


    }


    const handleViewClick = () => {
        console.log('view button has clicked');
    }



    return (
        <div className={styles.stats} >
            <IconButton icon='Views' onClick={handleViewClick}> {props.views}</IconButton>
            <IconButton icon='Likes' onClick={handleLikeClick}> {likes}</IconButton>
            <IconButton icon='Comments'> {props.comments}</IconButton>
            <IconButton icon='Bookmarks'> {props.bookmarks}</IconButton>
        </div>

    );
};
