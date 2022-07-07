import React from "react";
import { useNavigate } from 'react-router';
import styled from "styled-components";
import ViewButton from "../Buttons/viewButton";


const PortfolioBasket = ({ 
  id, 
  overview,
  basketName, 
  details, 
  risk, 
  author, 
  volatility,
  handleRemoveBox
}) => {

  let navigate = useNavigate();
  
  return (
      <Wrapper className="whiteBg radius8 shadow basket">
        <div className="wrapper-header flexSpaceCenter">
          <h3 className="font20 extraBold">{basketName}
          </h3>
          <div style={{ width: "40px" }}>
            <ViewButton title="x"  action={() => handleRemoveBox(id)}/>
          </div>
        </div>
            
        <p className="font13" style={{ padding: "30px 0" }}>
          {overview}
        </p>
        <div className="flexSpaceNull">
          <p className="font13 extraBold">{author}</p>
        </div>
        
        <div className="flexSpaceNull">
          <p className={' tag  radius6 font11 extraBold '+ (risk==="High"? "redBg" : risk==="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
          <p className={' tag  radius6 font11 extraBold '+ (volatility==="High"? "redBg" : volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
        </div>

        <div className="row flexHorizontalCenter">
            <div style={{ width: "100px" }}>
              <ViewButton title="Edit" action={() => navigate(`editBasket/${id}`)}/>
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