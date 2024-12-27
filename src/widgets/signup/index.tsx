import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '@widgets/form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '@/entities/reduxHooks';
import { setUser } from '@/store/slices/userSlice';
import { auth } from '@/firebase';

export const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (email: string, password: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken
      }));
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form
      title="Sign up"
      handleClick={handleSignUp}
    />
  );
};
