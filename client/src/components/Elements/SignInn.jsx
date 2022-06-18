import React from 'react'
import styled from 'styled-components';
import FullButton from "../Buttons/FullButton";
import {useNavigate}  from "react-router-dom";
// handle Sign In here and save the auth token/user role

export default function SignIn(){
    return (
    <Wrapper className="container flexSpaceCenter">
      <form>
        <h3 className='semiBold'>Sign In</h3>
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
            <FullButton title="Login" />
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