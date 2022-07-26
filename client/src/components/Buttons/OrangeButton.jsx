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
  border: 2px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#FFF")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#000000" : "#000000")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#FFF")};
    border: 2px solid #707070;
    color: ${(props) => (props.border ? "#707070" : "#707070")};
  }
`;