import React from 'react'
import styled from 'styled-components';
import FullButton from "../Buttons/FullButton";
import { useRef, useState } from "react";
import axios from "../../api/Axios"
import Form from 'react-bootstrap/Form'

const REGISTER_URL = '/users/register';
const SignUp = () => {

  const errRef = useRef();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [matchPwd, setMatchPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();

      if (!((pwd).length > 5)) {
          setErrMsg("Password must be at least 5 characters long!");
          return;
      }
      else if (pwd !== matchPwd) {
        setErrMsg("Passwords don't match!");
        return;
      }

      try {
          const response = await axios.post(REGISTER_URL,
              JSON.stringify({ user, email, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(response?.data);
          console.log(response?.accessToken);
          console.log(JSON.stringify(response))
          setSuccess(true);
          setUser('');
          setPwd('');
          setMatchPwd('');

      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 409) {
              setErrMsg('Username Taken');
          } else {
              setErrMsg('Registration Failed')
          }
          errRef.current.focus();
      }
  }

    return (
    <>
     {success ? (
                <section>
                    <h1>Success!</h1>
                </section>
            ) : (
    <Wrapper className="container flexSpaceCenter">
      <form onSubmit={handleSubmit}> 
        <h3 className='semiBold'>Sign Up</h3>
        <br/>
        <div className="mb-3">
          <label htmlFor="username">Full name</label>
          <input
            type="text"
            className="form-control font13"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Full name"
            required
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control font13"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            value={email}
            required
          />
        </div>
        
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="form-control font13"
            placeholder="Enter password"
            reqired
          />
        </div>
        <div className="mb-3">
          <label>Confirm password</label>
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            className="form-control font13"
            placeholder="Confirm password"
            required
          />
        </div>
        <div className="d-grid">
        
        <label>Role: </label>
        <Form>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                style={{marginLeft: "30px"}}
                label="I'm an investor"
                name="group1"
                type={type}
                defaultChecked
                id={`inline-${type}-1`}
              />
              <Form.Check
                style={{marginLeft: "30px"}}
                label="I'm a fund manager"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form>
        <p style={{color:"red", width: "150px"}} ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <BtnWrapper>
            <FullButton title="Register" />
          </BtnWrapper>
        </div>
      </form>
    </Wrapper>
  
    )}
    </>
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

export default SignUp