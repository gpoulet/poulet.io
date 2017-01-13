import React from 'react';
import NavBar from './NavBar';

const Layout = (props) => {
  return <div>
    <header>
      <NavBar/>
    </header>
    <main>
      {props.children}
    </main>
  </div>;
};

export default Layout;