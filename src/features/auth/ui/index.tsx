import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { getUserIsLoading, getUserToken } from 'store/user/selectors';
import styles from './loginForm.module.css';
import { postAuthData } from 'store/user/effects';
import { useAppDispatch } from 'store';

type UserResponse = { data: { avatar: string; email: string; fullName: string; id: number }; token: string };

export const LoginForm = () => {
  const dispatch = useAppDispatch();
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

    dispatch(postAuthData(formData));
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
