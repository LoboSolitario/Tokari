import React from 'react'
import styled from 'styled-components';
import FullButton from "../Buttons/FullButton";

// JWT
// POST request to create a new account 

export default function SignUp() {
    return (
    <Wrapper className="container flexSpaceCenter">
      <form>
        <h3 className='semiBold'>Sign Up</h3>
        <br/>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control font13"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control font13" placeholder="Last name" />
        </div>
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
            <FullButton title="Register" />
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