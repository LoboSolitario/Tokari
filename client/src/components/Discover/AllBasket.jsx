import React from "react";
import styled from "styled-components";
import ViewButton from "../Buttons/viewButton";

const AllBasket = ({ 
    basket,
    handleDetailBox
}) => {

    return (
        <Wrapper className="whiteBg radius8 shadows basket">
          <h3 className="font20 extraBold">{basket.basketName}</h3>
          <p className="font13" style={{ padding: "30px 0" }}>
            {basket.overview}
          </p>
          <div className="flexSpaceNull">
            <p className="font13 extraBold">{basket.author}</p>
            {/* <p className="font13 greenColor extraBold">{free?"Free Access": ""}</p> */}
          </div>

          <p className="font13 extraBold">{basket.subscriptionFee}</p>
          
          <div className="flexSpaceNull">
            <p className={' tag  radius6 font11 extraBold '+ (basket.risk=="High"? "redBg" : basket.risk=="Medium"? "orangeBg":"greenBg")}>Risk: {basket.risk}</p>
            <p className={' tag  radius6 font11 extraBold '+ (basket.volatility=="High"? "redBg" : basket.volatility=="Medium"? "orangeBg":"greenBg")}>Volatility: {basket.volatility}</p>
          </div>

          <div style={{ width: "100px" }}>
            <ViewButton title="View Basket"  action={() => handleDetailBox(basket.id)}/>
          </div>
          {/* <div className="row flexHorizontalCenter">
              <div style={{ width: "150px" }}>
                <ViewButton title="View Basket" action={() => alert("clicked")} />
              </div>
          </div> */}
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