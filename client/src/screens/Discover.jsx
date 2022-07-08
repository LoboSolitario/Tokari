import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import styled from "styled-components";
import TopNavbar from '../components/Nav/TopNavbar';
import DiscoverBasket from '../components/Discover/DiscoverBasket';
import DiscoverContext from '../components/contexts/DiscoverContext';
import DiscoverHeader from '../components/Discover/DiscoverHeader';
import Footer from '../components/Sections/Footer';
import Filtering from '../components/Discover/Filtering';

// Screens
function Discover() {
  const [baskets, setBaskets] = useState([]);
  const [allBaskets, setAllBaskets] = useState([]);
  return (
    <>
      <TopNavbar />
      <div className="lightBg">
        <DiscoverHeader />
          <DiscoverContext.Provider value={{ baskets, setBaskets, allBaskets, setAllBaskets }}>
            <Wrapper className="flex flexSpaceNull container80">
              <Filtering />
              <Routes>
                <Route element={<DiscoverBasket />} path="/" />
              </Routes>
            </Wrapper>
          </DiscoverContext.Provider>
      </div>
      <Footer />
    </>

  )
}

const Wrapper = styled.section`
  min-height: 80vh;
`;

export default Discover