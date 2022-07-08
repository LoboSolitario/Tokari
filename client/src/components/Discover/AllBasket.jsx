import React from "react";
import styled from "styled-components";
import ViewButton from "../Buttons/viewButton";

const AllBasket = ({
  basket,
  handleDetailBox
}) => {
  return (
    <Wrapper className="whiteBg radius8 shadow basket">
      <div className="wrapper-header flexSpaceCenter" style={{ padding: "0 0 5px 0" }}>
        <h3 className="font20 extraBold">
          {basket.basketName}
        </h3>
        <p className="font13 greenColor extraBold">{basket.subscriptionFee === 0 ? "Free Access" : ""}</p>
      </div>

      <p className="font13" style={{ padding: "5px 0" }}>
        {basket.overview}

      </p>
      <p className="font11 greyColor" style={{ padding: "0 0 5px 0" }}>Managed by {basket.owner}</p>
      <p className="font11">Number of cryptocurrencies:  {basket.cryptoNumber}</p>


      <div className="flexSpaceNull">
        <p className={' tag  radius6 font11 extraBold ' + (basket.risk === "High" ? "redBg" : basket.risk === "Medium" ? "orangeBg" : "greenBg")}>Risk: {basket.risk}</p>
        <p className={' tag  radius6 font11 extraBold ' + (basket.volatility === "High" ? "redBg" : basket.volatility === "Medium" ? "orangeBg" : "greenBg")}>Volatility: {basket.volatility}</p>
      </div>
      <div className="flexRight">
        <div style={{ width: "100px"}}>
          <ViewButton title="View Basket"  action={() => handleDetailBox(basket.id)}/>
        </div>
      </div>


    </Wrapper>

  );
}

const Wrapper = styled.div`
width: 100%;
text-align: left;
padding: 20px 30px;
margin-top: 30px;
`;

export default AllBasket;