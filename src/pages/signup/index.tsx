import { Link } from 'react-router-dom';
import { Signup } from '@/widgets';
import styles from '@shared/styles/identity.module.scss';
import { ROUTES } from '@shared/consts/routes';

export const SignUpPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Регистрация</h1>
      <Signup />
      <p className={styles.text}>
        Уже есть аккаунт? <Link className={styles.link} to={ROUTES.LOGIN}>Войти</Link>
      </p>
    </div>
  );
};
