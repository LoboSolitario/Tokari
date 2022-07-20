import React from "react";
import ViewButton from "../Buttons/viewButton";
import FreeIcon from "../../assets/svg/Services/FreeIcon";

const BasketBox = ({ 
  basket,
  handleDetailBox,
 
}) => {
    
  return (
      <div className="whiteBg radius8 shadow h-10 flexBasket pointer basketHover" onClick={() => handleDetailBox(basket.id)} style={{margin: "10px"}}>
        <div className="flexHead">
          <div className="flexSpaceNull">
          <h5 className="extraBold flexStart pointer" style={{padding: "20px 0" }}>
          {basket.basketName.length > 23 ?
              `${basket.basketName.substring(0, 23)}...` : basket.basketName
          }
          </h5>
            {basket.subscriptionFee==="0"?<FreeIcon />: ""}
          </div>
        </div>

        <p className="font12" style={{ height: "120px", padding: "10px 0" }}>
          {basket.overview.length > 120 ?
              `${basket.overview.substring(0, 120)}...` : basket.overview
          }
        </p>
        
        <div className="flexRisk">
          <div className="flexSpaceNull">
            <p className="font13 extraBold greyColor">{basket.owner.name}</p>
          </div>
          
          <div className="flexSpaceNull" style={{padding: "12px 0 0"}}>
            <p style={{width: "135px"}} className={'flexCenter tag  radius6 font11 extraBold '+ (basket.risk==="High"? "redBg" : basket.risk==="Medium"? "orangeBg":"greenBg")}>Risk: {basket.risk}</p>
            <p style={{width: "135px"}} className={'flexCenter tag  radius6 font11 extraBold '+ (basket.volatility==="High"? "redBg" : basket.volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {basket.volatility}</p>
          </div>
        </div>
        <div className="flexButton">
          <div className="flexCenter">
              <div style={{ width: "120px" }}>
                <ViewButton title="View Basket" action={() => handleDetailBox(basket.id)}/>
              </div>
          </div>
        </div>
      </div>

    );
}

export default BasketBox;