import React from "react";
import ViewButton from "../Buttons/viewButton";
import FreeIcon from "../../assets/svg/Services/FreeIcon";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const BasketBox = ({
  basket,
  handleDetailBox,

}) => {

  let navigate = useNavigate();

  const ownerClicked = async () => {
    navigate(`/manager/${basket.owner._id}`);
  }

  return (
    <div className="whiteBg radius8 shadow h-10 flexBasket basketHover" style={{ margin: "10px" }}>
      <div className="flexHead">
        <div className="flexSpaceNull">
          <h5 className="extraBold flexStart pointer" style={{ padding: "20px 0 0 0" }}>
            {basket.basketName.length > 23 ?
              `${basket.basketName.substring(0, 23)}...` : basket.basketName
            }
          </h5>
          {basket.subscriptionFee === "0" ? <FreeIcon /> : ""}
        </div>
        <div className="flexSpaceNull">
          <p className="font13 extraBold greyColor" style={{ padding: "5px 0 0 0" }}> by <span className="fa-circle-info extraBold purpleColor" onClick={ownerClicked} style={{cursor: "pointer"}}>{basket.owner.name} <FontAwesomeIcon icon={faCircleInfo} /></span></p>
        </div>
      </div>

      <p className="font12" style={{ height: "120px", padding: "20px 0 0 0" }}>
        {basket.overview.length > 120 ?
          `${basket.overview.substring(0, 120)}...` : basket.overview
        }
      </p>

      <div className="flexRisk">
        

        <div className="flexSpaceNull" style={{ padding: "12px 0 0" }}>
          <p style={{ width: "135px" }} className={'flexCenter tag  radius6 font11 extraBold ' + (basket.risk === "High" ? "redBg" : basket.risk === "Medium" ? "orangeBg" : "greenBg")}>Risk: {basket.risk}</p>
          <p style={{ width: "135px" }} className={'flexCenter tag  radius6 font11 extraBold ' + (basket.volatility === "High" ? "redBg" : basket.volatility === "Medium" ? "orangeBg" : "greenBg")}>Volatility: {basket.volatility}</p>
        </div>
      </div>
      <div className="flexButton">
        <div className="flexCenter">
          <div style={{ width: "120px" }}>
            <ViewButton title="View Basket" action={() => handleDetailBox(basket.id)} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default BasketBox;