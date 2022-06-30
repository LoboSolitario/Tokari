import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import TopNavbar from '../components/Nav/TopNavbar';
import BasketDetail from '../components/Discover/BasketDetail';
import SingleContext from '../components/contexts/SingleContext';
import DiscoverHeader from '../components/Discover/DiscoverHeader';
import Footer from '../components/Sections/Footer';
import Filtering from '../components/Discover/Filtering';

// Screens
function Detail(props) {
//   const id = props.match.params.id
//   const [singlebaskets, setSingleBaskets] = useContext({})
  return (
    <>
       <TopNavbar />
      <div className="lightBg">
        <DiscoverHeader />
        <div className="flex ">
        <SingleContext.Provider value={{ singlebaskets, setSingleBaskets }}>
              <Routes>
                <Route element={<BasketDetail id = {id}/>} path="/" />
              </Routes>
        </SingleContext.Provider>
        </div>
      </div>
      
      <Footer />
    </>


    )
}
export default Detail


