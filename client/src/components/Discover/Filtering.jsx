import React, {useState} from 'react';
import styled from "styled-components";
import Form from 'react-bootstrap/Form'
import {useNavigate, NavLink}  from "react-router-dom";
import FullButton from "../Buttons/FullButton";
//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";

//import icons from react icons
// import { FaList, FaRegHeart } from "react-icons/fa";
// import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";

import "react-pro-sidebar/dist/css/styles.css";


export default function Filtering() {

      const handleSubmit = async (e) => {
        e.preventDefault();
        // const options = {
        //   body: JSON.stringify({
        //       "email": email,
        //       "password": pwd
        //   })
        // };
        // const headers = {
        //   "Content-Type": "application/json"
        // };

        // configOptions("POST", headers, options);  

        // const response = await fetch(`${baseUrl}/api/users/login`, options);
        // console.log(response);
        // if(response.ok){
        //   response.json().then(data => {
        //     console.log("data: ", data.token);
        //     localStorage.setItem("token", data.token);
        //     localStorage.setItem("auth", "true");
        //   })
        //   setSuccess(true);
        //   setPwd('');
        //   setEmail('');
        //   options.body = JSON.stringify({});
        //   // navigate("/"); 
        //   window.location.reload();
        // }
        // else{
        //   setErrMsg('Sign in Failed: ' + response.statusText);
        // }  
    }
    
      return (
        <>
          <Wrapper className="container">
          <form onSubmit={handleSubmit} style={{maxWidth: "200px"}}> 
            <h3 className='semiBold textCenter'>Sign Up</h3>
            <br/>
            <div className="mb-3">
              <label htmlFor="username">Full name</label>
              <input
                type="text"
                className="form-control font13"
                // onChange={(e) => setUser(e.target.value)}
                placeholder="Full name"
                required
                // value={user}
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control font13"
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                // value={email}
                required
              />
            </div>
            
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                id="password"
                // value={pwd}
                // onChange={(e) => setPwd(e.target.value)}
                className="form-control font13"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="mb-3">
              <label>Confirm password</label>
              <input
                type="password"
                id="confirm_pwd"
                // onChange={(e) => setMatchPwd(e.target.value)}
                // value={matchPwd}
                className="form-control font13"
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="d-grid">
            
            <label>Role: </label>
            <Form>
              {['radio'].map((type) => (
                <div key={`inline-${type}`} 
                    className="mb-3" 
                    onChange={(e)=> {}}>
                  <Form.Check 
                    style={{marginLeft: "30px", fontSize: "13px"}}
                    label="I'm an investor"
                    name="group1"
                    value="investor"
                    type={type}
                    defaultChecked
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    style={{marginLeft: "30px", fontSize: "13px"}}
                    label="I'm a portfolio manager"
                    value="manager"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
            {/* <p style={{color:"red", width: "350px"}} ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
              <BtnWrapper>
                <FullButton title="Register" />
              </BtnWrapper>
            </div>

            <div style={{marginTop: "20px", fontSize: "12px"}} className="flexSpaceCenter">Already have an account?
              <NavLink
                style={{marginLeft: "10px", color: "#7620FF"}}
                to="/login"
                className={"active"}
              >
                <div className="flexSpaceCenter semiBold font13 pointer">
                  Login
                </div>
              </NavLink>
            </div>
          </form>
        </Wrapper>
        </>
      );
    };



    const WrapperLogin = styled.div`
    width: max-content;
    text-align: left;
    padding: 20px 30px;
    margin-top: 30px;
  `;
  
  const Wrapper = styled.section`
      padding-top: 10px;
      width: max-content;
      @media (max-width: 960px) {
          padding-bottom: 40px;
      }
  `;
  
  const BtnWrapper = styled.div`
    max-width: 200px;
    @media (max-width: 960px) {
      margin: 0 auto;
    }
  `;