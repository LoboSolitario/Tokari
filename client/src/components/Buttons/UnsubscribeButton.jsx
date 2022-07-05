import React from "react";
import styled from "styled-components";

export default function FailureButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
border: 1px solid ${(props) => (props.border ? "#707070" : "red")};
background-color: ${(props) => (props.border ? "transparent" : "transparent")};
width: 100%;
padding: 8px;
margin-left:5px;
outline: none;
font-size: 12px;
color: ${(props) => (props.border ? "#7620ff" : "red")};
:hover {
  background-color: ${(props) => (props.border ? "transparent" : "red")};
  border: 1px solid red;
  color: ${(props) => (props.border ? "#7620ff" : "white")};
}
`;

