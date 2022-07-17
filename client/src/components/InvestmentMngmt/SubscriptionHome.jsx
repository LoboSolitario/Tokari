import axios from "axios";
import React, {useContext} from "react";
import { useEffect } from "react";
import SubscribedBasketContext from "../contexts/SubscribedBasketContext";
import SubscribedBasket from "./SubscribedBasket";
import configOptions from '../../api/configOptions';
import _ from 'lodash';
import {useNavigate, NavLink}  from "react-router-dom";

export default function SubscriptionHome() {

  const { baskets, setBaskets } = useContext(SubscribedBasketContext);
  
  const auth =  localStorage.getItem("auth")
  const token = localStorage.getItem("token")
  const baseUrl = process.env.REACT_APP_BASE_URL;  
  const navigate = useNavigate();


  useEffect( ()=>{
    fetchData();
    async function fetchData (){
      
        const response = await axios.get(`${baseUrl}/api/baskets/userSubscribedBaskets`, { headers: { Authorization: "Bearer: " + token } });
        if(response.statusText === "OK"){
            let temp = [];
            response.data.map(item =>{
                let obj = {
                    "id": item._id,
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

  const handleRemoveBox = async (id) => {

    const headers = {
      "content-type": "application/json",
      "Authorization": "Bearer: " + token
    };

    const options = {
      json: true 
    };

    configOptions("DELETE", headers, options);

    const response = await fetch(`${baseUrl}/api/baskets/unsubscribeBasket/${id}`, options);
    if(response.ok){
      response.json().then(() => {
        setBaskets(baskets.filter((basket) => basket.id !== id));
      })
    }
    else{
      console.log(response.statusText);
    }  
  };

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
        <div className="flexList container" style={{minHeight: "72vh"}}>
             {!_.isEmpty(baskets) ? (
                baskets.map((basket)=>(
                    <SubscribedBasket key={basket.id} basket={basket} handleRemoveBox={handleRemoveBox} handleDetailBox={handleDetailBox} />
                ))
             ) : (
                <p>You have not yet subscribed to a basket</p>
             )}
        </div>
    </React.Fragment>
  )
}

