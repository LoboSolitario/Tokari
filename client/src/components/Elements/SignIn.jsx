import React from 'react'
import styled from 'styled-components';
import FullButton from "../Buttons/FullButton";
import { useRef, useState } from "react";
import {useNavigate}  from "react-router-dom";
// handle Sign In here and save the auth token/user role

export default function SignIn(){
    const errRef = useRef();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const baseUrl = process.env.REACT_APP_BASE_URL;  
    // const [success, setSuccess] = useState(false);
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let headers = {
            "Content-Type": "application/json"
            };
            const options = {
            method: "POST", 
            body: JSON.stringify({
                "email": email,
                "password": pwd
                })
            };
            const configOptions = (method, headers) => {
            options.headers = headers == null ? new Headers() : headers;
            options.method = method
            };
             
            configOptions("POST", headers)
            const response = await fetch(`${baseUrl}/api/users/login`, options);
            console.log(response);
            if(response.status !== 200){
              alert('Sign in Failed');
              setErrMsg('Sign in Failed')
            }
            else{
              navigate("/");
              setPwd('');
            }  
        }
        catch (err) {
            console.log(err);
            errRef.current.focus();
        }
    }
    return (
    <Wrapper className="container flexSpaceCenter">
      <form onSubmit={handleSubmit} style={{maxWidth: "200px"}}>
        <h3 className='semiBold'>Sign In</h3>
        <br />
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control font13"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control font13"
            placeholder="Enter password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
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