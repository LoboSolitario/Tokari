import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
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

  const [crypto, setCrypto] = useState(() => {
    return {   
      Bitcoin: props.crypto ? props.crypto.Bitcoin : '', 
      Ethereum: props.crypto ? props.crypto.Ethereum : '', 
      Litecoin: props.crypto ? props.crypto.Litecoin : '', 
      Tron: props.crypto ? props.crypto.Tron : '', 
      XRP: props.crypto ? props.crypto.XRP : '', 
      Binancecoin: props.crypto ? props.crypto.Binancecoin : '', 
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  let [total, setTotal] = useState(('0'));
  const { overview, basketName, risk, volatility, subscriptionFee, details} = basket;
  // const {Bitcoin, Ethereum, Litecoin, Tron, XRP, Binancecoin} = crypto;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [overview, basketName, risk, volatility, subscriptionFee, details];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {

     let cryptoAlloc = [];

     Object.keys(crypto).map(function(key){
        console.log("cryptoSymbol: ", key, "weight:", crypto[key]);
        cryptoAlloc.push({"cryptoSymbol": key, "weight": crypto[key]})
        return key
     });
     
     const basket = {
        overview,
        basketName,
        risk,
        volatility,
        subscriptionFee,
        details, 
        cryptoAlloc
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

  const handleInputChangeCrypto = (event) => {
    const { name, value } = event.target;
    setCrypto((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="main-form flexHorizontalCenter container" style={{minHeight: "70vh"}}>
      <Form className='font13' onSubmit={handleOnSubmit}>
      <h3 style={{marginBottom: "10px"}}>General information</h3>
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

        <Form.Group controlId="frequency" style={{marginBottom: "15px"}}>
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
        
        <Form className="flexRow" style={{marginBottom: "10px"}}>
              <p style={{marginRight: "28px"}}>Risk:</p>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} 
                    className="flexRow" 
                    onChange={handleInputChange}
                    >
                  <Form.Check 
                    style={{marginLeft: "30px", fontSize: "14px"}}
                    label="High"
                    name="risk"
                    value="High"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    style={{marginLeft: "30px", fontSize: "14px"}}
                    label="Medium"
                    value="Medium"
                    name="risk"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    style={{marginLeft: "30px", fontSize: "14px"}}
                    label="Low"
                    value="Low"
                    name="risk"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>

            <Form className="flexRow">
              <p>Volatility: </p>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} 
                    className="flexRow flexCenter" 
                    onChange={handleInputChange}
                    >
                  <Form.Check 
                    style={{marginLeft: "30px", fontSize: "14px"}}
                    label="High"
                    name="volatility"
                    value="High"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    style={{marginLeft: "30px", fontSize: "14px"}}
                    label="Medium"
                    value="Medium"
                    name="volatility"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    style={{marginLeft: "30px", fontSize: "14px"}}
                    label="Low"
                    value="Low"
                    name="volatility"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
      
    <h3 style={{marginTop: "40px", marginBottom: "20px"}}>Crypto Allocation</h3>
      <Table border hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>weight</th>
            </tr>
          </thead>
          <tbody>
            
            {Object.keys(crypto).map((item, key) => (
              <tr>
              <td>{key + 1}</td>
              <td>{item}</td>
                <td>
                    <Form.Control
                    className="input-control"
                    style={{width: "160px"}}
                    type="number"
                    name={item}
                    value={crypto[key]}
                    min="0"
                    max="100"
                    placeholder="Enter the weight"
                    onChange={handleInputChangeCrypto}
                    />
                </td>
               </tr> 
            ))}
          </tbody>
          {/* <thead>
            <tr>
              <th></th>
              <th>Total weight: {total}</th>
            </tr>
          </thead> */}
      </Table>

        <div className='font14' style={{ width: "100px", marginTop: "20px", marginBottom: "20px"}}>
              <FullButton title="Submit"/>
        </div>
        {errorMsg && <p style={{marginTop: "20px", marginBottom: "20px"}} className="errorMsg">{errorMsg}</p>}   
      </Form>
    </div>
  );
};

export default PortfolioForm;
