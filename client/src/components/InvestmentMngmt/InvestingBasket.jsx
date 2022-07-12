import React, { useState } from 'react';
import styled from "styled-components";
import FreeIcon from "../../assets/svg/Services/FreeIcon";
import FullButton from "../Buttons/FullButton";
import configOptions from '../../api/configOptions';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';

// Screens
function BasketDetail(props) {
    const [amount, setAmount] = useState(0);
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

    return (
        <Wrapper className="flexWrapper100">
        <div className="container50 whiteBg shadow discoverPage">
            <div style={{ padding: '50px 0' }}>
                <div className="container">
                    <div>
                                <div>
                                    <h3 className="box font30 semiBold">Investing in '{basket.basketName}'</h3>
                                    <h4 style={{ padding: '0 0 20px 0' }}>Confirm Investment Amount</h4>
                                </div>
                                <div className="flexCenter" style={{height: '25vh'}}>

                                    <div className="flexRow" >
                                        <Form className='font13' style={{ padding: '0 30px' }}>
                                            <Form.Group controlId="amount">
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
                                        <div className='font14 extraBold' style={{ width: "100px"}} onClick={handleOnSubmit}>
                                            <FullButton title="Invest"/>
                                        </div>
                                    </div>

                                </div>
                    </div>
                    <div className="flexSpaceNull">
                        <div className="flexWrapper100">
                            <Wrapper style={{ padding: "1px 0 0 0" }}>
                                <p className='box semiBold'>CryptoCurrencies & Weights</p>
                                    <div className="container" style={{padding: "0 0 25px 0"}}>
                                        <div className='flexSpaceCenter' style={{ padding: "10px 0"}}>                 
                                            <p className='font13 semiBold flexWrapper60' style={{ padding: "0 0 5px 0px"}}>Cryptocurrency</p>
                                            <p className='font14 semiBold flexWrapper30' style={{ padding: "0 0 5px 0px"}}>Weights(%)</p>
                                        </div>
                                        <p></p>     {/* Arranging color orders */}
                                        {(basket.cryptoAlloc) && basket.cryptoAlloc.map(allocation =>  
                                        <div className='flexSpaceCenter tableStripe' style={{ padding: "5px"}}>
                                            <p className='flexWrapper60 font13'>{allocation.cryptoSymbol}</p>
                                            <p className='flexWrapper30 font13'>{allocation.weight}</p>                                                       
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
export default BasketDetail