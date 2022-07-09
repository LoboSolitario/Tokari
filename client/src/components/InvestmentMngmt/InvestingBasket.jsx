import React, { useState } from 'react';
import styled from "styled-components";
import FreeIcon from "../../assets/svg/Services/FreeIcon";
import FullButton from "../Buttons/FullButton";
import configOptions from '../../api/configOptions';
import {useNavigate}  from "react-router-dom";
import { Form } from 'react-bootstrap';

// Screens
function BasketDetail(props) {
    const [amount, setAmount] = useState(0);
    const basket = props.basket;
    function handleClick(event) {
        console.log("helloo");
        console.log(amount);
    }
    let navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BASE_URL;  
    const token = localStorage.getItem("token");
   
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const headers = {
          "content-type": "application/json",
          "Authorization": "Bearer: " + token
        };
        
        const options = {
          body: JSON.stringify({
                // "basketName": basket.basketName,
                // "overview": basket.overview, 
                // "details": basket.details,
                // "volatility": basket.volatility, 
                // "risk": basket.risk,  
                // "rebalanceFee": "12312",
                // "subscriptionFee": basket.subscriptionFee,
                // "cryptoAlloc": basket.cryptoAlloc.filter(allocation => allocation.weight && allocation.weight > 0),
                // "cryptoNumber": basket.cryptoAlloc.filter(allocation => allocation.weight && allocation.weight > 0).length,
                "amount": basket.amount
          }),
          json: true 
        };

        configOptions("POST", headers, options);  
        const response = await fetch(`${baseUrl}/api/baskets/invest/${basket._id}`, options);
        if(response.ok){
          response.json().then(() => {
            navigate('/investormain')
          })
        }
        else{
           console.log(response.statusText);
        }  
    }

  return (
    <div className="container70 whiteBg shadow discoverPage" >
        <div style={{padding: '30px 0'}}>  
            <div className="container">
                <div className="flexSpaceNull">
                    <div>
                        <div className="flexSpaceNull">
                            <div>
                                <h3 className="box font30 extraBold">Investing in <em>{basket.basketName}</em></h3>
                                <p className="box font11">Managed by <b> {basket.owner.name}</b></p>
                                <h4 style={{padding: '0 0 20px 0'}}>Confirm Investment Amount</h4>

                                <div className="flexRow">
                                    <Form className='font13' style={{padding: '0 30px'}}>
                                        <Form.Group controlId="amount" style={{marginBottom: "10px"}}>
                                            <Form.Label>Investment Amount</Form.Label>
                                            <Form.Control
                                            className="input-control form-control-sm font11"
                                            type="number"
                                            name="amount"
                                            value={amount}
                                            placeholder="Enter the Investment Amount"
                                            onChange={(e) => setAmount(e.target.value)}
                                            
                                            />
                                        </Form.Group>
                                    </Form>
                                    <div className='font14' onClick={handleOnSubmit}>
                                        <FullButton title="Invest"/>
                                    </div>
                                </div>

                            </div>
                            <div className="box">
                                {basket.subscriptionFee===0 ? <FreeIcon /> : ""}
                            </div>  
                        </div>
                    </div>
                    {/* <div className="flexSpaceNull flexCenter flexWrapper25">
                        <p className={' tag  radius6 font11 extraBold '+ (basket.risk==="High"? "redBg" : basket.risk==="Medium"? "orangeBg":"greenBg")}>Risk: {basket.risk}</p>
                        <p className={' tag  radius6 font11 extraBold '+ (basket.volatility==="High"? "redBg" : basket.volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {basket.volatility}</p>
                    </div> */}
                </div>
                <div className="flexSpaceNull">
                    <div className="flexWrapper70">
                        {/* <div style={{ padding: "15px 0 0" }}>
                            <div className="box semiBold font11 purpleColor borderShow radius6" >
                                <FontAwesomeIcon className="font14 purpleColor" style={{ padding: "0 5px 0 15px" }} icon={faPlusCircle}/>
                                Trending
                                <p className="font11 darkColor regular" style={{ padding: "5px 15px" }}>Watchlisted by over 10K investors</p>
                            </div>
                        </div> */}

                        {/* <div className='borderBottom'>
                            <Wrapper style={{ padding: "0 0 20px 0px"}}>
                                <p className='box semiBold'>Detail</p>
                                <p className='font13'>{basket.details}</p>
                            </Wrapper>
                        </div> */}

                        {/* <div className='borderBottom'>
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
                        </div> */}
                        <Wrapper style={{ padding: "1px 0 0 0"}}>
                            <p className='box semiBold'>CryptoCurrencies & Weights</p>
                            
                            <div className='flexSpaceCenter' style={{ padding: "0 0 20px 0px"}}>
                                <div className='flexWrapper60'>                          
                                    <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Cryptocurrency</p>
                                    {(basket.cryptoAlloc) && basket.cryptoAlloc.map(allocation =>                           
                                        <p className='flexWrapper60 font13'>{allocation.cryptoSymbol}</p>)}
                                </div>                     
                                <div className='flexWrapper30'>
                                    <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Weights(%)</p>
                                    {(basket.cryptoAlloc) && basket.cryptoAlloc.map(allocation =>                           
                                        <p className='flexWrapper60 font13'>{allocation.weight}</p>)}
                                </div>
                            </div>            
                        </Wrapper>
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