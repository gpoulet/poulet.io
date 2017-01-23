import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = (props) => {
  return <div>
    <header>
      <NavBar/>
    </header>
    <main>
      {props.children}
    </main>
    <Footer/>
  </div>;
};

export default Layout;