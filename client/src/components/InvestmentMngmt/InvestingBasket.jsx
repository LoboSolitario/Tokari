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
        console.log(amount)
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
        <div className="container70 whiteBg shadow discoverPage" >
            <div style={{ padding: '30px 0' }}>
                <div className="container">
                    <div className="flexSpaceNull">
                        <div>
                            <div className="flexSpaceNull">
                                <div>
                                    <h3 className="box font30 extraBold">Investing in <em>{basket.basketName}</em></h3>
                                    <p className="box font11">Managed by <b> {basket.owner.name}</b></p>
                                    <h4 style={{ padding: '0 0 20px 0' }}>Confirm Investment Amount</h4>

                                    <div className="flexRow">
                                        <Form className='font13' style={{ padding: '0 30px' }}>
                                            <Form.Group controlId="amount" style={{ marginBottom: "10px" }}>
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
                                            <FullButton title="Invest" />
                                        </div>
                                    </div>

                                </div>
                                <div className="box">
                                    {basket.subscriptionFee === 0 ? <FreeIcon /> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flexSpaceNull">
                        <div className="flexWrapper70">
                            <Wrapper style={{ padding: "1px 0 0 0" }}>
                                <p className='box semiBold'>CryptoCurrencies & Weights</p>

                                <div className='flexSpaceCenter' style={{ padding: "0 0 20px 0px" }}>
                                    <div className='flexWrapper60'>
                                        <p className='font13 semiBold' style={{ padding: "0 0 5px 0px" }}>Cryptocurrency</p>
                                        {(basket.cryptoAlloc) && basket.cryptoAlloc.map(allocation =>
                                            <p className='flexWrapper60 font13'>{allocation.cryptoSymbol}</p>)}
                                    </div>
                                    <div className='flexWrapper30'>
                                        <p className='font13 semiBold' style={{ padding: "0 0 5px 0px" }}>Weights(%)</p>
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