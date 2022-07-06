import React from "react";
import styled from "styled-components";
// Components
import BasketBox from "../Elements/BasketBox";
import FullButton from "../Buttons/FullButton";
import {useNavigate}  from "react-router-dom";

export default function Products() {
  let navigate = useNavigate();
  return (
    <Wrapper id="products">
      <div className="lightBg" style={{padding: '50px 0 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Products</h1>
            <p className="font13">
            Choose any of our carefully crafted, efficient and low-fee baskets.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                basketName="All Weather Investing"
                overview="One investment for all market conditions. Works for everyone"
                risk="Medium"
                volatility="Low"
                owner="Adam Smith"
                subscriptionFee = '0'
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                basketName="The professional's choice"
                overview="Modern strategies focused on generating extra returns & dividend income"  
                risk="Medium"
                volatility="Medium"
                owner="Karl Marx"
                subscriptionFee="0"
                //action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                basketName="Basket 2"
                overview="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                risk="Low"
                volatility={"Low"}
                owner="Satoshi Nakamoto"
                //action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                basketName="Basket 3"
                overview="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                risk="High"
                volatility="High"
                owner="Neil deGrasse Tyson"
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                basketName="Basket 4"
                overview="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                risk="Medium"
                volatility="High"
                owner="Albert Einstein"
                subscriptionFee= '0'
                //action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                basketName="Basket 5"
                overview="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                risk="High"
                volatility="Medium"
                author="Alan Turing"
                //action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Discover" action={() => navigate("/discover")} />
            </div>
          </div>
        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;