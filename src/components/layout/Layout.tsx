import React from "react";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;
