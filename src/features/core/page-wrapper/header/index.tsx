// Header.jsx

import styles from './header.module.css'; // Путь к вашему файлу стилей

export const Header = ({ onSearch }: { onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.leftSection}>
                <button className={styles.burgerButton}>
                    {/* Иконка бургер-меню */}
                    ☰
                </button>
                <div className={styles.logo}>Your Logo</div>
            </div>
            <div className={styles.centerSection}>
                <input type="text" placeholder="Search" className={styles.searchInput} onChange={onSearch} />
                <button className={styles.newPostButton}>Create Post</button>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.iconMessage}>📧</div>
                <div className={styles.iconNotification}>🔔</div>
                <div className={styles.avatar}>User Avatar</div>
            </div>
        </header>
    );
};


