import { Post } from '../../model/types';
import { PostStatsButtons } from './PostStatsButtons';
import styles from './post.module.css';

type PostCardProps = Post

export const PostCard = (props: PostCardProps) => {
    // const handleClick = (event: React.MouseEvent) => {
    //     console.log(event.target)
    // }

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value)
    // }

    return (
        <div className={styles.postCard}>
            {/* <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Click me, please</button> */}


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
                likes={props.likes}
                bookmarks={props.bookmarks}
                comments={props.comments}
                views={props.views} />
        </div>
    );
};


