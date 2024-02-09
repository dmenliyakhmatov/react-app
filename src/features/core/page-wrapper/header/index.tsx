import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import { getUserAvatar, getUserToken } from 'store/user/selectors';
import { userActions } from 'store/user/slice';
import styles from './header.module.css';
import { setStorageItem, STORAGE_KEY } from 'services/storage';

export const Header = ({ onSearch }: { onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const avatar = useSelector(getUserAvatar);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftSection}>
        <button className={styles.burgerButton}>{/* Иконка бургер-меню */}☰</button>
        <div className={styles.logo}>Your Logo</div>
      </div>
      <div className={styles.centerSection}>
        <input type="text" placeholder="Search" className={styles.searchInput} onChange={onSearch} />
        {/* <button className={styles.newPostButton}>Create Post</button> */}
      </div>
      <div className={styles.rightSection}>
        <div className={styles.iconMessage}>📧</div>
        <div className={styles.iconNotification}>🔔</div>
        {/* <div className={styles.avatar}>User Avatar</div> */}

        {avatar && <img className={styles.avatar} src={avatar} alt="avatar" />}

        <LoginButton />
      </div>
    </header>
  );
};

const LoginButton = () => {
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);

  const logout = () => {
    dispatch(userActions.clearUserStore());
    setStorageItem(STORAGE_KEY.USER_DATA, null);
  };

  if (token)
    return (
      <button className={styles.newPostButton} onClick={logout}>
        Выйти
      </button>
    );

  return (
    <Link to={ROUTES.auth} className={styles.newPostButton}>
      Войти
    </Link>
  );
};
