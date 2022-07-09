import React from "react";
import { useNavigate } from 'react-router';
import styled from "styled-components";
import ViewButton from "../Buttons/viewButton";
import UnsubscribeButton from "../Buttons/UnsubscribeButton"
import MoreButton from "../Buttons/MoreButton" 

const PortfolioBasket = ({ 
  id, 
  overview,
  basketName, 
  risk, 
  volatility,
  handleRemoveBox,
  handleDetailBox
}) => {

  let navigate = useNavigate();
  
  return (
      <Wrapper className="whiteBg radius8 shadow basket">
        <div className="wrapper-header flexSpaceCenter">
          <h3 className="font18 extraBold">{basketName}
          </h3>
        </div>
        <p className="font12" style={{ height: "120px", padding: "25px 0" }}>
          {overview.length > 120 ?
              `${overview.substring(0, 120)}...` : overview
          }
        </p>
        <div className="flexSpaceNull">
          <p className={' tag  radius6 font11 extraBold '+ (risk==="High"? "redBg" : risk==="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
          <p className={' tag  radius6 font11 extraBold '+ (volatility==="High"? "redBg" : volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
        </div>
        <div className="row flexCenter flexSpaceNull">
            <div style={{ width: "100px", marginBottom: "10px"}}>
              <MoreButton title="View" action={() => handleDetailBox(id)}/>
            </div>
            <div style={{ width: "100px", marginBottom: "10px"}}>
              <ViewButton title="Edit" action={() => navigate(`editBasket/${id}`)}/>
            </div>
            <div style={{ width: "100px"}}>
              <UnsubscribeButton title="Delete"  action={() => handleRemoveBox(id)}/>
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