import axios from "axios";
import React, {useContext} from "react";
import { useEffect } from "react";
import styled from "styled-components";
import BasketContext from "../contexts/BasketContext";
import PortfolioBasket from "./PortfolioBasket";
import _ from 'lodash';

export default function PortfolioHome() {

  const { baskets, setBaskets } = useContext(BasketContext);
  
  const auth =  localStorage.getItem("auth")
  const token = localStorage.getItem("token")
  const baseUrl = process.env.REACT_APP_BASE_URL;  

  useEffect( ()=>{
    fetchData();
    async function fetchData (){
        const response = await axios.get(`${baseUrl}/api/baskets/userBaskets`, { headers: { Authorization: "Bearer: " + token } });
        if(response.statusText === "OK"){
            // console.log(response.data);
            let temp = [];
            response.data.map(item =>{
                let obj = {
                    "id": item.id,
                    "author": item.author,
                    "basketName": item.basketName,
                    "risk": item.risk,
                    "volatility": item.volatility,
                    "subscriptionFee": item.subscriptionFee,
                    "overview": item.overview,
                    "details": item.details
                }
                temp.push(obj);             
            })
              setBaskets(temp);
              // console.log("temp: ", temp);
              // console.log("baskets: ", baskets);
         }
    }
  }, []);

  return (
    <React.Fragment>
        <div className="flexList container">
             {!_.isEmpty(baskets) ? (
                baskets.map((basket)=>(
                    <PortfolioBasket {...basket} />
                ))
             ) : (
                <p>"Currently, there is no basket."</p>
             )}
        </div>
    </React.Fragment>
  )
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

