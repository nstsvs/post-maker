import React from 'react';
import { Link } from 'react-router-dom';
import { Signup } from '@/widgets';
import styles from '../auth.module.css';

export const SignUpPage = () => {
  return (
    <div className={styles.authWrapper}>
      <h1>Регистрация</h1>
      <Signup />
      <p className={styles.authText}>
        Уже есть аккаунт? <Link className={styles.authLink} to={'/login'}>Войти</Link>
      </p>
    </div>
  );
};
