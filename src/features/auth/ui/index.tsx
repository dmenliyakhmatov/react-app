import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { getUserIsLoading, getUserToken } from '../../../store/user/selectors';
import { userActions } from '../../../store/user/slice';
import styles from './loginForm.module.css';
import { post } from 'services/transport';
import { setStorageItem, STORAGE_KEY } from '../../../services/storage';

type UserResponse = { data: { avatar: string; email: string; fullName: string; id: number }; token: string };

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getUserIsLoading);
  const token = useSelector(getUserToken);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(userActions.setIsLoading(true));

    post('https://68f241df693169c2.mokky.dev/auth', formData)
      .then(({ data: userData }: { data: UserResponse }) => {
        dispatch(userActions.setUserData({ token: userData.token, ...userData.data }));
        setStorageItem(STORAGE_KEY.USER_TOKEN, userData.token);
      })
      .catch(console.error)
      .finally(() => dispatch(userActions.setIsLoading(false)));
  };

  if (token) return <Navigate to={ROUTES.root} />;

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Авторизация</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button disabled={isLoading} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};
