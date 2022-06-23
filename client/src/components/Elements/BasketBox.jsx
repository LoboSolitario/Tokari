import React from "react";
import styled from "styled-components";
import FullButton from "../Buttons/FullButton";

const BasketBox = ({ 
  tag, 
  title, 
  text, 
  action, 
  author, 
  Volatility}) => {
    
  return (
      <Wrapper className="whiteBg radius8 shadow basket">
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13" style={{ padding: "30px 0" }}>
          {text}
        </p>
  
        <p className="font13" style={{ padding: "30px 0" }}>
          {action}
        </p>
  
        <p className="font13 extraBold">{author}</p>
        <div className="flex">
          <p className="tag coralBg radius6 font11 extraBold">{tag}</p>
        </div>
        <div className="flex">
          <p className="tag coralBg radius6 font11 extraBold">{Volatility}</p>
        </div>
        <div className="row flexRight">
            <div style={{ width: "120px" }}>
              <FullButton title="Details" action={() => alert("clicked")} />
            </div>
        </div>
      </Wrapper>

    );
}

const Wrapper = styled.div`
  width: 350px;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;

export default BasketBox;