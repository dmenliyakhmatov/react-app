import clsx from 'clsx';
import { useState } from 'react';
import { IconButton } from '../../../../shared/IconButton';
import { Post } from '../../model/types';
import { PostStatsButtons } from './PostStatsButtons';
import styles from './post.module.css';

type PostCardProps = {
    post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
    const [isTitleVisible, setIsTitleVisible] = useState(true)

    const [isRed, setIsRed] = useState(false)

    return (
        <div className={clsx(styles.postCard, { [styles.backgroundRed]: isRed })}>

            <button onClick={() => setIsRed(prev => !prev)}>Make card red</button>

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
                    <IconButton>...</IconButton>
                </div>
            </div>


            <button onClick={() => setIsTitleVisible(prev => !prev)}>{isTitleVisible ? 'Hide title' : "Show title"}</button>

            {isTitleVisible && <h2>{post.title}</h2>}

            <div className={styles.coverImage}>
                <img src={post.coverImage} alt="Cover" />
            </div>

            <PostStatsButtons
                bookmarks={post.bookmarks}
                comments={post.comments}
                likes={post.likes}
                views={post.views} />
        </div >
    );
};


