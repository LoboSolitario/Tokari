import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function faqBox({ text, author }) {
  return (
    <Wrapper className="darkBg radius8 flexNullCenter flexColumn">
      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>
      <p className="orangeColor font13" style={{alignSelf: 'flex-start'}}>
        <em>{author}</em>
      </p>
      <br />
      <p className="whiteColor font13" style={{ paddingBottom: "30px" }}>
        {text}
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;