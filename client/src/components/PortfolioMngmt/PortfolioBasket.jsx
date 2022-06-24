import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";

const PortfolioBasket = ({ 
  id, 
  basketName, 
  details, 
  risk, 
  author, 
  volatility,
  overview,
  subscriptionfFee
}) => {
    
  return (
      <Wrapper className="whiteBg radius8 shadow basket">
        <h3 className="font20 extraBold">{basketName}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {overview}
        </p>
  
        <p className="font13" style={{ padding: "30px 0" }}>
          {risk}
        </p>
  
        {/* <p className="font13 extraBold">{author}</p> */}
        <p className="font13 extraBold">{risk}</p>
        <div className="flex">
          <p className="tag coralBg radius6 font11 extraBold">{volatility}</p>
        </div>
        {/* <p className="font13 extraBold">{details}</p> */}
        <p className="font13 extraBold">{subscriptionfFee}</p>
        <div className="flex">
          <p className="tag coralBg radius6 font11 extraBold">{id}</p>
        </div>
        <div className="row flexRight">
            <div style={{ width: "120px" }}>
              <FullButton title="Edit" action={() => alert("clicked")} />
            </div>
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 350px;
  text-align: left;
  padding: 20px 30px;
  margin: 10px;
`;

export default PortfolioBasket;