import React, { useContext } from 'react';
import PortfolioForm from "./PortfolioForm"
import BasketContext from "../contexts/BasketContext";
import configOptions from '../../api/configOptions';
import { useNavigate } from 'react-router';

const PortfolioCreate = () => {
    
    let navigate = useNavigate();
    const { baskets, setBaskets } = useContext(BasketContext);
    const baseUrl = process.env.REACT_APP_BASE_URL;  
    const token = localStorage.getItem("token");
   
    const handleOnSubmit = async (basket) => {
        setBaskets([basket,...baskets]);
        
        const options = {
          body: JSON.stringify({
                "basketName": basket.basketName,
                "overview": basket.overview, 
                "details": basket.details,
                "volatility": basket.volatility, 
                "risk": basket.risk,  
                "rebalanceFee": basket.rebalanceFee,
                "subscriptionFee": basket.subscriptionFee,
                "status": true
                // "cryptoAlloc": "[[cryptoName: bitcoin, weight:20 ], [cryptoName: bitcoin, weight:20 ]]" 
          }),
          json: true 
        };
        
        // note that optionsDebug is created only for debugging purposes
        // const optionsDebug = {
        //   body: JSON.stringify({
        //         "basketName": "new" + Date.now(), 
        //         "overview": "new123", 
        //         "details": "new123",
        //         "status": true,
        //         "volatility": "new123", 
        //         "risk": "new123",  
        //         "rebalanceFee": "new123",
        //         "subscriptionFee": 5
        //   }),
        //   json: true 
        // };
        // configOptions("POST", headers, optionsDebug); 

        const headers = {
          "content-type": "application/json",
          "Authorization": "Bearer: " + token
        };

        configOptions("POST", headers, options);  

        const response = await fetch(`${baseUrl}/api/baskets/createBasket`, options);
        console.log(response);
        if(response.ok){
          response.json().then(() => {
            navigate('/portfoliomain')
          })
        }
        else{
          console.log(response.statusText);
        }  
    }

    return(
        <React.Fragment>
            <PortfolioForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    );
}

export default PortfolioCreate;