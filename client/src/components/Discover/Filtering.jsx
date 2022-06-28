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
    const { baskets, setBaskets, allBaskets, setAllBaskets } = useContext(DiscoverContext);
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
    
      return (
        <>
            <Wrapper className="container">
                <form onSubmit={handleSubmit}> 
                {/* <form>  */}
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

                    <TogglerWrapper>
                        <label style={{margin: "10px 0"}} className="flexHorizontalCenter">Volatility</label>
                        <div>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton id="tbg-radio-1" value={1} style={{background: "#7620FF"}}>
                                    Low
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-2" value={2} style={{margin: "0 5px", background: "#7620FF"}}>
                                    Moderate
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-3" value={3} style={{background: "#7620FF"}}>
                                    High
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </TogglerWrapper>

                    <TogglerWrapper>
                        <label style={{margin: "10px 0"}} className="flexHorizontalCenter">Subscription Type</label>
                        <div>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <div className="flexSpaceCenter">
                                    <ToggleButton id="tbg-radio-1" value={1} style={{background: "#7620FF"}}>
                                        Show All
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-2" value={2} style={{margin: "0 5px", background: "#7620FF"}}>
                                        Free Access
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-3" value={3} style={{background: "#7620FF"}}>
                                        Fee Based
                                    </ToggleButton>
                                </div>
                            </ToggleButtonGroup>
                        </div>
                    </TogglerWrapper>

                    <TogglerWrapper>
                        <label style={{margin: "10px 0"}} className="flexHorizontalCenter">Risk Type</label>
                        <div>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton id="tbg-radio-1" value={1} style={{background: "#7620FF"}}>
                                    Low
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-2" value={2} style={{margin: "0 5px", background: "#7620FF"}}>
                                    Moderate 
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-3" value={3} style={{background: "#7620FF"}}>
                                    High
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </TogglerWrapper>
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