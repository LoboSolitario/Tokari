import axios from "axios";
import React, {useContext} from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";
import Form from 'react-bootstrap/Form'
import {useNavigate, NavLink}  from "react-router-dom";
import FullButton from "../Buttons/FullButton";
import ViewButton from '../Buttons/viewButton'
import DiscoverContext from '../contexts/DiscoverContext';
import {ToggleButtonGroup, ToggleButton} from "react-bootstrap"

import "react-pro-sidebar/dist/css/styles.css";


export default function Filtering() {
    
    const [searchKeyword, setSearchKeyword] = useState('');
    // const {searchTag, setSearchTag} = useState(false);
    const { baskets, setBaskets, allBaskets, setAllBaskets } = useContext(DiscoverContext);
    const [activeVolatility, setActiveVolatility] = useState(0);
    const [activeSubscriptionType, setActiveSubscriptionType] = useState(4);
    const [activeRiskType, setActiveRiskType] = useState(0);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    

    function handleSearch() {
        if (searchKeyword.length === 0){
            return;
        }

        

        setBaskets(allBaskets.filter(basket => basket.basketName.includes(searchKeyword)));

        console.log(allBaskets);
    }

    // function handleVolatility(e) {
    //     setActiveVolatility(e);
    //     if (e === 1) {
    //         setActiveVolatility
    //         setBaskets(allBaskets.filter(basket => {return basket.basketName.includes(searchKeyword) && basket.volatility === "low" }));
    //     } else if (e === 2) {
    //         setBaskets(allBaskets.filter(basket => {return basket.basketName.includes(searchKeyword) && basket.volatility === "moderate"}));
    //     } else if (e === 3) {
    //         setBaskets(allBaskets.filter(basket => {return basket.basketName.includes(searchKeyword) && basket.volatility === "high"}));
    //     }
    // }

    // function handleSubscriptionType(e) {
    //     console.log(e)
    // }

    // function handleRiskType(e) {
    //     console.log(e);
    // }

    useEffect(()=>{
        console.log(activeVolatility);
        console.log(activeSubscriptionType);
        console.log(activeRiskType);
      });
    
      return (
        <>
            <Wrapper className="container">
                <form onSubmit={handleSubmit}>
                {/* {searchKeyword && <p>{searchKeyword}</p>} */}
                    <div className="mb-3">
                        <label className="flexHorizontalCenter" style={{margin: "10px 0"}}>Search</label>
                        <input
                            type="text"
                            className="form-control font13"
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            placeholder="Search"
                            required
                            value={searchKeyword}
                        />
                        <BtnWrapper className="flexHorizontalCenter">
                            <ViewButton title="Search" action={handleSearch}/>
                        </BtnWrapper>
                    </div>

                    <ColoredLine color="grey"></ColoredLine>

                    <>
                        <TogglerWrapper>
                            <label style={{margin: "10px 0"}} className="flexHorizontalCenter">Volatility</label>
                            <ToggleButtonGroup type="radio" name="options" onChange={(e) => setActiveVolatility(e)}>
                                <ToggleButton id="valatility-low" value={1} style={{background: "#7620FF"}}>
                                    Low
                                </ToggleButton>
                                <ToggleButton id="valatility-moderate" value={2} style={{margin: "0 5px", background: "#7620FF"}}>
                                    Moderate
                                </ToggleButton>
                                <ToggleButton id="valatility-high" value={3} style={{background: "#7620FF"}}>
                                    High
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </TogglerWrapper>

                        <TogglerWrapper>
                            <label style={{margin: "10px 0"}} className="flexHorizontalCenter">Subscription Type</label>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={4} onChange={(e) => setActiveSubscriptionType(e)}>
                                    <ToggleButton id="subscription-type-show-all" value={4} style={{background: "#7620FF", active: true}}>
                                        Show All
                                    </ToggleButton>
                                    <ToggleButton id="subscription-type-free-access" value={5} style={{margin: "0 5px", background: "#7620FF"}}>
                                        Free Access
                                    </ToggleButton>
                                    <ToggleButton id="subscription-type-fee-based" value={6} style={{background: "#7620FF"}}>
                                        Fee Based
                                    </ToggleButton>
                            </ToggleButtonGroup>
                        </TogglerWrapper>

                        <TogglerWrapper>
                            <label style={{margin: "10px 0"}} className="flexHorizontalCenter">Risk Type</label>
                            <ToggleButtonGroup type="radio" name="options" onChange={(e) => setActiveRiskType(e)}>
                                <ToggleButton id="risk-type-low" value={7} style={{background: "#7620FF"}}>
                                    Low
                                </ToggleButton>
                                <ToggleButton id="risk-type-moderate" value={8} style={{margin: "0 5px", background: "#7620FF"}}>
                                    Moderate 
                                </ToggleButton>
                                <ToggleButton id="risk-type-high" value={9} style={{background: "#7620FF"}}>
                                    High
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </TogglerWrapper>
                    </>
                </form>
            </Wrapper>
        </>
    );
};
  
  const Wrapper = styled.section`
      padding-top: 10px;
      width: max-content;
      @media (max-width: 960px) {
          padding-bottom: 40px;
      }
  `;
  
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