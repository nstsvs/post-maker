import React from "react";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Header from '../header/Header';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
