import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/OrangeButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import Dots from "../../assets/svg/Dots";
import {useNavigate}  from "react-router-dom";
import Wave from "../../assets/svg/Wave.jsx";


export default function Header() {

  let navigate = useNavigate();

  return (

    <Wrapper id="home" className="container flexSpaceCenter">
      
      <LeftSide className="flexCenter" style={{zIndex: 9}}>
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
          <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9, width: "65%"}} />
        </ImageWrapper>
        {/* <GreyDiv className="lightBg"></GreyDiv> */}
      </RightSide>

      <WaveWrapper>
        <div className="wave-container flex">
          <Wave/>
        </div>
      </WaveWrapper>

      {/* <WaveWrapper>
        <div class="custom-shape-divider-bottom-1658486706">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
      </WaveWrapper> */}
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
  padding: 15px 0 50px 0;
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
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 2000px) {
    width: 40%;
    height: auto;
  }
`;
const WaveWrapper = styled.div`  
  @media (max-width: 560px) {
    display: none;
  }
`;
