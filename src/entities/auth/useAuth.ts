import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '@/entities/reduxHooks';
import { setUser } from '@/store/slices/userSlice';

export const useAuthObserver = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
}
