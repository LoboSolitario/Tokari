import React from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
import BasketDetail from '../components/Discover/BasketDetail';
import Footer from '../components/Sections/Footer';

function Detail() {
// const location = useLocation();
// const basket = location.state;

  return (
    <>
      <TopNavbar />
      <BasketDetail/>
      <Footer />
    </>
    
  );
}
export default Detail