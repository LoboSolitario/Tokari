import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


export default function PortfolioHeader() {
  let navigate = useNavigate();
  const handleOnClick = () => {
    navigate('createBasket')
  }

  return (
      <div className="container" 
         style={{
            display: "in-block",
            marginTop: "100px", 
            marginBottom: "0px"}}
            >
      <div className="semiBold font25 pointer">
              Porfolio Management
              <button style={{border: "none", background: "none"}} onClick={()=>{
                handleOnClick()
                }}>
                    <FontAwesomeIcon className="font25 purpleColor" icon={faPlusCircle}/>
              </button>
      </div>
    </div>
  )
}

