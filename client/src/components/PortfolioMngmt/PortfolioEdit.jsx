import React, { useContext } from 'react';
import PortfolioForm from './PortfolioForm';
import { useNavigate, useParams } from 'react-router-dom';
import BasketContext from '../contexts/BasketContext';
import configOptions from '../../api/configOptions';

export default function PortfolioEdit  ({ history }){
    const { baskets, setBaskets } = useContext(BasketContext);
    const { id } = useParams();
    const basketToEdit = baskets.find((basket) => basket.id === id)
 
    const baseUrl = process.env.REACT_APP_BASE_URL;  
    const token = localStorage.getItem("token");
    let navigate = useNavigate();

    const handleOnSubmit = async (basket) => {
        const headers = {
            "content-type": "application/json",
            "Authorization": "Bearer: " + token
            };
            
        console.log("basket: ", basket, "id: ", id)

        const options = {
        body: JSON.stringify({
                "basketName": basket.basketName,
                "overview": basket.overview, 
                "details": basket.details,
                "volatility": basket.volatility, 
                "risk": basket.risk,  
                "rebalanceFee": "12312",
                "subscriptionFee": basket.subscriptionFee,
                "cryptoAlloc": basket.cryptoAlloc
        }),
        json: true 
        };
        console.log('basketAlloc: ', basket.cryptoAlloc)
        configOptions("PUT", headers, options);  
        const response = await fetch(`${baseUrl}/api/baskets/editBasket/${id}`, options);

        if(response.ok){
          response.json().then((data) => {
            navigate('/portfoliomain');
            return data;
          })
        }
        else{
           console.log(response.statusText);
        }  
    }
    return (
    <div>
        <PortfolioForm basket={basketToEdit} handleOnSubmit={handleOnSubmit}/>
    </div>
  )
}


