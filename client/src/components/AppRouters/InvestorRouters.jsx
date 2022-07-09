import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavbar from '../Nav/TopNavbar';
import InvestmentHeader from '../InvestmentMngmt/InvestmentHeader';
import Footer from '../../components/Sections/Footer';
import SubscribedBasketContext from '../contexts/SubscribedBasketContext'
import React,  { useState }  from 'react';
import SubscriptionHome from '../InvestmentMngmt/SubscriptionHome'
import InvestmentHome from '../InvestmentMngmt/InvestmentHome';
import InvestorNavbar from '../Nav/InvestorNavbar';

function InvestorRouters() {
  const [baskets, setBaskets] = useState([]);
  return (
    <div>
      <TopNavbar/>
      <InvestmentHeader />
      <InvestorNavbar/>
      <SubscribedBasketContext.Provider value={{ baskets, setBaskets }}>
        <Routes>
          <Route element={<SubscriptionHome />} path="/subscriptions" />
          <Route element={<InvestmentHome />} path="/investments" />
        </Routes>
        <Routes>
        </Routes>

      </SubscribedBasketContext.Provider>
      <Footer />
    </div>
  )
}

export default InvestorRouters