import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";

const AllBasket = ({ 
    id, 
    basketName, 
    details, 
    risk, 
    author, 
    volatility,
    overview,
    subscriptionFee
}) => {
    return (
        <Wrapper className="whiteBg radius8 shadow basket">
          <h3 className="font20 extraBold">{basketName}</h3>
          <p className="font13" style={{ padding: "30px 0" }}>
            {overview}
          </p>
          <div className="flexSpaceNull">
            <p className="font13 extraBold">{author}</p>
            {/* <p className="font13 greenColor extraBold">{free?"Free Access": ""}</p> */}
          </div>

          <p className="font13 extraBold">{subscriptionFee}</p>
          
          <div className="flexSpaceNull">
            <p className={' tag  radius6 font11 extraBold '+ (risk=="High"? "redBg" : risk=="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
            <p className={' tag  radius6 font11 extraBold '+ (volatility=="High"? "redBg" : volatility=="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
          </div>

          
          {/* <div className="row flexHorizontalCenter">
              <div style={{ width: "150px" }}>
                <ViewButton title="View Basket" action={() => alert("clicked")} />
              </div>
          </div> */}
        </Wrapper>
  
    );
}

const Wrapper = styled.div`
width: 90%;
text-align: left;
padding: 20px 30px;
margin-top: 30px;
`;
  

export default AllBasket;