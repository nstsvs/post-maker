import { useState } from 'react';
import { Form } from '@widgets/form';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAppDispatch } from '@/entities/reduxHooks';
import { setUser } from '@/store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/firebase';
import { ROUTES } from '@shared/consts/routes';

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');

  const handleLogin = async (email: string, password: string) => {
    try {
      setError('');
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken
      }));
      navigate(ROUTES.HOME);
    } catch (err: any) {
      setError(err.message);
      console.error(err);
    }
  }

  return (
    <>
      <Form
        title="Войти"
        handleClick={handleLogin}
      />
      {error && <p style={{color: 'red'}}>{error}</p>}
    </>
  );
};
