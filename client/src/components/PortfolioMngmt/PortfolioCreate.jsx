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

 
        const headers = {
          "content-type": "application/json",
          "Authorization": "Bearer: " + token
        };
        
        const options = {
          body: JSON.stringify({
                "basketName": basket.basketName,
                "overview": basket.overview, 
                "details": basket.details,
                "volatility": basket.volatility, 
                "risk": basket.risk,  
                "rebalanceFee": "12312",
                "subscriptionFee": basket.subscriptionFee,
                "cryptoAlloc": basket.cryptoAlloc.filter(allocation => allocation.weight && allocation.weight > 0),
                "cryptoNumber": basket.cryptoAlloc.filter(allocation => allocation.weight && allocation.weight > 0).length
          }),
          json: true 
        };

        configOptions("POST", headers, options);  
        const response = await fetch(`${baseUrl}/api/baskets/createBasket`, options);
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