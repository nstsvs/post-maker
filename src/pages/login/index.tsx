import { Link } from 'react-router-dom';
import { Login } from '@/widgets';
import styles from '../auth.module.css';
import { ROUTES } from '@shared/consts/routes';

export const LoginPage = () => {
  return (
    <div className={styles.authWrapper}>
      <h1>Вход</h1>
      <Login />
      <p className={styles.authText}>
        Нет аккаунта? <Link className={styles.authLink} to={ROUTES.SIGNUP}>Создать</Link>
      </p>
    </div>
  );
};
