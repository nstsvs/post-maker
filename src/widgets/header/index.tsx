import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './header.module.css';
import Logo from '@shared/assets/images/logo.svg'
import { removeUser } from '@/store/slices/userSlice';
import { useAppDispatch } from '@/entities/reduxHooks';
import { useUser } from '@/entities/auth/useUser';

export const Header = () => {
  const dispatch = useAppDispatch();
  const {isAuth} = useUser();

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} alt="Логотип" />
      <nav className={styles.navigation}>
        <NavLink
          className={({ isActive }) =>
            clsx(styles.navigationItem, {
              [styles.navigationItemActive]: isActive
            })
          }
          to='/post-list'
        >Главная</NavLink>
        { isAuth ?
          <button
            className={styles.button}
            onClick={() => dispatch(removeUser())}
          >Выйти</button> :
          <NavLink
            className={({ isActive }) =>
              clsx(styles.navigationItem, {
                [styles.navigationItemActive]: isActive
              })
            }
            to='/login'
          >Войти</NavLink>
        }
      </nav>
    </header>
  )
}
