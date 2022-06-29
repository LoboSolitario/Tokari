import React from "react";
import { useState } from 'react';
import styled from "styled-components";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import StripeContainer from "../components/payment/StripeContainer";
export default function Payment() {
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      <TopNavbar />
      <div className="lightBg">
        <Wrapper className="container flexSpaceCenter">
          <div className='container App'>
             <h1>Payment</h1>
            {showItem ? (
              <StripeContainer />
            ) : (
              <>
                <h3>$10.00</h3>
                <button onClick={() => setShowItem(true)}>Subscribe to a basket</button>
              </>
            )}
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
