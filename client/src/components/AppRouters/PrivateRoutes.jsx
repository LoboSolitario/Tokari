import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import configOptions from '../../api/configOptions';

const PrivateRoutes = async () => {
  
    const auth =  localStorage.getItem("auth")
    const token = localStorage.getItem("token")
    const baseUrl = process.env.REACT_APP_BASE_URL;  
    let role = "";
    
    const options = {
        withCredentials: true,
        json: true 
        };

    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    };

    configOptions("GET", headers, options);

    const response = await fetch(`${baseUrl}/api/users/userDetails`, options);
    // console.log(response);
    if(response.ok){
    response.json().then(data => {
        console.log("data: ", data.role);
        role = data.role
    });
    options.body = JSON.stringify({});
    }


    return(
        auth ? <Outlet/> : <Navigate to="/portfoliomain"/>
    )
}

export default PrivateRoutes