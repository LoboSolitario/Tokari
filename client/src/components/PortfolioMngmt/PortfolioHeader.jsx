import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


export default function PortfolioHeader() {
  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate('createBasket')
  }

  return (
    <div className="flexLeft container" style={{marginTop: "100px", marginBottom: "50px"}}>
    <div className="semiBold font30 pointer">Porfolio Management</div>
       
        <BtnWrapper>
            <button style={{border: "none", background: "none"}} onClick={()=>{
              handleOnClick()
              }}>
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
