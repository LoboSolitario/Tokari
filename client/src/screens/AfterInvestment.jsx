import React from "react";
import styled from "styled-components";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import AfterInvest from "../components/Transactions/AfterInvest";

export default function AfterInvestment() {
  
  return (
    <>
      <TopNavbar />
      <div className="lightBg">
        <Wrapper className="container flexSpaceCenter">
          <div className="container">
            <AfterInvest />
          </div>

        </Wrapper>
      </div>
      <Footer />
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  padding-top: 80px;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  min-height: 90vh;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
