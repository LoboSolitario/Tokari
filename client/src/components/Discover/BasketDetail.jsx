import React from 'react';
import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom'
import FreeIcon from "../../assets/svg/Services/FreeIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faLock} from '@fortawesome/free-solid-svg-icons';
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import PieChartComponent from './PieChart';

// Screens
function BasketDetail() {
const location = useLocation();
const navigate = useNavigate();
const basket = location.state;
const handleSubmit = async (event) => {

  if (basket.subscriptionFee === 0 || basket.cryptoAlloc) {
    navigate(`/basket/invest/${basket._id}`, {state:basket});
  } else {
    const stripePromise = loadStripe(
      'pk_test_51LG4BtLrYzCcT1VhaohAqZIhPa8mvakR4rd9z2dI7VN0iEOKAtP73PSw1pNRE0kF4VH9bSUNxkkqdDOuEXjrzJee00Gz2np472'
    );
    const stripe = await stripePromise;
    const token = localStorage.getItem("token")
    event.preventDefault();
    await axios({
      method: 'post',
      url: `http://localhost:4600/api/baskets/payment`,
      data: JSON.stringify({ "lookup_key": basket._id }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer: " + token
      }
    })
      .then(function (response) {
        return response.data;
      })
      .then(function (sessionId) {
        return stripe.redirectToCheckout({ sessionId: sessionId });
      })
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          alert("Unauthorised Role Access")
        }
        else {
          alert("ERROR:", err.response.data)
        }
  
      })
  }
}
  return (
      <div key={basket.id} className="container70 whiteBg shadow discoverPage" >
          <div style={{padding: '30px 0'}}>  
              <div className="container">
                <div className="flexSpaceNull">
                  <div className='flexWrapper60'>
                    <div className="flexSpaceNull">
                      <div>
                        <h3 className="box font30 extraBold">{basket.basketName}</h3>
                        <p className="box font11">Managed by <b> {basket.owner.name}</b></p>
                      </div>
                      <div className="box">
                        {basket.subscriptionFee===0 ? <FreeIcon /> : ""}
                      </div>  
                      
                    </div>
                    <p className="font13" style={{ padding: "5px 0" }}>
                      {basket.overview}
                    </p>
                  </div>
                  <div className="flexSpaceNull flexCenter flexWrapper25">
                    <p className={' tag  radius6 font11 extraBold '+ (basket.risk==="High"? "redBg" : basket.risk==="Medium"? "orangeBg":"greenBg")}>Risk: {basket.risk}</p>
                    <p className={' tag  radius6 font11 extraBold '+ (basket.volatility==="High"? "redBg" : basket.volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {basket.volatility}</p>
                  </div>
                </div>
                <div className="flexSpaceNull">
                  <div className="flexWrapper70">
                    <div style={{ padding: "15px 0 0" }}>
                      <div className="box semiBold font11 purpleColor borderShow radius6" >
                        <FontAwesomeIcon className="font14 purpleColor" style={{ padding: "0 5px 0 15px" }} icon={faPlusCircle}/>
                        Trending
                        <p className="font11 darkColor regular" style={{ padding: "5px 15px" }}>Watchlisted by over 10K investors</p>
                      </div>
                    </div>

                    <div className='borderBottom'>
                      <Wrapper style={{ padding: "0 0 20px 0px"}}>
                        <p className='box semiBold'>Detail</p>
                        <p className='font13'>{basket.details}</p>
                      </Wrapper>
                    </div>

                    <div className='borderBottom'>
                      <Wrapper style={{ padding: "0 0 20px 0px"}}>
                      <p className='box semiBold'>At a Glance</p>
                      <div className='flexSpaceCenter' >
                        <div className='flexWrapper60'>                          
                          <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Cryptocurrencies</p>
                          <p className='font13' style={{ padding: "0 0 7px 0px"}}>{basket.cryptoNumber}</p>                        
                          <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Last rebalance</p>
                          <p className='font13'>Jun.20, 2022</p>                       
                        </div>                     
                        <div className='flexWrapper30'>
                          <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Rebalance frequency</p>
                          <p className='font13' style={{ padding: "0 0 7px 0px"}}>three month</p>
                          <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Next rebalance</p>
                          <p className='font13'>Sep.20, 2022</p>
                        </div>
                      </div>
                      </Wrapper>                     
                    </div>
                  
                    <Wrapper style={{ padding: "1px 0 0 0"}}>
                      <p className='box semiBold'>CryptoCurrencies & Weights</p>
                      {basket.cryptoAlloc ? (
                      <div className='flexSpaceCenter'>
                        <div className="flexWrapper50" style={{padding: "0 0 25px 0"}}>
                          <div className='flexSpaceCenter' style={{ padding: "10px 0"}}>                 
                              <p className='font13 semiBold flexWrapper60' style={{ padding: "0 0 5px 0px"}}>Cryptocurrency</p>
                              <p className='font13 semiBold flexWrapper30' style={{ padding: "0 0 5px 0px"}}>Weights(%)</p>
                          </div>
                          <p></p>     {/* Arranging color orders */}
                          {(basket.cryptoAlloc) && basket.cryptoAlloc.map(allocation => 
                          <div className='flexSpaceCenter tableStripe' style={{ padding: "5px"}}>                                                        
                              <p className='flexWrapper60 font13'>{allocation.cryptoSymbol}</p>                                              
                              <p className='flexWrapper30 font13'>{allocation.weight}</p>
                          </div>)} 
                        </div>
                        <div className='flexWrapper50'>
                          <PieChartComponent/>
                        </div>
                         
                      </div> 
                    ) : (
                      <Wrapper className='container whiteBg shadow flexCenter' style={{height:'200px'}}>
                        <div  style={{width: '200px'}}>
                          <div className='flexCenter' style={{ padding: "5px 0px"}}>
                            <FontAwesomeIcon icon={faLock} className="font30 purpleColor"/>
                          </div>
                          <p className='flexCenter font13' style={{ padding: "5px 0px"}}>
                            Subcribe to see cryptocurrencies 
                          </p>
                          <div style={{ padding: "5px 0px"}} className="flexCenter">
                            <form onSubmit={handleSubmit}>
                              {/* Add a hidden field with the lookup_key of your Price */}
                              <input type="hidden" name="lookup_key" value={basket._id} />
                              <button className="smallsubscribeButton animate pointer radius6" id="checkout-and-portal-button" type="submit">
                                Subscribe now
                              </button>
                            </form>
                          </div>
                        </div>
                      </Wrapper>
                    )}
                    </Wrapper>
                  </div>
                  <div className="flexWrapper25" >
                    <div className='box textCenter' style={{ padding: "12px 0 0" }}>
                      <p className='font13'>{(basket.subscriptionFee===0 || basket.cryptoAlloc) ? "" : `Subscription fee ${basket.subscriptionFee} $`}</p> 
                    </div>  
                    <div>
                      <form onSubmit={handleSubmit}>
                        {/* Add a hidden field with the lookup_key of your Price */}
                        <input type="hidden" name="lookup_key" value={basket._id} />
                        <button className="subscribeButton animate pointer radius6" id="checkout-and-portal-button" type="submit">
                          {(basket.subscriptionFee===0 || basket.cryptoAlloc) ? "Invest now" : "Subscribe now"}
                        </button>
                      </form>
                    </div>                                    
                  </div>
                </div>       
            </div>
        </div>
      </div>
    
  );
}
const Wrapper = styled.div`
width: 100%;
text-align: left;
margin-top: 30px;
`;
export default BasketDetail