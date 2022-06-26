import React,  { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";
import TopNavbar from '../Nav/TopNavbar';
import PortfolioHome from '../PortfolioMngmt/PortfolioHome';
import PortfolioHeader from '../PortfolioMngmt/PortfolioHeader';
import PortfolioCreate from '../PortfolioMngmt/PortfolioCreate'
import BasketContext from '../contexts/BasketContext';
import Footer from '../../components/Sections/Footer';

// Screens
function PortfolioRouters() {
  const [baskets, setBaskets] = useState([]);
  return (
    <div>
      <TopNavbar/>
      <PortfolioHeader/>
      <BasketContext.Provider value={{baskets, setBaskets}}>
        
        <Routes>
          <Route element={<PortfolioHome/>} path="/"/>   
          <Route element={ <PortfolioCreate/>} path="/createBasket"/>
        </Routes> 
        <Routes>
        </Routes>   

      </BasketContext.Provider>
      <Footer/>
    </div>
  
  )
}
export default PortfolioRouters