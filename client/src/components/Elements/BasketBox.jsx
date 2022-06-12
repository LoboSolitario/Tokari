import React from "react";
import styled from "styled-components";

export default function BasketBox({ tag, title, text, action, author, priceChange, marketCap}) {
  return (
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
      
        <WrapperItemInfo className="flex flexRow flexSpaceNull">
          <p className="font13 extraBold">{priceChange}</p>
          <p className="font13 extraBold">{marketCap}</p>
        </WrapperItemInfo>

        <WrapperItemInfo className="flex flexRow flexSpaceNull">
          <p className="font13 extraBold">{"7d Price Change"}</p>
          <p className="font13 extraBold">{"Market Cap"}</p>
        </WrapperItemInfo>
        <br />
        <p className="font13 extraBold">{author}</p>
        
           <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;

const WrapperItemInfo = styled.button`
  border: none;
  outline: none;
  display: flex;
  background-color: transparent;
  width: 100%;
`;
