import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import FullButton from "../Buttons/FullButton";

const PortfolioForm = (props) => {

  const [basket, setBasket] = useState(() => {
    return {
      id: props.basket ? props.basket.id : '',
      basketName: props.basket ? props.basket.basketName : '',
      risk: props.basket ? props.basket.risk : '',
      volatility: props.basket ? props.basket.volatility : '',
      subscriptionFee: props.basket ? props.basket.subscriptionFee : '',
      overview: props.basket ? props.basket.overview : '',
      frequency: props.basket ? props.basket.frequency : '',
      details: props.basket ? props.basket.details : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { overview, basketName, risk, volatility, subscriptionFee, frequency, details} = basket;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [overview, basketName, risk, volatility, subscriptionFee, frequency, details];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const basket = {
        overview,
        basketName,
        risk,
        volatility,
        subscriptionFee,
        frequency,
        details
      };
      props.handleOnSubmit(basket);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBasket((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="main-form flexHorizontalCenter container" style={{minHeight: "70vh"}}>
      <Form className='font13' onSubmit={handleOnSubmit}>
        <Form.Group controlId="basketName" style={{marginBottom: "10px"}}>
            <Form.Label>Basket Name</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="basketName"
              value={basketName}
              placeholder="Enter your basket name"
              onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group controlId="overview" style={{marginBottom: "10px"}}>
            <Form.Label>Overview</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="overview"
              value={overview}
              placeholder="Enter the overview"
              onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group controlId="risk" style={{marginBottom: "10px"}}>
            <Form.Label>Risk</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="risk"
              value={risk}
              placeholder="Enter risk"
              onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group controlId="subscriptionFee" style={{marginBottom: "10px"}}>
            <Form.Label>Subscription Fee</Form.Label>
            <Form.Control
              className="input-control"
              type="number"
              name="subscriptionFee"
              value={subscriptionFee}
              placeholder="Enter the subscription fee"
              onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group controlId="volatility" style={{marginBottom: "10px"}}>
            <Form.Label>Volatility</Form.Label>
            <Form.Control
              className="input-control"
              type="text"
              name="volatility"
              value={volatility}
              placeholder="Enter volatility"
              onChange={handleInputChange}
              />
        </Form.Group>
            
        <Form.Group controlId="frequency" style={{marginBottom: "10px"}}>
          <Form.Label>Frequency</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="frequency"
            value={frequency}
            placeholder="Enter your frequency"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="frequency" style={{marginBottom: "10px"}}>
          <Form.Label>Details</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="details"
            value={details}
            placeholder="Enter your details"
            onChange={handleInputChange}
          />
        </Form.Group>

        <div className='font14' style={{ width: "100px", marginTop: "20px", marginBottom: "20px"}}>
              <FullButton title="Submit"/>
        </div>
        {errorMsg && <p style={{marginTop: "20px", marginBottom: "20px"}} className="errorMsg">{errorMsg}</p>}      
      </Form>
       
    </div>
  );
};

export default PortfolioForm;
