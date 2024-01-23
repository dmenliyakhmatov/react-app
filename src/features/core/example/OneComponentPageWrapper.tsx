import clsx from 'clsx';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import styles from './oneComponent.module.css';

export const OneComponentPageWrapper = ({
  children,
  onSearch,
}: {
  children: ReactNode;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles.baseContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.leftSection}>
          <button className={styles.burgerButton}>{/* Иконка бургер-меню */}☰</button>
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

      <div className={styles.contentWrapper}>
        <nav className={styles.leftMenu}>
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
        </nav>

        <div className={styles.mainContent}>{children}</div>
      </div>
    </div>
  );
};
