// LeftMenu.jsx

import clsx from 'clsx';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import { LanguageContext, LanguageSelector } from '../../language';
import styles from './left-menu.module.css';

export const Sidebar = () => {
  const i18n = useContext(LanguageContext);

  if (!i18n) {
    throw new Error('LanguageSelector must be used within a LanguageProvider');
  }

  const { keys } = i18n;

  return (
    <nav className={styles.leftMenu}>
      <div>
        <NavLink
          to={`${ROUTES.root}?category=all`}
          className={({ isActive }) => clsx(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>🔥</span>
          <span>{keys.popular}</span>
        </NavLink>
        <NavLink to={ROUTES.fresh} className={({ isActive }) => clsx(styles.menuItem, { [styles.active]: isActive })}>
          <span className={styles.icon}>🆕</span>
          <span>{keys.fresh}</span>
        </NavLink>
        <NavLink
          to={ROUTES.vacancies}
          className={({ isActive }) => clsx(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>💼</span>
          <span>{keys.vacancies}</span>
        </NavLink>

        <NavLink
          to={ROUTES.useMemoExample}
          className={({ isActive }) => clsx(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>🆕</span>
          <span>use-memo-example</span>
        </NavLink>
        <NavLink
          to={ROUTES.useRefExample}
          className={({ isActive }) => clsx(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>🆕</span>
          <span>use-ref-example</span>
        </NavLink>
        <div className={styles.menuItem}>
          <span className={styles.icon}>🏆</span>
          <a>{keys.ratings}</a>
        </div>
        <div className={styles.menuItem}>
          <span className={styles.icon}>📬</span>
          <a>{keys.subscriptions}</a>
        </div>
      </div>
      <LanguageSelector />
    </nav>
  );
};
