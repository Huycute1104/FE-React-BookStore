import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Footer from '../Footer/Footer';

const DefaultComponent = ({ children }) => {
  return (
    <div className="page-wrapper">
      <HeaderComponent />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultComponent;
