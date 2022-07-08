import React from "react";
import styled from "styled-components";

export default function MoreButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius6"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#24CE80" : "#24CE8D")};
  background-color: ${(props) => (props.border ? "transparent" : "transparent")};
  width: 100%;
  padding: 8px;
  margin-top:10px;
  outline: none;
  font-size: 12px;
  color: ${(props) => (props.border ? "#24CE8D" : "#24CE8D")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#24CE80")};
    border: 1px solid #24CE8D;
    color: ${(props) => (props.border ? "#24CE8D" : "#fff")};
  }
`;

