import React, { useContext, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import TopNavbar from '../components/Nav/TopNavbar';
import BasketDetail from '../components/Discover/BasketDetail';
import SingleContext from '../components/contexts/SingleContext';
import DiscoverHeader from '../components/Discover/DiscoverHeader';
import Footer from '../components/Sections/Footer';
import Filtering from '../components/Discover/Filtering';
import FreeIcon from "../assets/svg/Services/FreeIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

// Screens
function Detail() {
const location = useLocation();
const basket = location.state;
console.log(basket);
  return (
    <>
      <TopNavbar />
      <div className="lightBg" style={{padding: '50px 0 0'}}>
        <div className="container">
          <div style={{padding: '50px 0'}}>  
              <div className="container">
                <div className="flexSpaceNull">
                  <div>
                    <div className="flexSpaceNull">
                      <div>
                        <h3 className="font20 extraBold">{basket.basketName}</h3>
                        <p className="font11">Managed by {basket.owner}</p>
                      </div>  
                      {basket.subscriptionFee==0?<FreeIcon />: ""}
                    </div>
                    <p className="font13" style={{ padding: "5px 0" }}>
                      {basket.overview}
                    </p>
                  </div>
                  <div className="flexSpaceNull flexCenter">
                    <p className={' tag  radius6 font11 extraBold '+ (basket.risk=="High"? "redBg" : basket.risk=="Medium"? "orangeBg":"greenBg")}>Risk: {basket.risk}</p>
                    <p className={' tag  radius6 font11 extraBold '+ (basket.volatility=="High"? "redBg" : basket.volatility=="Medium"? "orangeBg":"greenBg")}>Volatility: {basket.volatility}</p>
                  </div>
                </div>
                <div className="flex flexSpaceCenter">
                  <div className="flexLeftWrapper">
                  <div className="semiBold font11 purpleColor borderShow">
                    <FontAwesomeIcon className="font14 purpleColor" icon={faPlusCircle}/>
                    {/* <p className="font15">  </p> */}
                    Trending
                    <p className="font11 darkColor regular">Watchlisted by over 10K investors</p>
                  </div>
                  </div>
                  <div className="flexRightWrapper">
                    Subscription Fee {basket.subscriptionFee} €
                  </div>
                </div>
              <div>
                <p>{basket.createdAt}</p>
                {(basket.cryptoAlloc) && basket.cryptoAlloc.map(allocation => 
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
    
  );
}
export default Detail