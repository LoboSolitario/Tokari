import React from 'react'
import { useNavigate } from 'react-router';


export default function InvestmentHeader() {
  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate('createBasket')
  }

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
            Current Subscriptions
          </div>
          <div className="greyColor flexCol">
            Returns
          </div>

        </div>
        <div className="flexRowGap ">
          <div className="greyColor flexColBig">
            Invest in baskets to see overview here
          </div>
          <div className=" flexCol">
            _
          </div>
          <div className="greyColor flexCol">
            _
          </div>
          <div className="greyColor flexCol">
            _
          </div>

        </div>
      </div>
    </div>
  )
}

