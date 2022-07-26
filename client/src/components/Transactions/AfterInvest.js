import React from 'react';
import styled from 'styled-components';
import SuccessButton from "../Buttons/SuccessButton";
import {useNavigate}  from "react-router-dom";

export default function AfterInvest() {
    let navigate = useNavigate();
    return (
      <WrapperLogin className="whiteBg radius8 shadow container">
        <Wrapper className="container flexSpaceCenter flexColumn">
          <div style={{ marginBottom: "20px" }} className="p">Congratuations!! You have sucessfully invested to the basket.</div>
          <BtnWrapper onClick={ ()=>{navigate("/investormain/transactions");}}>
            <SuccessButton title="Transactions" to="/investormain/transactions" />
          </BtnWrapper>
        </Wrapper>      
      </WrapperLogin>
  
    );
}
const WrapperLogin = styled.div`
  width: max-content;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;

const Wrapper = styled.section`
    padding-top: 25px;
    width: max-content;
    @media (max-width: 960px) {
    padding-bottom: 40px;
    }
`;

const BtnWrapper = styled.div`
  max-width: 150px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
  font-size: 15px;
  font-weight: bold;
`;
