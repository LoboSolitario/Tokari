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
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#FFF")};
  width: 100%;
  padding: 15px;
  font-weight: 600!important;
  outline: none;
  color: ${(props) => (props.border ? "#7620ff" : "#7620ff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#FFF")};
    border: 1px solid #707070;
    color: ${(props) => (props.border ? "#707070" : "#707070")};
  }
`;