import React from "react";
import styled from "styled-components";
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

export default function faqBox({ answer, question }) {
  return (
    <Wrapper className="darkBg radius8 flexNullCenter flexColumn">
      <QuoteWrapper>
        <FontAwesomeIcon className="font40 orangeColor flexCenter" icon={faPaperclip}/>
      </QuoteWrapper>
      <p className="orangeColor font15 semiBold" style={{alignSelf: 'flex-start'}}>
        {question}
      </p>
      <br />
      <p className="whiteColor font13" style={{ paddingBottom: "30px" }}>
        {answer}
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