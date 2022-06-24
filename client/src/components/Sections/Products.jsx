import React from "react";
import styled from "styled-components";
// Components
import BasketBox from "../Elements/BasketBox";
import FullButton from "../Buttons/FullButton";
import FaqSlider from "../Elements/FaqSlider";

export default function Prodcuts() {
  return (
    <Wrapper id="products">
      <div className="lightBg">
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
                title="Basket 1"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: Low"
                Volacity={"Volacity: Low"}
                author="Adam Smith"
                Volatility="Volatility: Low"
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                title="Basket 1"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: Medium"
                Volacity={"Volacity: Low"}
                author="Karl Marx"
                Volatility="Volatility: Medium"
                //action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                title="Basket 2"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: Low"
                Volacity={"Volacity: Low"}
                author="Satoshi Nakamoto"
                Volatility="Volatility: Low"
                //action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                title="Basket 3"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: High"
                Volacity={"Volacity: Low"}
                author="Neil deGrasse Tyson"
                Volatility="Volatility: High"
                //action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                title="Basket 4"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: Medium"
                Volacity={"Volacity: Low"}
                author="Albert Einstein"
                Volatility="Volatility: Medium"
                //action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                title="Basket 5"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: High"
                Volacity={"Volacity: High"}
                author="Alan Turing"
                Volatility="Volatility: High"
                //action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Discover" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="whiteBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Frequently Asked Questions</h1>
            <p className="font13">
              Can't find the answer? Check our extended FAQ on GitBook or contact us.
            </p>
          </HeaderInfo>
          <FaqSlider />
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