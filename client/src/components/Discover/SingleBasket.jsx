import React from "react";
import styled from "styled-components";
import ViewButton from "../Buttons/viewButton";
import FreeIcon from "../../assets/svg/Services/FreeIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const SingleBasket = ({ 
    id, 
    basketName,
    owner, 
    details, 
    risk, 
    author, 
    volatility,
    overview,
    subscriptionFee
}) => {
    return (
        // <Wrapper className="container">
      <div style={{padding: '50px 0'}}>  
        <div className="container">
          <div className="flexSpaceNull">
            <div>
              <div className="flexSpaceNull">
                <div>
                  <h3 className="font20 extraBold">{basketName}</h3>
                  <p className="font11">Managed by {owner}</p>
                </div>  
                {subscriptionFee==0?<FreeIcon />: ""}
              </div>
              <p className="font13" style={{ padding: "5px 0" }}>
                {overview}
              </p>
            </div>
            <div className="flexSpaceNull flexCenter">
              <p className={' tag  radius6 font11 extraBold '+ (risk=="High"? "redBg" : risk=="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
              <p className={' tag  radius6 font11 extraBold '+ (volatility=="High"? "redBg" : volatility=="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
            </div>
          </div>
          <div className="flexSpaceNull">
            <div className="semiBold font11 purpleColor borderShow">
              <FontAwesomeIcon className="font14 purpleColor" icon={faPlusCircle}/>
              {/* <p className="font15">  </p> */}
              Trending
              <p className="font11 darkColor regular">Watchlisted by over 10K investors</p>
            </div>
            <div>
              Subscription Fee 25 €
            </div>
          </div>
          
          
          <div className="flexSpaceNull">
            <p className="font13 extraBold">{author}</p>
            {/* <p className="font13 greenColor extraBold">{free?"Free Access": ""}</p> */}
          </div>

          <p className="font13 extraBold">{subscriptionFee}</p>
          
          <div className="flexSpaceNull">
            <p className={' tag  radius6 font11 extraBold '+ (risk=="High"? "redBg" : risk=="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
            <p className={' tag  radius6 font11 extraBold '+ (volatility=="High"? "redBg" : volatility=="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
          </div>

          {/* <div className="row flexHorizontalCenter">
              <div style={{ width: "150px" }}>
                <ViewButton title="View Basket" action={() => alert("clicked")} />
              </div>
          </div> */}
        </div>
      </div>  
  
    );
}

// const Wrapper = styled.div`
// width: 100%;
// text-align: left;
// padding: 20px 30px;
// margin-top: 30px;
// `;
  

export default SingleBasket;