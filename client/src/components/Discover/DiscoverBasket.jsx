import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import {useNavigate}  from "react-router-dom";
import styled from "styled-components";
import DiscoverContext from "../contexts/DiscoverContext";
import AllBasket from "./AllBasket";
import configOptions from '../../api/configOptions';
import _ from 'lodash';

export default function DiscoverBasket() {

  const { baskets, setBaskets, allBaskets, setAllBaskets } = useContext(DiscoverContext);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const auth =  localStorage.getItem("auth")
  const token = localStorage.getItem("token")
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const response = await axios.get(`${baseUrl}/api/baskets`);
      if (response.statusText === "OK") {
        let temp = [];
        response.data.map(item => {
          let obj = {
            "key": item._id,
            "id": item._id,
            "owner": item.owner,
            "basketName": item.basketName,
            "risk": item.risk,
            "volatility": item.volatility,
            "subscriptionFee": item.subscriptionFee,
            "overview": item.overview,
            "details": item.details,
            "cryptoNumber" : item.cryptoNumber
          }
          temp.push(obj);
        })
        setBaskets(temp);
        setAllBaskets(temp);
      }
    }
  }, []);

  const handleDetailBox = async (id) => {

    const headers = {
      "content-type": "application/json",
      "Authorization": "Bearer: " + token
    };

    const options = {
      json: true 
    };

    configOptions("GET", headers, options);
    const response = await fetch(`${baseUrl}/api/baskets/basket/${id}`, options);
    if(response.ok){
      response.json().then((data) => {
        navigate(`/basket/${id}`, {state:data});
      })
    }
    else{
      console.log(response.statusText);
    }  
  };


  return (
    <React.Fragment>

      <div className="flexListDiscover container searchBasket flexPro4" style={{ padding: "0 10px 40px 0" }} >

        {!_.isEmpty(baskets) ? (
          baskets.map((basket) => (
            <AllBasket basket={basket} key={basket.id} handleDetailBox={handleDetailBox}/>
          ))
        ) : (
          <p className="flexCenter" style={{padding: "100px 0"}}>No matching results.</p>
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

