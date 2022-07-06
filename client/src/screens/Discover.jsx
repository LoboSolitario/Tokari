import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
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
        <div className="flex ">
          <DiscoverContext.Provider value={{ baskets, setBaskets, allBaskets, setAllBaskets }}>
              <Filtering />
              <Routes>
                <Route element={<DiscoverBasket />} path="/" />
              </Routes>
          </DiscoverContext.Provider>
          </div>
      </div>

      <Footer />
    </>

  )
}
export default Discover