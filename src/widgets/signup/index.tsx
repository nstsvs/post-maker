import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '@widgets/form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '@/entities/reduxHooks';
import { setUser } from '@/store/slices/userSlice';
import { auth } from '@/firebase';
import { ROUTES } from '@shared/consts/routes';

export const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');

  const handleSignUp = async (email: string, password: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken
      }));
      navigate(ROUTES.HOME);
    } catch (err) {
      setError(err);
      console.error(err);
    }
  }

  return (
    <>
      <Form
        title="Создать новый аккаунт"
        handleClick={handleSignUp}
      />
      {error && <p style={{color: 'red'}}>{error}</p>}
    </>
  );
};
