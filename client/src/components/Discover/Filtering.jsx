import React, {useContext} from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";
import DiscoverContext from '../contexts/DiscoverContext';
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap"

import "react-pro-sidebar/dist/css/styles.css";


export default function Filtering() {
    
    const [searchKeyword, setSearchKeyword] = useState('');
    const [submittedSearchKeyword, setSubmittedSearchKeyword] = useState('');
    const { baskets, setBaskets, allBaskets, setAllBaskets } = useContext(DiscoverContext);
    const [activeVolatility, setActiveVolatility] = useState(0);
    const [activeSubscriptionType, setActiveSubscriptionType] = useState(4);
    const [activeRiskType, setActiveRiskType] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSubmittedSearchKeyword(searchKeyword)
    }

    useEffect(()=>{


        let filteredBaskets = [...allBaskets];

        if (activeVolatility === 1) {
            // Nothing to do
        } else if (activeVolatility === 2) {
            filteredBaskets = filteredBaskets.filter(basket => basket.volatility === "Low")
        } else if (activeVolatility === 3) {
            filteredBaskets = filteredBaskets.filter(basket => basket.volatility === "Medium")
        } else if (activeVolatility === 4) {
            filteredBaskets = filteredBaskets.filter(basket => basket.volatility === "High")
        }

        if (activeSubscriptionType === 5) {
            // Nothing to do
        } else if (activeSubscriptionType === 6) {
            filteredBaskets = filteredBaskets.filter(basket => basket.subscriptionFee <= 0)
        } else if (activeSubscriptionType === 7) {
            filteredBaskets = filteredBaskets.filter(basket => basket.subscriptionFee > 0)
        }

        if (activeRiskType === 8) {
            // Nothing to do
        } else if (activeRiskType === 9) {
            filteredBaskets = filteredBaskets.filter(basket => basket.risk === "Low")
        } else if (activeRiskType === 10) {
            filteredBaskets = filteredBaskets.filter(basket => basket.risk === "Medium")
        } else if (activeRiskType === 11) {
            filteredBaskets = filteredBaskets.filter(basket => basket.risk === "High")
        }

        if (submittedSearchKeyword.length != 0) {
            filteredBaskets = filteredBaskets.filter(basket => basket.basketName.includes(submittedSearchKeyword))
        }
        setBaskets(filteredBaskets);
      }, [activeVolatility, activeSubscriptionType, activeRiskType, submittedSearchKeyword]);
    
      return (
        <React.Fragment>
            <div className="container flexGrow1">
                <Wrapper className="searchBar">
                    <form onSubmit={handleSubmit}> 
                        <div className="mb-3">
                            <input
                                type="search"
                                className="form-control font13 nosubmit"
                                onChange={(e) => setSearchKeyword(e.target.value)}
                                placeholder="Try &quot;Top Market Cap&quot; or &quot;Ecosystem&quot;"
                                value={searchKeyword}
                            />
                        </div>

                        <ColoredLine color="grey"></ColoredLine>

                        <div style={{whiteSpace: "nowrap"}}>
                            <label style={{margin: "10px 0 0 0"}} className="flexLeft semiBold">Volatility</label>
                            <div>
                                <ToggleButtonGroup type="radio" name="Volatility"  defaultValue={1} onChange={(e) => setActiveVolatility(e)} className="flexSpaceCenter">
                                    <ToggleButton id="valatility-all" value={1} className="tagStyle flexCenter font15">
                                        Show All
                                    </ToggleButton>
                                    <ToggleButton id="valatility-low" value={2} className="tagStyle flexCenter font15">
                                        Low
                                    </ToggleButton>
                                    <ToggleButton id="valatility-moderate" value={3} className="tagStyle flexCenter font15">
                                        Medium
                                    </ToggleButton>
                                    <ToggleButton id="valatility-high" value={4} className="tagStyle flexCenter font15">
                                        High
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>

                            <label style={{margin: "20px 0 0 0"}} className="flexLeft semiBold">Subscription Type</label>
                            <div>
                                <ToggleButtonGroup type="radio" name="SubscriptionType" defaultValue={5} onChange={(e) => setActiveSubscriptionType(e)} className="flexSpaceCenter">
                                        <ToggleButton id="subscription-type-show-all" value={5}  className="tagStyle flexCenter font15">
                                            Show All
                                        </ToggleButton>
                                        <ToggleButton id="subscription-type-free-access" value={6}  className="tagStyle flexCenter font15">
                                            Free Access
                                        </ToggleButton>
                                        <ToggleButton id="subscription-type-fee-based" value={7}  className="tagStyle flexCenter font15">
                                            Fee Based
                                        </ToggleButton>
                                </ToggleButtonGroup>
                            </div>

                            <label style={{margin: "20px 0 0 0"}} className="flexLeft semiBold">Risk Type</label>
                            <div>
                                <ToggleButtonGroup type="radio" name="RiskType" defaultValue={8} onChange={(e) => setActiveRiskType(e)} className="flexSpaceCenter">
                                    <ToggleButton id="risk-type-all" value={8} className="tagStyle flexCenter font15">
                                        Show All
                                    </ToggleButton>
                                    <ToggleButton id="risk-type-low" value={9} className="tagStyle flexCenter font15">
                                        Low
                                    </ToggleButton>
                                    <ToggleButton id="risk-type-moderate" value={10} className="tagStyle flexCenter font15">
                                        Medium 
                                    </ToggleButton>
                                    <ToggleButton id="risk-type-high" value={11} className="tagStyle flexCenter font15">
                                        High
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </div>
                    </form>
                </Wrapper>
            </div>
        </React.Fragment>
    );
};
  
  const Wrapper = styled.section`
      padding-top: 10px;
      width: max-content;
      @media (max-width: 960px) {
          padding-bottom: 40px;
      }
  `;

//   const Wrapper = styled.section`
//   padding-top: 80px;
//   width: 100%;
//   min-height: 840px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;
  
  const BtnWrapper = styled.div`
    max-width: 100px;
    margin: auto;
    @media (max-width: 960px) {
      margin: 0 auto;
    }
  `;

  const TogglerWrapper = styled.section`
        margin: 30px auto;
        max-width: max-content;
  `;

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            margin: "25px 0"
        }}
    />
);