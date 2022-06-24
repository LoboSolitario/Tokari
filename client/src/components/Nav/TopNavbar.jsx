import React, {useState} from "react";
import styled from "styled-components";
import {Link, NavLink} from 'react-router-dom';


// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";

// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">

           <Link className="pointer flexNullCenter" to="/">
            <LogoIcon />
            <h1 style={{ marginLeft: "5px" }} className="font20 extraBold">
              tokari
            </h1>
          </Link>

          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>

          <UlWrapperRight className="flexNullCenter"> 
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li className="semiBold font15 pointer" style={{ padding: "10px 15px" }}>
              Home
            </li>
          </NavLink>
        
         {localStorage.getItem("token")?(
          <NavLink onClick={()=>{
            localStorage.clear();
          }}
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li className="semiBold font15 pointer" style={{ padding: "10px 15px" }}>
              Logout
            </li>
          </NavLink>
         ):( 
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li className="semiBold font15 pointer" style={{ padding: "10px 15px" }}>
              Login
            </li>
          </NavLink>
         )}

          <NavLink
            to="/portfoliomain"
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li className="semiBold font15 pointer pointer" style={{ padding: "10px 15px" }}>
              Management
            </li>
          </NavLink>

          <NavLink
            to="/baskets"
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            <li className="semiBold font15 pointer radius8 lightBg" style={{ padding: "10px 15px" }}>
              Discover
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;