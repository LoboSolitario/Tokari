import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexCenter">
            <TableBox style={{marginRight: "100px"}}>
              <PricingTable
                icon="free"
                price="€0/mo"
                title="Basic"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Product Offer", cheked: true },
                  { name: "Offer", cheked: true },
                  { name: "Product Offer #2", cheked: false },
                  { name: "Product", cheked: false },
                  { name: "Product Offer", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="premium"
                price=" €25/mo"
                title="Premium"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                offers={[
                  { name: "Product Offer", cheked: true },
                  { name: "Offer", cheked: true },
                  { name: "Product Offer #2", cheked: true },
                  { name: "Product", cheked: true },
                  { name: "Product Offer", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  background: #F5F5F5;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




