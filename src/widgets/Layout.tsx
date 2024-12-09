import React from 'react';
import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
