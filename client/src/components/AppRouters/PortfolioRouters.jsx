import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";
import TopNavbar from '../Nav/TopNavbar';


// Screens
function PortfolioRouters() {
  return (
    // <Router>
      <Routes>
        <Route element={<TopNavbar/>} path="/" exact></Route>
      </Routes>
    // </Router>     
  )
}
export default PortfolioRouters