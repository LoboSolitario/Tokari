import React,  { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";
import TopNavbar from '../Nav/TopNavbar';
import PortfolioHome from '../PortfolioMngmt/PortfolioHome';
import PortfolioHeader from '../PortfolioMngmt/PortfolioHeader';
import BasketContext from '../contexts/BasketContext';
import Footer from '../../components/Sections/Footer';

// Screens
function PortfolioRouters() {
  const [baskets, setBaskets] = useState([]);
  return (
      <Routes>
        <Route element={
          <>
          <BasketContext.Provider value={{baskets, setBaskets}}>
            <TopNavbar/>
            <PortfolioHeader/>
            <PortfolioHome/>
            <Footer/>
          </BasketContext.Provider>
          </>
        } path="/" exact>
        </Route>
      </Routes>   
  )
}
export default PortfolioRouters