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
border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
background-color: ${(props) => (props.border ? "transparent" : "transparent")};
width: 100%;
padding: 8px;
margin-right:5px;
outline: none;
font-size: 12px;
color: ${(props) => (props.border ? "#7620ff" : "#7620ff")};
:hover {
  background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
  border: 1px solid #7620ff;
  color: ${(props) => (props.border ? "#7620ff" : "#fff")};
}
`;

