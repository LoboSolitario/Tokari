import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';



export default function InvestorNavbar() {

  return (
    <>

      <Wrapper className="flexCenter animate whiteBg" >
        <NavInner className="container flexSpaceCenter">

          <UlWrapperRight className="flexNullCenter">
            <NavLink
              to="/investormain/subscriptions"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <li className="semiBold font15 pointer" style={{ padding: "10px 15px" }}>
                Subscriptions
              </li>
            </NavLink>

            <NavLink
              to="/investormain/investments"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <li className="semiBold font15 pointer" style={{ padding: "10px 15px" }}>
                Investments
              </li>
            </NavLink>

            <NavLink
              to="/investormain/transactions"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              <li className="semiBold font15 pointer" style={{ padding: "10px 15px" }}>
                Transactions
              </li>
            </NavLink>


          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  z-index: 999;
  margin:32px;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
// `

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;