import React from "react";
import { useNavigate } from 'react-router';
import styled from "styled-components";
import MoreButton from "../Buttons/MoreButton" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons';

const PortfolioBasket = ({ 
  id, 
  overview,
  basketName, 
  risk, 
  volatility,
  handleRemoveBox,
  handleDetailBox
}) => {

  let navigate = useNavigate();
  
  return (
      <Wrapper className="whiteBg radius8 shadow basket">
        <div className="wrapper-header flexRow flexSpaceCenter">
          
          <h3 className="font15 extraBold flexStart pointer">
          {basketName.length > 23 ?
              `${basketName.substring(0, 23)}...` : basketName
          }
          </h3>

          <div className="flexEnd">
            <div onClick={() => navigate(`editBasket/${id}`)}>
              <FontAwesomeIcon className="font14 purpleColor pointer editButton" icon={faPenToSquare}/>
            </div>

            <div onClick={() => handleRemoveBox(id)}>
              <FontAwesomeIcon className="font14 purpleColor pointer deleteButton" 
                style={{ padding: "0 0 0 10px" }} icon={faTrash}/>
            </div>
          </div>
        </div>
        <p className="font12" style={{ height: "120px", padding: "25px 0" }}>
          {overview.length > 120 ?
              `${overview.substring(0, 120)}...` : overview
          }
        </p>
        <div className="flexSpaceNull">
          <p className={' tag  radius6 font11 extraBold '+ (risk==="High"? "redBg" : risk==="Medium"? "orangeBg":"greenBg")}>Risk: {risk}</p>
          <p className={' tag  radius6 font11 extraBold '+ (volatility==="High"? "redBg" : volatility==="Medium"? "orangeBg":"greenBg")}>Volatility: {volatility}</p>
        </div>
        <div className="row flexCenter flexSpaceNull">
            <div style={{ width: "100px", marginBottom: "10px"}}>
              <MoreButton title="View" action={() => handleDetailBox(id)}/>
            </div>
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 350px;
  text-align: left;
  padding: 20px 30px;
  margin: 10px;
`;

export default PortfolioBasket;