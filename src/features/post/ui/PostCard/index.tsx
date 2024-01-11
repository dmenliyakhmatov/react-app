import { useState } from 'react';
import { IconButton } from '../../../../shared/IconButton';
import { Post } from '../../model/types';
import { PostStatsButtons } from './PostStatsButtons';
import styles from './post.module.css';



export const PostCard = (props: Post) => {
    const [isTitleVisible, setIsTitleVisible] = useState(true)

    return (
        <div className={styles.postCard}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span>{props.section}</span>
                    <div className={styles.authorInfo}>
                        <img src={props.authorAvatar} alt={`${props.authorName}'s Avatar`} className={styles.avatar} />
                        <span>{props.authorName}</span>
                    </div>
                    <span>{props.publicationDate}</span>

                </div>
                <div className={styles.headerRight}>
                    <IconButton>...</IconButton>
                </div>
            </div>


            <button onClick={() => setIsTitleVisible(prev => !prev)}>{isTitleVisible ? 'Hide title' : "Show title"}</button>

            {isTitleVisible && <h2>{props.title}</h2>}

            <div className={styles.coverImage}>
                <img src={props.coverImage} alt="Cover" />
            </div>

            <PostStatsButtons
                bookmarks={props.bookmarks}
                comments={props.comments}
                likes={props.likes}
                views={props.views} />
        </div>
    );
};


