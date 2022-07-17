import React from "react";
import ViewButton from "../Buttons/viewButton";
import FreeIcon from "../../assets/svg/Services/FreeIcon";

const BasketBox = ({ 
  risk, 
  basketName, 
  overview, 
  author, 
  volatility,
  handleDetailBox,
  id,
  subscriptionFee,
}) => {
    
  return (
      <div className="whiteBg radius8 shadow h-10 flexBasket pointer basketHover" onClick={() => handleDetailBox(id)} style={{margin: "10px"}}>
        <div className="flexHead">
          <div className="flexSpaceNull">
          <h6 className="extraBold flexStart pointer">
          {basketName.length > 23 ?
              `${basketName.substring(0, 23)}...` : basketName
          }
          </h6>
            {subscriptionFee==="0"?<FreeIcon />: ""}
          </div>
        </div>

        <p className="font12" style={{ height: "120px", padding: "25px 0" }}>
          {overview.length > 120 ?
              `${overview.substring(0, 120)}...` : overview
          }
        </p>
        
        <div className="flexRisk">
          <div className="flexSpaceNull">
            <p className="font13 extraBold">{author}</p>
          </div>
          
          <div className="flexSpaceNull" style={{padding: "12px 0 0"}}>
            <p style={{width: "135px"}} className={'flexCenter tag  radius6 font11 extraBold '+ (risk==="High"? "redBg" : risk==="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
            <p style={{width: "135px"}} className={'flexCenter tag  radius6 font11 extraBold '+ (volatility==="High"? "redBg" : volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
          </div>
        </div>
        <div className="flexButton">
          <div className="flexCenter">
              <div style={{ width: "120px" }}>
                <ViewButton title="View Basket" action={() => handleDetailBox(id)}/>
              </div>
          </div>
        </div>
      </div>

    );
}

export default BasketBox;