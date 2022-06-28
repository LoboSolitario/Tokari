import React,  { useState }  from 'react';
import { Routes, Route} from 'react-router-dom'
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
        <TopNavbar/>
        <DiscoverHeader/>
        <DiscoverContext.Provider value={{baskets, setBaskets, allBaskets, setAllBaskets}}>
        <div className="flex flexRow">
          <Filtering/>
            <Routes>
                <Route element={<DiscoverBasket />} path="/"/>   
            </Routes>  
        </div>
        </DiscoverContext.Provider>
        <Footer/>
    </>
  
  )
}
export default Discover