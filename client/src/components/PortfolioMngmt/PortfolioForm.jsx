import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form, Table } from 'react-bootstrap';
import { MenuItem } from 'react-pro-sidebar';
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
  const [total, setTotal] = useState(('0'));
  const { overview, basketName, risk, volatility, subscriptionFee, details} = basket;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [overview, basketName, risk, volatility, subscriptionFee, details];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled && total === 100) {

     let cryptoAlloc = [];

     Object.keys(crypto).map(function(key){
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
    } 
    else if(!allFieldsFilled) {
      errorMsg = 'Please fill out all the fields ⚠️';
      setErrorMsg(errorMsg);
    }
    else if(total !== 100 && allFieldsFilled){
      errorMsg = "Please note that the total weight must be exactly 100 percent ⚠️"
      setErrorMsg(errorMsg);
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault()
    let { name, value } = event.target;
    
    if(name === "subscriptionFee" && value < 0){
      return value = 0     
    }
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

  useEffect(()=>{
    let tempTotal = 0
    Object.keys(crypto).map((item, key) => {
      tempTotal += Number(crypto[item]);
      return key
    });

    if(tempTotal <= 100 && tempTotal >= 0){
      setTotal(tempTotal);
    }else{
      setTotal(0)
    }
  },[crypto]);

  return (
    <div className="main-form flexHorizontalCenter container" style={{minHeight: "70vh"}}>
      <Form className='font13' onSubmit={handleOnSubmit}>
      <h3 style={{marginBottom: "10px"}}>General Information</h3>
        <Form.Group controlId="basketName" style={{marginBottom: "10px"}}>
            <Form.Label>Basket Name</Form.Label>
            <Form.Control
              className="input-control form-control-sm font11"
              type="text"
              name="basketName"
              value={basketName}
              placeholder="Enter your basket name"
              onChange={handleInputChange}
              required
            />
        </Form.Group>

        <Form.Group controlId="overview" style={{marginBottom: "10px"}}>
            <Form.Label>Overview</Form.Label>
            <textarea
              style={{minWidth: "100%"}}
              className="flex input-control form-control-sm font11"
              type="text"
              name="overview"
              value={overview}
              placeholder="Enter the overview"
              onChange={handleInputChange}
              required
              rows="2"
            />
        </Form.Group>

        <Form.Group controlId="subscriptionFee" style={{marginBottom: "10px"}}>
            <Form.Label>Subscription Fee</Form.Label>
            <Form.Control
              className="input-control form-control-sm font11"
              type="number"
              name="subscriptionFee"
              value={subscriptionFee}
              placeholder="Enter the subscription fee"
              onChange={handleInputChange}
            />
        </Form.Group>

        <Form.Group controlId="frequency" style={{marginBottom: "15px"}}>
          <Form.Label>Details</Form.Label>
          <textarea
            style={{minWidth: "100%"}}
            className="flex input-control form-control-sm font11"
            type="text"
            name="details"
            value={details}
            placeholder="Enter your details"
            onChange={handleInputChange}
            required
            rows="4"
          />
        </Form.Group>
        
        <Form className="flexColumn" style={{marginBottom: "10px"}}>
              {['Risk', 'Volatility'].map((type) => (  
                <div key={`inline-${type}`} 
                    className="flexRow" 
                    onChange={handleInputChange}
                    required>
                  <p className={(type === "Risk" ? "marginRight" : "")}>{type}:</p>
                  {['High', 'Medium', 'Low'].map((item)=>(
                      <Form.Check 
                      style={{marginLeft: "30px", fontSize: "14px"}}
                      label={item}
                      name={type.toLowerCase()}
                      value={item}
                      type={"radio"}
                      id={`inline-${item}-1`}
                    />
                  ))}
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
                    className={"input-control form-control-sm font11"}
                    style={{width: "160px"}}
                    type="number"
                    name={item}
                    value={crypto[key]}
                    min="0"
                    max="100"
                    defaultValue=""
                    placeholder="Enter the weight"
                    oninput="validity.valid||(value='')"
                    onChange={(event) =>
                      event.target.value < 0
                          ? (event.target.value = "")
                          : handleInputChangeCrypto(event)
                  }
                    />
                </td>
               </tr> 
            ))}
          </tbody>
          <thead>
            <tr>
              <th></th>
              <th 
                className={(total !== 100 ? "redColor" : total === 100? "greenColor":"redColor")}
                style={{width:"320px"}}>Total weight: {total}% out of 100%
              </th>
            </tr>
          </thead>
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
