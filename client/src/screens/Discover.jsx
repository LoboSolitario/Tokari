import React,  { useState }  from 'react';
import { Routes, Route} from 'react-router-dom'
import TopNavbar from '../components/Nav/TopNavbar';
import DiscoverBasket from '../components/Discover/DiscoverBasket';
import DiscoverContext from '../components/contexts/DiscoverContext';
import DiscoverHeader from '../components/Discover/DiscoverHeader';
import Footer from '../components/Sections/Footer';

// Screens
function Discover() {
  const [baskets, setBaskets] = useState([]);
  return (
    <>
        <TopNavbar/>
        <DiscoverHeader/>
        <DiscoverContext.Provider value={{baskets, setBaskets}}>
            <Routes>
                <Route element={<DiscoverBasket />} path="/"/>   
            </Routes>  
        </DiscoverContext.Provider>
        <Footer/>
    </>
  
  )
}
export default Discover