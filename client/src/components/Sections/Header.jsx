import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/OrangeButton";
// Assets
import HeaderImage from "../../assets/img/header-img2.svg";
import {useNavigate}  from "react-router-dom";
import Wave from "../../assets/svg/Wave.jsx";


export default function Header() {

  let navigate = useNavigate();

  return (

    <Wrapper id="home" className="container flexSpaceCenter">
      
      <LeftSide className="flexCenter flexColumn flex" style={{zIndex: 9}}>
        <div>
          <h1 className="extraBold font60">Let us simplify your crypto investment journey</h1>
          <HeaderP className="font14 semiBold" style={{color: "black"}}>
           Tokari takes the guesswork out of investing by automating your portfolio. 
           Continue your crypto investment journey with a clear advantage.
          </HeaderP>
          <BtnWrapper className="pointer" onClick={ ()=>{navigate("discover")}}>
            <FullButton title="Get Started"/>
          </BtnWrapper>
        </div>
      </LeftSide>

      <RightSide>
        <ImageWrapper >
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9, width: "60%"}} />
        </ImageWrapper>      
      </RightSide>

      <WaveWrapper>
        <div className="wave-container">
          <Wave/>
        </div>
      </WaveWrapper>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  overflow: auto;
  padding-top: 80px;
  width: 100%;
  min-height: 100vh;
  height: -moz-fit-content;
  height: -webkit-fit-content;
  height: -fit-content;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 20px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 0%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 960px) {
    width: 0%;
    display: none;
    height: auto;
  }
`;
const WaveWrapper = styled.div`  
  @media (max-width: 560px) {
    display: none;
  }
`;
