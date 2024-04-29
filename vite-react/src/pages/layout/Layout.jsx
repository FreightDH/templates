import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
