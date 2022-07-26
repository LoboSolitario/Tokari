import React, { useState } from "react";
import styled from "styled-components";
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

export default function FaqBox({ answer, question }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <Wrapper onClick={() => setShowMore(!showMore)}  className="darkBg radius8 flexNullCenter flexColumn">
      <QuoteWrapper>
        <FontAwesomeIcon className="font40 orangeColor flexCenter" icon={faPaperclip}/>
      </QuoteWrapper>
      <p className="orangeColor font15 semiBold" style={{alignSelf: 'flex-start'}}>
        {question}
      </p>
      <br />
      <p className="whiteColor font13" style={{ paddingBottom: "30px" }}>
      {showMore ? answer : `${answer.substring(0, 150)}...`}
      <button onClick={() => setShowMore(!showMore)} className="btn font15 orangeColor semiBold" style={{display: "block", marginLeft: "-15px", marginTop: "15px"}}>
       {showMore ? "Show less" : "Show more"}  
      </button>
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