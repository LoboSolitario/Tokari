import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavbar from '../Nav/TopNavbar';
import PortfolioHeader from '../PortfolioMngmt/PortfolioHeader';
import Footer from '../../components/Sections/Footer';
import SubscribedBasketContext from '../contexts/SubscribedBasketContext'
import React,  { useState }  from 'react';
import SubscriptionHome from '../InvestmentMngmt/SubscriptionHome'

function InvestorRouters() {
  const [baskets, setBaskets] = useState([]);
  return (
    <div>
      <TopNavbar />
      <PortfolioHeader />
      <SubscribedBasketContext.Provider value={{ baskets, setBaskets }}>
        <Routes>
          <Route element={<SubscriptionHome />} path="/" />
        </Routes>
        <Routes>
        </Routes>

      </SubscribedBasketContext.Provider>
      <Footer />
    </div>
  )
}

export default InvestorRouters