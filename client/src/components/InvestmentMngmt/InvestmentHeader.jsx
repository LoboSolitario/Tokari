import React,  {useState} from 'react'
import { useNavigate } from 'react-router';
import { useEffect } from "react";
import axios from "axios";

export default function InvestmentHeader() {
  const [subscriptionCount, setsubscriptionCount] = useState([])
  const [totalInvestmentAmount, settotalInvestmentAmount] = useState([])
  const [currentBinanceBalance, setcurrentBinanceBalance] = useState([])
  const token = localStorage.getItem("token")
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    async function fetchData() {

      const response = await axios.get(`${baseUrl}/api/users/investorStats`, { headers: { Authorization: "Bearer: " + token } });
      if (response.statusText === "OK") {
        setsubscriptionCount(response.data.subscriptionCount)
        settotalInvestmentAmount(response.data.totalInvestmentAmount)
        setcurrentBinanceBalance(Number(response.data.currentBinanceBalance).toFixed(2))
      }
    }
  }, []);

  return (
    <div className="container"
      style={{
        display: "in-block",
        marginTop: "100px",
        marginBottom: "0px"
      }}>
      <div className="lightBg metricsBox borderRad ">
        <div className="flex">
          <div className="semiBold font25  flexColBig">
            Your Investments
          </div>
          <div className="greyColor flexCol">
            Current Investments
          </div>
          <div className="greyColor flexCol">
            Total Subscriptions
          </div>
          <div className="greyColor flexCol">
            Binance USD Balance
          </div>

        </div>
        <div className="flexRowGap ">
          <div className="greyColor flexColBig">
            Invest in baskets to see overview here
          </div>
          <div className=" flexCol">
            ${totalInvestmentAmount}
          </div>
          <div className=" flexCol">
            {subscriptionCount}
          </div>
          <div className=" flexCol">
            ${currentBinanceBalance}
          </div>

        </div>
      </div>
    </div>
  )
}

