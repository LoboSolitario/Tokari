import React from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
import InvestingBasket from '../components/InvestmentMngmt/InvestingBasket';
import Footer from '../components/Sections/Footer';
import { useLocation } from 'react-router-dom'

function Detail() {
  const location = useLocation();
  const basket = location.state;

  return (
    <>
      <TopNavbar />
      <InvestingBasket basket={basket}/>
      <Footer />
    </>
    
  );
}
export default Detail