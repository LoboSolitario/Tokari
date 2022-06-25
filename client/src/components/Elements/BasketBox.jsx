import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";
import ViewButton from "../Buttons/viewButton";
const BasketBox = ({ 
  risk, 
  title, 
  text, 
  author, 
  volatility,
  free}) => {
    
  return (
      <Wrapper className="whiteBg radius8 shadow basket">
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <div className="flexSpaceNull">
          <p className="font13 extraBold">{author}</p>
          <p className="font13 greenColor extraBold">{free?"Free Access": ""}</p>
        </div>
        
        <div className="flexSpaceNull">
          <p className={' tag  radius6 font11 extraBold '+ (risk=="High"? "redBg" : risk=="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
          <p className={' tag  radius6 font11 extraBold '+ (volatility=="High"? "redBg" : volatility=="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
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