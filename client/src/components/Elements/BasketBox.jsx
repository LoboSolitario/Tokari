import React from "react";
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
      <div className="whiteBg radius8 shadow h-10 flexBasket">
        <div className="flexHead">
          <div className="flexSpaceNull">
            <h3 className="font20 extraBold">{basketName}</h3>
            {subscriptionFee===0?<FreeIcon />: ""}
          </div>
        </div>
        <div className="flexOverview font13">
          <p>{overview}</p>
        </div>
        
        <div className="flexRisk">
          <div className="flexSpaceNull">
            <p className="font13 extraBold">{owner}</p>
          </div>
          
          <div className="flexSpaceNull" style={{padding: "12px 0 0"}}>
            <p className={' tag  radius6 font11 extraBold '+ (risk==="High"? "redBg" : risk==="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
            <p className={' tag  radius6 font11 extraBold '+ (volatility==="High"? "redBg" : volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
          </div>
        </div>
        <div className="flexButton">
          <div className="row flexHorizontalCenter">
              <div style={{ width: "150px" }}>
                <ViewButton title="View Basket" action={() => alert("clicked")} />
              </div>
          </div>
        </div>
      </div>

    );
}

export default BasketBox;