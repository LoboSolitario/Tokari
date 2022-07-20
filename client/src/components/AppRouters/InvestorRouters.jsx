import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavbar from '../Nav/TopNavbar';
import InvestmentHeader from '../InvestmentMngmt/InvestmentHeader';
import Footer from '../../components/Sections/Footer';
import TransactionContext from '../contexts/TransactionContext';
import React,  { useState }  from 'react';
import SubscriptionHome from '../InvestmentMngmt/SubscriptionHome'
import InvestmentHome from '../InvestmentMngmt/InvestmentHome';
import InvestorNavbar from '../Nav/InvestorNavbar';
import TransactionHome from '../Transactions/TransactionHome';

function InvestorRouters() {
  const [baskets, setBaskets] = useState([]);
  const [transactions, setTransactions] = useState([]);
  return (
    <div>
      <TopNavbar/>
      <InvestmentHeader />
      <InvestorNavbar/>
        <Routes>
          <Route element={<SubscriptionHome />} path="/subscriptions" />
        </Routes>
      <InvestmentBasketContext.Provider value={{ baskets, setBaskets }}>
        <Routes>
          <Route element={<InvestmentHome />} path="/investments" />
          {/* <Route element={<TransactionHome />} path="/transactions" /> */}
        </Routes>
      </InvestmentBasketContext.Provider>
      <TransactionContext.Provider value={{ transactions, setTransactions }}>
        <Routes>
          <Route element={<TransactionHome />} path="/transactions" />
        </Routes>
      </TransactionContext.Provider>
      <Footer />
    </div>
  )
}

export default InvestorRouters