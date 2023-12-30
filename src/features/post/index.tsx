import styles from './post.module.css';

type PostCardProps = {
    section: string
    authorName: string
    authorAvatar: string
    publicationDate: string
    title: string
    coverImage: string
    views: number
    likes: number
    comments: number
    bookmarks: number
}

export const PostCard = ({
    section,
    authorName,
    authorAvatar,
    publicationDate,
    title,
    coverImage,
    views,
    likes,
    comments,
    bookmarks }: PostCardProps) => {
    return (
        <div className={styles.postCard}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <span>{section}</span>
                    <div className={styles.authorInfo}>
                        <img src={authorAvatar} alt={`${authorName}'s Avatar`} className={styles.avatar} />
                        <span>{authorName}</span>
                    </div>
                    <span>{publicationDate}</span>

                </div>
                <div className={styles.headerRight}>
                    <button className={styles.moreOptionsButton}>...</button>
                </div>
            </div>
            <h2>{title}</h2>

            <div className={styles.coverImage}>
                <img src={coverImage} alt="Cover" />
            </div>

            <div className={styles.stats}>
                <div>Views: {views}</div>

                <div>Likes: {likes}</div>
                <div>Comments: {comments}</div>
                <div>Bookmarks: {bookmarks}</div>

            </div>
        </div>
    );
};


