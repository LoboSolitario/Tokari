import React from "react";
import styled from "styled-components";
// Components
import SingleBasket from "./SingleBasket";
import FullButton from "../Buttons/FullButton";


export default function Details() {
  return (
      <div className="lightBg" style={{padding: '50px 0 0'}}>
        <div className="container">
          {/* <div className="textCenter"> */}
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"> */}
              <SingleBasket
                basketName="All Weather Investing"
                overview="One investment for all market conditions. Works for everyone"
                risk="Medium"
                volatility="Low"
                owner="Adam Smith"
                subscriptionFee = '0'
                // action={() => alert("clicked")}
              />
            
         
        </div>
      </div>

  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;