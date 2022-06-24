import React, { useContext } from 'react';
import PortfolioForm from "./PortfolioForm"
import BasketContext from "../contexts/BasketContext";
import configOptions from '../../api/configOptions';
import axios from 'axios';

const PortfolioCreate = () => {
    
    const { baskets, setBaskets } = useContext(BasketContext);
    const baseUrl = process.env.REACT_APP_BASE_URL;  
    const token = localStorage.getItem("token");
    console.log("token: ",token)
    const handleOnSubmit = async (basket) => {
     
        const options = {
            body: JSON.stringify({
                "basketName": "basket 1", 
                "overview": "1", 
                "details":"2",
                "status": true,
                "volatility": "4", 
                "risk": "5",  
                "rebalanceFee": "6",
                "subscriptionFee": "7"
            // "cryptoAlloc": "[[cryptoName: bitcoin, weight:20 ], [cryptoName: bitcoin, weight:20 ]]" 
          })
        };
        const headers = {
          "Content-Type": "application/json",
          "headers": { Authorization: "Bearer: " + token } 
        };

        configOptions("POST", headers, options);  

        const response = await fetch(`${baseUrl}/api/baskets/createBasket`, options);
        console.log(response);
        if(response.ok){
          response.json().then(data => {
            console.log("data: ", data.token);
            localStorage.setItem("token", data.token);
            localStorage.setItem("auth", "true");
          })
        }
        else{

        }  
    }

    return(
        <React.Fragment>
            <PortfolioForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    );
}

export default PortfolioCreate;