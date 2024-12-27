import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/widgets';

export const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
