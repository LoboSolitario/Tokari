import React from 'react'
import FaqSlider from "../Elements/FaqSlider";
import styled from "styled-components";

function FAQ() {
  return (
    <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
            <HeaderInfo>
            <h1 className="font40 extraBold">Frequently Asked Questions</h1>
            </HeaderInfo>
            <FaqSlider />
        </div>
    </div> 
  )
}

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

export default FAQ