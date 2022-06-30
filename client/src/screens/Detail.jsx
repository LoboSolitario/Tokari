import React, { useContext, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import TopNavbar from '../components/Nav/TopNavbar';
import BasketDetail from '../components/Discover/BasketDetail';
import SingleContext from '../components/contexts/SingleContext';
import DiscoverHeader from '../components/Discover/DiscoverHeader';
import Footer from '../components/Sections/Footer';
import Filtering from '../components/Discover/Filtering';

// Screens
function Detail() {
const location = useLocation();
const basket = location.state;
console.log(basket);
  return (
    
    <div>
    <p>{basket._id}</p>
    <p>{basket.basketName}</p>
    <p>{basket.createdAt}</p>
    {basket.cryptoAlloc.map(allocation => 
      <div>
        <p>{allocation.cryptoSymbol}</p>
        <p>{allocation.weight}</p>
      </div>)}
    <p>{basket.details}</p>
    <p>{basket.overview}</p>
    <p>{basket.owner}</p>
    <p>{basket.risk}</p>
    <p>{basket.subscriptionFee}</p>
    <p>{basket.updatedAt}</p>
    <p>{basket.volatility}</p>

    </div>
    )
}
export default Detail

// <>
    //   <TopNavbar />
      {/* <div className="lightBg">
        <DiscoverHeader />
        <div className="flex ">
        <SingleContext.Provider value={{ singlebaskets, setSingleBaskets }}>
              <Routes>
                <Route element={<BasketDetail id = {id}/>} path="/" />
              </Routes>
        </SingleContext.Provider>
        </div>
      </div>
      
      <Footer />
    </>


    )
}
export default Detail


