import { useAppSelector } from '@/entities/reduxHooks';

export const useUser = () => {
  const {email, token, id} = useAppSelector(state => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}
