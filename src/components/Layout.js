// src/components/Layout.js
import React from 'react';
import Footer from './Footer'; // Ensure the correct path to Footer
import './Layout.css'; // Ensure the correct path to Layout.css

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="content">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
