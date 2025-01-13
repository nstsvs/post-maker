import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/widgets';
import styles from './index.module.scss'

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
