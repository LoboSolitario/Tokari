import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

 export default function PortfolioHeader() {
  return (
    <div className="flexLeft" style={{marginTop: "100px", marginLeft: "20px"}}>
    <div className="semiBold font30 pointer">Porfolio Management</div>
        <BtnWrapper>
            <button style={{border: "none", background: "none"}}>
                <FontAwesomeIcon className="flexCenter font30 purpleColor" icon={faPlusCircle}/>
            </button>
        </BtnWrapper>
    </div>
  )
}

const BtnWrapper = styled.div`
  max-width: 190px;
  margin-left: 10px;
  margin-top: 8px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
