import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
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
  border: 1px solid ${(props) => (props.border ? "transparent" : "#0bb00e")};
  background-color: ${(props) => (props.border ? "transparent" : "transparent")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#0bb00e")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#e9f7e9")};
    border: 1px solid #0bb00e;
    color: ${(props) => (props.border ? "#7620ff" : "#0bb00e")};
  }
`;

