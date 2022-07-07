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
       
    }

    useEffect(()=>{

      });
    
      return (
        <>

            <Wrapper className="container searchBar">
                <form onSubmit={handleSubmit}> 

                    <div className="mb-3">
                        <input
                            type="search"
                            className="form-control font13 nosubmit"
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            placeholder="Try &quot;All weather&quot; or &quot;Momentum&quot;"
                            required
                            value={searchKeyword}
                        />

                    </div>

                    <ColoredLine color="grey"></ColoredLine>
                    <label style={{margin: "10px 0 0 0"}} className="flexLeft semiBold">Volatility</label>
                        <div>
                            <ToggleButtonGroup type="radio" name="Volatility" defaultValue={1}>
                                <ToggleButton id="tbg-radio-1" value={1} className="tagStyle">
                                    Low
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-2" value={2} className="tagStyle">
                                    Moderate
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-3" value={3} className="tagStyle">
                                    High
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                   

                        <label style={{margin: "20px 0 0 0"}} className="flexLeft semiBold">Subscription Type</label>
                        <div>
                             <ToggleButtonGroup type="radio" name="fee" defaultValue={1}>
                                <ToggleButton id="tbg-radio-4" value={1} className="tagStyle">
                                    Show all
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-5" value={2} className="tagStyle">
                                    Free Access
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-6" value={3} className="tagStyle">
                                    Fee Based
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <label style={{margin: "20px 0 0 0 "}} className="flexLeft semiBold">Risk Type</label>
                        <div>
                        <ToggleButtonGroup type="radio" name="risk  " defaultValue={1}>
                                <ToggleButton id="tbg-radio-7" value={1} className="tagStyle">
                                    Low
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-8" value={2} className="tagStyle">
                                    Moderate
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-9" value={3} className="tagStyle">
                                    High
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                    
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