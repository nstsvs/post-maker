import React from 'react';
import { Link } from 'react-router-dom';
import { Signup } from '@/widgets';

export const SignUpPage = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <Signup />
      <p>Already have an account? Go to <Link to={'/login'}>Log in</Link>
      </p>
    </>
  );
};
