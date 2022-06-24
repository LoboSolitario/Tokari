import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";
import TopNavbar from '../Nav/TopNavbar';

function InvestorRouters() {
  return (
    <Routes>
      <Route element={<TopNavbar/>} path="/" exact></Route>
    </Routes>
  )
}

export default InvestorRouters