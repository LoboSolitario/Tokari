import axios from "axios";
import React, {useContext} from "react";
import { useEffect } from "react";
import styled from "styled-components";
import DiscoverContext from "../contexts/DiscoverContext";
import AllBasket from "./AllBasket";
import _ from 'lodash';

export default function DiscoverBasket() {

  const { baskets, setBaskets } = useContext(DiscoverContext);
  const baseUrl = process.env.REACT_APP_BASE_URL;  

  useEffect( ()=>{
    fetchData();
    async function fetchData (){
        const response = await axios.get(`${baseUrl}/api/baskets`);
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
         }
    }
  }, []);

  return (
    <React.Fragment>
        <div className="flexList container" style={{minHeight: "70vh"}}>
             {!_.isEmpty(baskets) ? (
                baskets.map((basket)=>(
                    <AllBasket {...basket} />
                ))
             ) : (
                <p>No matching results.</p>
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

