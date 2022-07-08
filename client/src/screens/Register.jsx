import React from "react";
import styled from "styled-components";
import SignUp from "../components/Elements/SignUp";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer"


export default function Register() {
  return (
    <>
      <TopNavbar />
      <div className="lightBg">
      <Wrapper className="container flexSpaceCenter">  
          <SignUp/>
      </Wrapper>
      </div>
      <Footer/>
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
