import React, { useContext, useState } from 'react';
import styled from "styled-components";
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
import FullButton from '../components/Buttons/FullButton';

// Screens
function Detail() {
const location = useLocation();
const basket = location.state;
console.log(basket);
  return (
    <>
      <TopNavbar />
      <div className="container70 whiteBg shadow" style={{padding: '50px 0 0'}}>
          <div style={{padding: '30px 0'}}>  
              <div className="container">
                <div className="flexSpaceNull">
                  <div className='flexWrapper60'>
                    <div className="flexSpaceNull">
                      <div>
                        <h3 className="box font30 extraBold">{basket.basketName}</h3>
                        <p className="box font11">Managed by {basket.owner}</p>
                      </div>
                      <div className="box">
                        {basket.subscriptionFee==0 ? <FreeIcon /> : ""}
                      </div>  
                      
                    </div>
                    <p className="font13" style={{ padding: "5px 0" }}>
                      {basket.overview}
                    </p>
                  </div>
                  <div className="flexSpaceNull flexCenter flexWrapper25">
                    <p className={' tag  radius6 font11 extraBold '+ (basket.risk=="High"? "redBg" : basket.risk=="Medium"? "orangeBg":"greenBg")}>Risk: {basket.risk}</p>
                    <p className={' tag  radius6 font11 extraBold '+ (basket.volatility=="High"? "redBg" : basket.volatility=="Medium"? "orangeBg":"greenBg")}>Volatility: {basket.volatility}</p>
                  </div>
                </div>
                <div className="flexSpaceNull">
                  <div className="flexWrapper70">
                    <div style={{ padding: "15px 0 0" }}>
                      <div className="box semiBold font11 purpleColor borderShow radius6" >
                        <FontAwesomeIcon className="font14 purpleColor" style={{ padding: "0 5px 0 15px" }} icon={faPlusCircle}/>
                        {/* <p className="font15">  </p> */}
                        Trending
                        <p className="font11 darkColor regular" style={{ padding: "5px 15px" }}>Watchlisted by over 10K investors</p>
                      </div>
                    </div>
                    <div>
                      <p className='box semiBold'>At a Glance</p>
                      <div className='flexSpaceCenter borderBottom'>
                        <div className='flexWrapper20'>                          
                          <p className='font13'>CryptoCurrencies</p>
                          <p className='font13'>{basket.cryptoNumber}</p>                        
                          <p className='font13'>Last Rebalance</p>
                          <p className='font13'>4</p>                       
                        </div>                     
                        <div className='flexWrapper70'>
                          <p className='font13'>Rebalance Frequency</p>
                          <p className='font13'>4</p>
                          <p className='font13'>Next Rebalance</p>
                          <p className='font13'>4</p>
                        </div>
                      </div>                     
                    </div>
                    <Wrapper>
                      <p className='box semiBold'>Detail</p>
                      <p className='font13 borderBottom'>{basket.details}</p>
                    </Wrapper>
                    
                    <Wrapper>
                      <p className='box semiBold'>CryptoCurrencies & Weights</p>
                      <div className='flexSpaceCenter' style={{ padding: "0 0 5px 0" }}>
                        <p className='flexWrapper60 font13'>CryptoCurrency</p>
                        <p className='flexWrapper20 font13'>Weightage(%)</p>
                      </div>
                    {(basket.cryptoAlloc) && basket.cryptoAlloc.map(allocation => 
                        <div className='flexSpaceCenter'>                           
                          <p className='flexWrapper60 font13'>{allocation.cryptoSymbol}</p>
                          <p className='flexWrapper20 font13 flexCenter'>{allocation.weight}</p>                        
                        </div>)}
                    </Wrapper>
                  </div>
                  <div className="flexWrapper20">
                    <div className='box textCenter'>
                      <p>Subscription Fee</p> 
                      <p>{basket.subscriptionFee} €</p>
                    </div>                   
                    <FullButton title={basket.subscriptionFee==0 ? "Invest Now" : "Subscribe Now"}/>
                  </div>
                </div>       
            </div>
        </div>
      </div>
      <Footer />
    </>
    
  );
}
const Wrapper = styled.div`
width: 100%;
text-align: left;

margin-top: 30px;
`;
export default Detail