import { Post } from '../model/types';
import { PostStatsButtons } from './PostStatsButtons';
import styles from './post.module.css';



export const PostCard = (props: Post) => (
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
                <button className={styles.moreOptionsButton}>...</button>
            </div>
        </div>
        <h2>{props.title}</h2>

        <div className={styles.coverImage}>
            <img src={props.coverImage} alt="Cover" />
        </div>

        <PostStatsButtons
            bookmarks={props.bookmarks}
            comments={props.comments}
            likes={props.likes}
            views={props.views}
        />
    </div>
);


