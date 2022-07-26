import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import BasketContext from "../contexts/BasketContext";
import axios from "axios";

export default function PortfolioHeader() {
  let navigate = useNavigate();
  const token = localStorage.getItem("token")
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [subscriptionCount, setsubscriptionCount] = useState([])
  const [totalInvestmentAmount, settotalInvestmentAmount] = useState([])
  const [currentBinanceBalance, setcurrentBinanceBalance] = useState([])

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const response = await axios.get(`${baseUrl}/api/users/stats/manager/`, { headers: { Authorization: "Bearer: " + token } });
      if (response.statusText === "OK") {
        console.log("response: ", response.data)
        setsubscriptionCount(response.data.numberOfSubscriber)
        settotalInvestmentAmount(response.data.numberOfInvestor)
        setcurrentBinanceBalance(response.data.totalRevenue)
      } else{
        console.log("err", response.statusText)
      }
    }
  }, []);

  const handleOnClick = () => {
    navigate('createBasket')
  }

  return (

    <div className="container lightBg metricsBox borderRad flexSpaceCenter flexRow"
         style={{
          display: "in-block",
          marginBottom: "0px",
          height: "90px",
          marginTop: "100px", 
          paddingLeft: "30px",
          paddingRight: "20px",
        }}
      >

    <div className="flexCenter" >
        <div className="semiBold font20">Porfolio Management</div>
        <button style={{border: "none", background: "none"}} onClick={()=>{
          handleOnClick()
          }}>
              <FontAwesomeIcon className="font25 pointer purpleColor flexCenter plusButton" icon={faPlusCircle}/>
        </button>
      </div>

      <div className="greyColor flexColumn">
        <div>Total baskets:</div>
          <div>1</div>
        </div>

      <div className="greyColor flexColumn">
        <div>Total subscriptions:</div>
          <div>1</div>
        </div>
      </div>
  )
}

