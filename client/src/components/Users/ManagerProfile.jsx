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
          // Setting baskets id fields to view Baskets
          response.data.createdBaskets.map((basket) => (
            basket.id = basket._id
            ))
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
      console.log(response);
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
      <div className='flexWrapper60' style={{padding: '50px 20px 0 20px'}}>
        <h3 className="box font30 extraBold">Manager Profile</h3>
      </div>
      <div className="container"
        style={{
          display: "in-block",
          marginTop: "20px",
          marginBottom: "0px"
        }}>
        <div className="lightBg metricsBox borderRad ">
          <div className="flex">
            <div className="semiBold font25  flexColBig">
              {manager.name}
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
              
            </div>
            <div className=" flexCol">
              {manager.email}
            </div>
            <div className=" flexCol">
              x
            </div>
            <div className=" flexCol">
              y
            </div>

          </div>
        </div>
      </div>

      <div className='flexWrapper60' style={{padding: '20px 20px 0 20px'}}>
            <h3 className="box font25 extraBold">Baskets:</h3>
      </div>
      <div className="flexList container flexPro4">

      {!_.isEmpty(manager.createdBaskets) ? (
        manager.createdBaskets.map((basket) => (
          <AllBasket basket={basket} key={basket.id} handleDetailBox={handleDetailBox}/>
        ))
      ) : (
        <p>No matching results.</p>
      )}
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