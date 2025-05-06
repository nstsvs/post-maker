import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets';
import styles from './index.module.scss'

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
};
