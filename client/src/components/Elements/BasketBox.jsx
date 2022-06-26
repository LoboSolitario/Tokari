import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import ViewButton from "../Buttons/viewButton";
import FreeIcon from "../../assets/svg/Services/FreeIcon";

const BasketBox = ({ 
  risk, 
  basketName, 
  overview, 
  owner, 
  volatility,
  subscriptionFee}) => {
    
  return (
      <Wrapper className="whiteBg radius8 shadow basket">
        <div className="flexSpaceNull">
          <h3 className="font20 extraBold">{basketName}</h3>
          {subscriptionFee==0?<FreeIcon />: ""}
        </div>
        
        <p className="font13" style={{ padding: "30px 0" }}>
          {overview}
        </p>
        <div className="flexSpaceNull">
          <p className="font13 extraBold">{owner}</p>
        </div>
        
        <div className="flexSpaceNull">
          <p className={' tag  radius6 font11 extraBold '+ (risk==="High"? "redBg" : risk==="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
          <p className={' tag  radius6 font11 extraBold '+ (volatility==="High"? "redBg" : volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
        </div>

        <div className="row flexHorizontalCenter">
            <div style={{ width: "150px" }}>
              <ViewButton title="View Basket" action={() => alert("clicked")} />
            </div>
        </div>
      </Wrapper>

    );
}

const Wrapper = styled.div`
  width: 350px;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;

export default BasketBox;