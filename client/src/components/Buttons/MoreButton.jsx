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
  border: 1px solid ${(props) => (props.border ? "#762077" : "#7620FF")};
  background-color: ${(props) => (props.border ? "transparent" : "transparent")};
  width: 100%;
  padding: 8px;
  margin-top:10px;
  outline: none;
  font-size: 12px;
  color: ${(props) => (props.border ? "#7620FF" : "#7620FF")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#762077")};
    border: 1px solid #7620FF;
    color: ${(props) => (props.border ? "#7620FF" : "#fff")};
  }
`;

