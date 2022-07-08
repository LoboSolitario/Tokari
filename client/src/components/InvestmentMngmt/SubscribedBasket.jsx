import React from "react";
import styled from "styled-components";
import ViewButton from "../Buttons/viewButton";
import UnsubscribeButton from "../Buttons/UnsubscribeButton"
import ViewBasketButton from "../Buttons/ViewBasketButton"
const SubscribedBasket = ({
  basket,
  handleRemoveBox,
  handleDetailBox
}) => {

  return (
    <Wrapper className="whiteBg radius8 shadow basket">
      <div className="wrapper-header flexSpaceCenter">
        <h3 className="font20 extraBold">{basket.basketName}</h3>

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
          <UnsubscribeButton title="Unsubscribe" action={() => handleRemoveBox(basket.id)} />
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

export default SubscribedBasket;