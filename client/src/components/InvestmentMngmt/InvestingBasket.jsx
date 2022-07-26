import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap"
import FullButton from "../Buttons/FullButton";
import configOptions from '../../api/configOptions';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';

// Screens
function InvestingBasket(props) {
    const [amount, setAmount] = useState(0);
    const [investmentType, setInvestmentType] = useState(1);
    const basket = props.basket;
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
                "amount": amount
            }),
            json: true
        };

        configOptions("POST", headers, options);
        const response = await fetch(`${baseUrl}/api/baskets/invest/${basket._id}`, options);
        if (response.ok) {
            response.json().then((data) => {
                navigate('/investsuccessfully');
            })
        }
        else {
            console.log(response.statusText);
        }
    }

    const handleInvestmentTypeChange = async (e) => {}

    useEffect(()=>{
        // setBaskets(filteredBaskets);
        console.log(investmentType);
      }, [investmentType]);

    return (
        <Wrapper className="flexWrapper100" >
        <div className="container50 whiteBg shadow discoverPage" style={{padding: "50px 80px"}}>
            <div style={{ padding: '50px 0' }}>
                <div className="container">
                    <div>
                        <div>
                            <h3 className="box font30 semiBold">Investing in '{basket.basketName}'</h3>
                            <h4 style={{ padding: '30px 0 75px 0' }}>Confirm Investment Amount</h4>
                        </div>
                        <div className="flexRow flexCenterAndSpaced" >
                            <ToggleButtonGroup
                                value={investmentType}
                                type="radio"
                                exclusive
                                defaultValue={1}
                                name="InvestmentType"
                                onChange={(e) => setInvestmentType(e)}
                                className="flexGrow1"
                                style={{ height: "51px" }}
                                >
                                <ToggleButton style={{margin: "auto"}} id="monthly-sip-investment-type" className={(investmentType == 1 ? 'Btn-Active' : 'Btn-Deactive')} value={1}>Monthly SIP</ToggleButton>
                                <ToggleButton style={{margin: "auto"}} id="one-time-investment-type" className={(investmentType == 2 ? 'Btn-Active' : 'Btn-Deactive')} value={2}>One Time</ToggleButton>
                                {console.log("First timee", investmentType)}
                            </ToggleButtonGroup>
                            <Form className='font13 flexGrow4' style={{ padding: '0 30px' }}>
                                <Form.Group controlId="amount" >
                                    {/* <Form.Label>Investment Amount</Form.Label> */}
                                    <Form.Control
                                        className="input-control form-control-sm font15"
                                        type="number"
                                        name="amount"
                                        value={amount}
                                        placeholder="Enter the Investment Amount"
                                        onChange={(e) => setAmount(e.target.value)}
                                        style={{ height: "51px" }}
                                    />
                                </Form.Group>
                            </Form>
                            <div className='font14 extraBold flexGrow1' style={{ width: "100px"}} onClick={handleOnSubmit}>
                                <FullButton title="Invest"/>
                            </div>
                        </div>
                    </div>
                    <div className="flexSpaceNull">
                        <div className="flexWrapper100">
                            <Wrapper style={{ padding: "100px 0" }}>
                                <p className='box semiBold'>CryptoCurrencies & Weights</p>
                                    <div className="container" style={{padding: "0 0 25px 0"}}>
                                        <div className='flexSpaceCenter' style={{ padding: "10px 0"}}>                 
                                            <p className='font13 semiBold flexWrapper60' style={{ padding: "0 0 5px 0px"}}>Cryptocurrency</p>
                                            <p className='font14 semiBold flexWrapper30 textRight' style={{ padding: "0 0 5px 0px"}}>Weights(%)</p>
                                            <p className='font14 semiBold flexWrapper30 textRight' style={{ padding: "0 0 5px 0px"}}>Order Type</p>
                                        </div>
                                        <p></p>     {/* Arranging color orders */}
                                        {(basket.cryptoAlloc) && basket.cryptoAlloc.map(allocation =>  
                                        <div className='flexSpaceCenter tableStripe' style={{ padding: "5px"}}>
                                            <p className='flexWrapper60 font13'>{allocation.cryptoSymbol}</p>
                                            <p className='flexWrapper30 font13 textRight'>{allocation.weight}</p>   
                                            <p className='flexWrapper30 font13 textRight'>BUY</p>                                                       
                                        </div>)}
                                    </div> 
                            </Wrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>

    );
}
const Wrapper = styled.div`
width: 100%;
text-align: left;
`;
export default InvestingBasket