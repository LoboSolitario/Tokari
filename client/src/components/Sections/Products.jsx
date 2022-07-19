import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import configOptions from '../../api/configOptions';
import _ from 'lodash';
// Components
import BasketBox from "../Elements/BasketBox";
import FullButton from "../Buttons/FullButton";
import {useNavigate}  from "react-router-dom";

export default function Products() {

  let navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;  
  const [baskets, setBasket] = useState();
  const token = localStorage.getItem("token")

  useEffect( ()=>{
    fetchData();
    async function fetchData (){
        const response = await axios.get(`${baseUrl}/api/users/landingPageBaskets`);
        if(response.statusText === "OK"){
            let temp = [];
            response.data.map(item =>{
                let obj = {
                    "id": item._id,
                    "author": item.owner,
                    "basketName": item.basketName,
                    "risk": item.risk,
                    "volatility": item.volatility,
                    "subscriptionFee": item.subscriptionFee,
                    "overview": item.overview,
                    "details": item.details,
                    "isFreeBasket": item.isFreeBasket,
                    "cryptoAlloc": item.cryptoAlloc,
                }
                temp.push(obj);  
                return obj           
            })
            setBasket(temp);
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
    <Wrapper id="products">
      <div className="lightBg" style={{padding: '20px 0 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Products</h1>
            <p className="font13">
            Choose any of our carefully crafted, efficient and low-fee baskets.
            </p>
          </HeaderInfo>

        <div className="flexList">
             {!_.isEmpty(baskets) ? (
                baskets.map((basket)=>(
                    <BasketBox key={basket.id} {...basket} handleDetailBox={handleDetailBox}/>
                ))
             ) : (
                <p>Currently, there is no basket.</p>
             )}
        </div>

          <div className="row flexCenter">
            <div style={{ margin: "20px 0", width: "200px" }}>
              <FullButton title="Discover" action={() => navigate("/discover")} />
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;