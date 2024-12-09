import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './header.module.css';
import Logo from '@shared/assets/images/logo.svg'

export const Header = () => {
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
        <NavLink
          className={({ isActive }) =>
            clsx(styles.navigationItem, {
              [styles.navigationItemActive]: isActive
            })
          }
          to='/login'
        >Войти</NavLink>
      </nav>
    </header>
  )
}
