import React from 'react'
import styled from 'styled-components';
import FullButton from "../Buttons/FullButton";

export default function SignIn(){
    return (
    <Wrapper className="container flexSpaceCenter">
      <form>
        <h3 className="font43 Bold">Sign In</h3>
        <br />
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control font13"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control font13"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <BtnWrapper>
            <FullButton title="Submit" />
          </BtnWrapper>
        </div>
      </form>
    </Wrapper>
    )
  }


const Wrapper = styled.section`
    padding-top: 50px;
    width: max-content;
    @media (max-width: 960px) {
    padding-bottom: 40px;
    }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;