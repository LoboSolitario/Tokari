import React from "react";
import styled from "styled-components";
// import UnsubscribeButton from "../Buttons/UnsubscribeButton"
import ViewBasketButton from "../Buttons/ViewBasketButton"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const InvestmentBasket = ({
  basket,
  handleRemoveBox,
  handleDetailBox
}) => {

  let navigate = useNavigate();

  const ownerClicked = async () => {
    navigate(`/manager/${basket.owner._id}`);
  }

  return (
    <Wrapper className="whiteBg radius8 shadow basket">
      <div className="wrapper-header flexSpaceCenter">
        <h3 className="font20 extraBold">{basket.basketName}</h3>
      </div>
      <div className="flexSpaceNull">
        <p className="font13 extraBold greyColor" style={{ padding: "5px 0 0 0" }}> by <span className="fa-circle-info extraBold purpleColor" onClick={ownerClicked} style={{cursor: "pointer"}}>{basket.owner.name} <FontAwesomeIcon icon={faCircleInfo} /></span></p>
      </div>

      <p className="font13" style={{ padding: "30px 0" }}>
        {basket.overview}
      </p>
      <div className="flexSpaceNull">
        <p className="font13 extraBold">{basket.author}</p>
        {/* <p className="font13 greenColor extraBold">{free?"Free Access": ""}</p> */}
      </div>

      <div className="flexSpaceNull">
        <p className={' tag  radius6 font11 extraBold ' + (basket.risk === "High" ? "redBg" : basket.risk === "Medium" ? "orangeBg" : "greenBg")}>Risk: {basket.risk}</p>
        <p className={' tag  radius6 font11 extraBold ' + (basket.volatility === "High" ? "redBg" : basket.volatility === "Medium" ? "orangeBg" : "greenBg")}>Volatility: {basket.volatility}</p>
      </div>
      <div className=" flexCenter">
        <div style={{ width: "100px" }}>
          <ViewBasketButton title="View Basket" action={() => handleDetailBox(basket.id)} />
        </div> <div style={{ width: "100px" }}>
          {/* <UnsubscribeButton title="Unsubscribe" action={() => handleRemoveBox(basket.id)} /> */}
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

export default InvestmentBasket;