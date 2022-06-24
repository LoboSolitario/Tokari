import React from "react";
import styled from "styled-components";
// Components
import BasketBox from "../Elements/BasketBox";
import FullButton from "../Buttons/FullButton";


export default function Products() {
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
                title="Basket 1"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: Low"
                Volatility={"Volatility: High"}
                author="Adam Smith"
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                title="Basket 1"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: Medium"
                Volatility={"Volatility: High"}
                author="Karl Marx"
                //action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                title="Basket 2"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: Low"
                Volatility={"Volatility: High"}
                author="Satoshi Nakamoto"
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
                Volatility={"Volatility: High"}
                author="Neil deGrasse Tyson"
<<<<<<< HEAD
=======
       
>>>>>>> portfolioCRUD
                //action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                title="Basket 4"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: Medium"
                Volatility={"Volatility: High"}
                author="Albert Einstein"
                //action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BasketBox
                title="Basket 5"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Risk: High"
                Volatility={"Volatility: High"}
                author="Alan Turing"
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