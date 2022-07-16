import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom'
import axios from "axios";
import AllBasket from "../Discover/AllBasket";
import configOptions from "../../api/configOptions";
import {useNavigate}  from "react-router-dom";
import _ from 'lodash';

// Screens
function ManagerProfile() {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const token = localStorage.getItem("token")
    const managerId = useParams().id;
    const [manager, setManager] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
      fetchData();
      async function fetchData() {

        const response = await axios.get(`${baseUrl}/api/users/manager/${managerId}`);   // , { headers: { Authorization: "Bearer: " + token } }
        if (response.status) {
          console.log(response.data);
          setManager(response.data)
        } else {
          response.json().then((data)=>{
            console.log("bad request: ", data.message);
          })
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
    <div key={manager._id} className="container70 whiteBg shadow discoverPage flex flexColumn" >
      <div className='flexWrapper60' style={{padding: '20px 20px 0 20px'}}>
        <h3 className="box font30 extraBold">Manager Profile</h3>
      </div>
      <div className="container"
        style={{
          display: "in-block",
          marginTop: "50px",
          marginBottom: "0px"
        }}>
        <div className="lightBg metricsBox borderRad ">
          <div className="flex">
            <div className="semiBold font25  flexColBig">
              Manager Profile
            </div>
            <div className="greyColor flexCol">
              Email Address
            </div>
            <div className="greyColor flexCol">
              Number of Baskets
            </div>
            <div className="greyColor flexCol">
              Number of Subscribers
            </div>

          </div>
          <div className="flexRowGap ">
            <div className="greyColor flexColBig">
              Invest in baskets to see overview here
            </div>
            <div className=" flexCol">
              totalInvestmentAmount
            </div>
            <div className=" flexCol">
              subscriptionCount
            </div>
            <div className=" flexCol">
              currentBinanceBalance
            </div>

          </div>
        </div>
      </div>

      <div className='flexWrapper60' style={{padding: '20px 20px 0 20px'}}>
            <h3 className="box font25 extraBold">Baskets:</h3>
      </div>
      <div className="flexList container searchBasket flexPro4">

      {!_.isEmpty(manager.createdBaskets) ? (
        manager.createdBaskets.map((basket) => (
          <AllBasket basket={basket} key={basket.id} handleDetailBox={handleDetailBox}/>
        ))
      ) : (
        <p>No matching results.</p>
      )}
      </div>

      
      <div className="">
        <div className="flexWrapper70">

          <div className='borderBottom'>
            <Wrapper style={{ padding: "0 0 20px 0px"}}>
              <p className='box semiBold'>Detail</p>
              <p className='font13'>basket.details</p>
            </Wrapper>
          </div>

          <div className='borderBottom'>
            <Wrapper style={{ padding: "0 0 20px 0px"}}>
            <p className='box semiBold'>At a Glance</p>
            <div className='flexSpaceCenter' >
              <div className='flexWrapper60'>                          
                <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Cryptocurrencies</p>
                <p className='font13' style={{ padding: "0 0 7px 0px"}}>basket.cryptoNumber</p>                        
                <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Last rebalance</p>
                <p className='font13'>Jun.20, 2022</p>                       
              </div>                     
              <div className='flexWrapper30'>
                <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Rebalance frequency</p>
                <p className='font13' style={{ padding: "0 0 7px 0px"}}>three month</p>
                <p className='font13 semiBold' style={{ padding: "0 0 5px 0px"}}>Next rebalance</p>
                <p className='font13'>Sep.20, 2022</p>
              </div>
            </div>
            </Wrapper>                     
          </div>
        
          
        </div>
      </div>       
    </div>
    
  );
}
const Wrapper = styled.div`
width: 100%;
text-align: left;
padding: 20px 30px;
margin-top: 30px;
`;
export default ManagerProfile