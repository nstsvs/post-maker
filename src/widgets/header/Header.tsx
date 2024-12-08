import React from 'react';
import './header.css';
import Logo from '@shared/assets/images/logo.svg'
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const Header = () => {
  return (
    <header className="header">
      <Logo className="header-logo" alt="Логотип" />
      <nav className="menu">
        <NavLink
          className={({ isActive }) =>
            clsx('menu-item', {
              'menu-item--active': isActive
            })
          }
          to='/post-list'
        >Главная</NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx('menu-item', {
              'menu-item--active': isActive
            })
          }
          to='/auth'
        >Войти</NavLink>
      </nav>
    </header>
  )
}
