import React from "react";
import styled from "styled-components";
import ViewButton from "../Buttons/viewButton";


const SubscribedBasket = ({ 
  id, 
  basketName, 
  details, 
  risk, 
  author, 
  volatility,
  overview,
  subscriptionfFee,
  handleRemoveBox
}) => {
    
  return (
      <Wrapper className="whiteBg radius8 shadow basket">
        <div className="wrapper-header flexSpaceCenter">
          <h3 className="font20 extraBold">{basketName}
                </h3>
                <div style={{ width: "100px" }}>
                <ViewButton title="Delete"  action={() => handleRemoveBox(id)}/>
              </div>
        </div>
            
        <p className="font13" style={{ padding: "30px 0" }}>
          {details}
        </p>
        <div className="flexSpaceNull">
          <p className="font13 extraBold">{author}</p>
          {/* <p className="font13 greenColor extraBold">{free?"Free Access": ""}</p> */}
        </div>
        
        <div className="flexSpaceNull">
          <p className={' tag  radius6 font11 extraBold '+ (risk==="High"? "redBg" : risk==="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
          <p className={' tag  radius6 font11 extraBold '+ (volatility==="High"? "redBg" : volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
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

export default SubscribedBasket;