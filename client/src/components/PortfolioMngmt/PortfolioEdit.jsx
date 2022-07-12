import React, { useContext, useState } from 'react';
import PortfolioForm from './PortfolioForm';
import { useNavigate, useParams } from 'react-router-dom';
import BasketContext from '../contexts/BasketContext';
import configOptions from '../../api/configOptions';

export default function PortfolioEdit  ({ history }){
    const { baskets, setBaskets } = useContext(BasketContext);
    const { id } = useParams();
    const basketToEdit = baskets.find((basket) => basket.id === id)
    const [errorMsg, setErrorMsg] = useState('');

    const baseUrl = process.env.REACT_APP_BASE_URL;  
    const token = localStorage.getItem("token");
    let navigate = useNavigate();
   
    const handleOnSubmit = async (basket) => {
        let errorMsgTemp;
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
        console.log('basketAlloc: ', basket.cryptoAlloc)
        configOptions("PUT", headers, options);  
        const response = await fetch(`${baseUrl}/api/baskets/editBasket/${id}`, options);

        if(response.ok){
          response.json().then((data) => {
            errorMsgTemp = "";
            setErrorMsg(errorMsgTemp);
            navigate('/portfoliomain');
            return data;
          })
        }
        else{
          response.json().then((data)=>{
            console.log("bad request: ", data.message);
            errorMsgTemp = "Your basket name is already taken. Please rename your basket⚠️"
            setErrorMsg(errorMsgTemp);
          })
        }  
    }
    return (
    <div>
        <PortfolioForm basket={basketToEdit} handleOnSubmit={handleOnSubmit}/>
        {errorMsg && <p style={{marginTop: "20px", marginBottom: "20px"}} className="errorMsg flexCenter">{errorMsg}</p>}
    </div>
  )
}


