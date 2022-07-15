import React from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom'
import axios from "axios";

// Screens
function ManagerProfile() {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const managerId = useParams().id;

    const deneme = async () => {
        await axios({
            method: 'get',
            url: `${baseUrl}/api/users/manager/${managerId}`
            // headers: {
            //   "Content-Type": "application/json"
            // }
        })
        .then(function (response) {
            console.log("heree2");
          return response.data;
        })
        .catch(err => {
            console.log("heree3");
            alert("ERROR:", err.response.data)
        })
        }

    // const response = await axios.get(`${baseUrl}/users/manager/${managerId}`);

    // const headers = {
    //     "content-type": "application/json",
    //     "Authorization": "Bearer: " + token
    //   };
  
    //   const options = {
    //     json: true 
    //   };
  
    //   configOptions("GET", headers, options);
    //   const response = await fetch(`${baseUrl}/api/baskets/basket/${id}`, options);
    //   if(response.ok){
    //     response.json().then((data) => {
    //       navigate(`/basket/${id}`, {state:data});
    //     })
    //   }
    //   else{
    //     console.log(response.statusText);
    //   }

    

  return (
    <Wrapper className="whiteBg radius8 shadow basket">
        <p>deneme</p>
        {deneme()}
        {/* {console.log("heyyy")} */}
        {/* {console.log(user)} */}
        {/* <div className="wrapper-header flexSpaceCenter" style={{ padding: "0 0 5px 0" }}>
        <h3 className="font20 extraBold">
            {basket.basketName}
        </h3>
        <p className="font13 greenColor extraBold">{basket.subscriptionFee === 0 ? "Free Access" : ""}</p>
        </div>

        <p className="font13" style={{ padding: "5px 0" }}>
        {basket.overview}

        </p>
        <p className="font11 greyColor" style={{ padding: "0 0 5px 0" }}>Managed by <span onClick={ownerClicked} style={{cursor: "pointer"}}>{basket.owner.name}</span></p>
        <p className="font11">Number of cryptocurrencies:  {basket.cryptoNumber}</p>


        <div className="flexSpaceNull">
        <p className={' tag  radius6 font11 extraBold ' + (basket.risk === "High" ? "redBg" : basket.risk === "Medium" ? "orangeBg" : "greenBg")}>Risk: {basket.risk}</p>
        <p className={' tag  radius6 font11 extraBold ' + (basket.volatility === "High" ? "redBg" : basket.volatility === "Medium" ? "orangeBg" : "greenBg")}>Volatility: {basket.volatility}</p>
        </div>
        <div className="flexRight">
        <div style={{ width: "100px"}}>
            <ViewButton title="View Basket"  action={() => handleDetailBox(basket.id)}/>
        </div>
        </div> */}
  </Wrapper>
    
  );
}
const Wrapper = styled.div`
width: 100%;
text-align: left;
padding: 20px 30px;
margin-top: 30px;
`;
export default ManagerProfile