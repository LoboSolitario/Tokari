import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import BasketContext from "../contexts/BasketContext";


export default function PortfolioHeader() {
  let navigate = useNavigate();
  const baskets = React.useContext(BasketContext);
  console.log("baskets header: ", baskets)
  const handleOnClick = () => {
    navigate('createBasket')
  }

  return (

    <div className="container lightBg metricsBox borderRad flexSpaceCenter flexRow"
         style={{
          display: "in-block",
          marginBottom: "0px",
          height: "90px",
          marginTop: "100px", 
          paddingLeft: "30px",
          paddingRight: "20px",
        }}
      >

    <div className="flexCenter" >
        <div className="semiBold font20">Porfolio Management</div>
        <button style={{border: "none", background: "none"}} onClick={()=>{
          handleOnClick()
          }}>
              <FontAwesomeIcon className="font25 pointer purpleColor flexCenter plusButton" icon={faPlusCircle}/>
        </button>
      </div>

      <div className="greyColor flexColumn">
        <div>Total baskets:</div>
          <div>1</div>
        </div>

      <div className="greyColor flexColumn">
        <div>Total subscriptions:</div>
          <div>1</div>
        </div>
      </div>
  )
}

