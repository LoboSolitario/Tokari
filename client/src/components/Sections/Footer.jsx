import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/LogoFooter";
import RedditIcon from "../../assets/svg/RedditFooter";
import TwitterIcon from "../../assets/svg/TwitterFooter";
import DiscordIcon from "../../assets/svg/DiscordFooter";
import LinkedinIcon from "../../assets/svg/LinkedInFooter";


export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" offset={-80}>
              <span className="flexCenter">
                <LogoImg/>
              </span>
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "5px" }}>
                tokari
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="orangeColor font13">tokari</span> All Right Reserved
            </StyleP>
            <div>
              <a style={{ marginLeft: "5px"}} rel="noreferrer" href="https://twitter.com" target="_blank">
                <TwitterIcon/>  
              </a>
              <a style={{ marginLeft: "5px"}} rel="noreferrer" href="https://reddit.com" target="_blank">
                <RedditIcon/>
              </a>
              <a style={{ marginLeft: "5px"}} rel="noreferrer" href="https://discord.com" target="_blank">
                <DiscordIcon/>
              </a>
              <a style={{ marginLeft: "5px"}} rel="noreferrer" href="https://linkedin.com" target="_blank">
                <LinkedinIcon/>
              </a>
            </div>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;