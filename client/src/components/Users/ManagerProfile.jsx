import React, { useEffect, useState } from 'react';
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
    const [numberOfSubscriber, setNumberOfSubscriber] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      fetchData();
      async function fetchData() {

        const response = await axios.get(`${baseUrl}/api/users/manager/${managerId}`);
        if (response.status) {
          // Counting the number of Subscribers
          response.data.createdBaskets.forEach(basket => {
            setNumberOfSubscriber(numberOfSubscriber + basket.subscribers.length)
          })
          // Setting baskets id fields to view Baskets
          response.data.createdBaskets.map((basket) => (
            basket.id = basket._id
            ))
          response.data.numberOfCreatedBaskets = response.data.createdBaskets.length;
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
      
      <div className="lightBg metricsBox borderRad" style={{marginTop: "70px"}}>
          <div className="flexRow flexNullCenter flexCenterAndSpaced">
            <div className="semiBold font20">
              {manager.name}
            </div>
            <div className="greyColor flexColumn">
              <div>Total Baskets</div>
              <div style={{color: "black", paddingTop: "10px"}}>
                {manager.numberOfCreatedBaskets}
              </div>
            </div>

            <div className="greyColor flexColumn">
                <div>Total Subscribers</div> 
                <div style={{color: "black", paddingTop: "10px"}}>
                  {numberOfSubscriber}  
                </div>
            </div>

            <div className="greyColor flexColumn">
                <div>Contact</div> 
                <div style={{color: "black", paddingTop: "10px"}}>
                  {manager.email}  
                </div>
            </div>
          </div>
        </div>

      <div className='flexWrapper60' style={{padding: '20px 20px 0 35px'}}>
            <h3 className="box font25 extraBold">Basket Offerings</h3>
      </div>
      <div className="flexListDiscover container flexPro4"  style={{padding: '20px 100px 100px'}}>

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
export default ManagerProfile