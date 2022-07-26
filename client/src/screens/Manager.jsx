import React from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
import ManagerProfile from '../components/Users/ManagerProfile';
import Footer from '../components/Sections/Footer';

function Manager() {

  return (
    <>
      <TopNavbar />
      <ManagerProfile/>
      <Footer />
    </>
    
  );
}
export default Manager