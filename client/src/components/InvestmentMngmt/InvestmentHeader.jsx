import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


export default function InvestmentHeader() {
  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate('createBasket')
  }

  return (
    <div className="container" 
         style={{
            display: "in-block",
            marginTop: "100px", 
            marginBottom: "50px"}}
            >
      <div className="semiBold font30 pointer">
              Investment Management

      </div>
    </div>
  )
}

