// LeftMenu.jsx

import styles from './left-menu.module.css'; // Путь к вашему файлу стилей

export const Sidebar = () => {
    return (
        <div className={styles.leftMenu}>
            <div className={styles.menuItem}>
                <span className={styles.icon}>🔥</span>
                <a>Популярное</a>
            </div>
            <div className={styles.menuItem}>
                <span className={styles.icon}>🆕</span>
                <a>Свежее</a>
            </div>
            <div className={styles.menuItem}>
                <span className={styles.icon}>💼</span>
                <a>Вакансии</a>
            </div>
            <div className={styles.menuItem}>
                <span className={styles.icon}>🏆</span>
                <a>Рейтинги</a>
            </div>
            <div className={styles.menuItem}>
                <span className={styles.icon}>📬</span>
                <a>Подписки</a>
            </div>
        </div>
    );
};

