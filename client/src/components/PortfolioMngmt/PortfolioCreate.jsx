import React, { useContext, useState} from 'react';
import PortfolioForm from "./PortfolioForm"
import BasketContext from "../contexts/BasketContext";
import configOptions from '../../api/configOptions';
import { useNavigate } from 'react-router';

const PortfolioCreate = () => {
    
    let navigate = useNavigate();
    const { baskets, setBaskets } = useContext(BasketContext);
    const baseUrl = process.env.REACT_APP_BASE_URL;  
    const token = localStorage.getItem("token");
    const [errorMsg, setErrorMsg] = useState('');
   
    const handleOnSubmit = async (basket) => {
        setBaskets([basket,...baskets]);
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
                "isFreeBasket": basket.isFreeBasket,
                "cryptoAlloc":  basket.cryptoAlloc.filter(allocation => allocation.weight && allocation.weight > 0),
                "cryptoNumber": basket.cryptoAlloc.filter(allocation => allocation.weight && allocation.weight > 0).length
          }),
          json: true 
        };

        configOptions("POST", headers, options);  
        const response = await fetch(`${baseUrl}/api/baskets/createBasket`, options);
        if(response.ok){
          response.json().then(() => {
            errorMsgTemp = "";
            setErrorMsg(errorMsgTemp);
            navigate('/portfoliomain');
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

    return(
        <React.Fragment>
            <PortfolioForm handleOnSubmit={handleOnSubmit}/>
            {errorMsg && <p style={{marginTop: "20px", marginBottom: "20px"}} className="errorMsg flexCenter">{errorMsg}</p>}   
        </React.Fragment>
    );
}

export default PortfolioCreate;