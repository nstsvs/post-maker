import { Link } from 'react-router-dom';
import { Login } from '@/widgets';
import styles from '@shared/styles/identity.module.scss';
import { ROUTES } from '@shared/consts/routes';

export const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Вход</h1>
      <Login />
      <p className={styles.text}>
        Нет аккаунта? <Link className={styles.link} to={ROUTES.SIGNUP}>Создать</Link>
      </p>
    </div>
  );
};
