import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '@/widgets'

export const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>Or <Link to={'/signup'}>Create new account</Link></p>
    </div>
  );
};
