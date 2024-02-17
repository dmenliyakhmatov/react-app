// LeftMenu.jsx

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import { LanguageSelector } from '../../language';
import styles from './left-menu.module.css';

export const Sidebar = () => {
  return (
    <nav className={styles.leftMenu}>
      <div>
        <NavLink
          to={`${ROUTES.root}?category=all`}
          className={({ isActive }) => clsx(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>🔥</span>
          <span>Популярное</span>
        </NavLink>
        <NavLink to={ROUTES.fresh} className={({ isActive }) => clsx(styles.menuItem, { [styles.active]: isActive })}>
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
      </div>
      <LanguageSelector />
    </nav>
  );
};
