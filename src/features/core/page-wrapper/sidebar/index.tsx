// LeftMenu.jsx

import styles from './left-menu.module.css';

export const Sidebar = () => {
  return (
    <nav className={styles.leftMenu}>
      <div>
        <span className={styles.icon}>🔥</span>
        <span>Популярное</span>
      </div>
      <div>
        <span className={styles.icon}>🆕</span>
        <span>Свежее</span>
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
    </nav>
  );
};
