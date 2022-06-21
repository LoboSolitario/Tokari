import React from "react";
import styled from "styled-components";
import SignIn from "../components/Elements/SignIn";
import SignUp from "../components/Elements/SignUp";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer"

export default function Login() {
  return (
    <>
      <TopNavbar/>
      <TopNavbar/>
      <Wrapper className="container flexSpaceCenter">  
          <SignIn/>
          <SignUp/>
      </Wrapper>
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
