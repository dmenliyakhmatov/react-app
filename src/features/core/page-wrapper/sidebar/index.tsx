// LeftMenu.jsx

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import styles from './left-menu.module.css'; // Путь к вашему файлу стилей

export const Sidebar = () => {
  return (
    <nav className={styles.leftMenu}>
      <NavLink to="/" className={({ isActive }) => clsx(styles.menuItem, { [styles.active]: isActive })}>
        <span className={styles.icon}>🔥</span>
        <span>Популярное</span>
      </NavLink>
      <NavLink to="/fresh" className={({ isActive }) => clsx(styles.menuItem, { [styles.active]: isActive })}>
        <span className={styles.icon}>🆕</span>
        <span>Свежее</span>
      </NavLink>
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
