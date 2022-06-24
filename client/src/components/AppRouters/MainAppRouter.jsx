import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";

// Screens
import Landing from "../../screens/Landing";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import InvestorRouters from "./InvestorRouters";
import PortfolioRouters from "./PortfolioRouters";
import Baskets from "../../screens/Baskets"

export default function MainAppRouter() {
    return (
      <>
      <Router>
        <Routes>
          {/* <Route element={<PrivateRoutes/>}> */}
           <Route element={<PortfolioRouters/>} path="/portfoliomain/*"/>
          {/* </Route> */}
          {/* <Route element={<PrivateRoutes/>}> */}
            <Route element={<InvestorRouters/>} path="/investormain/*"/>
          {/* </Route> */}
          <Route element={<Landing/>} path="/" exact/>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Register/>} path="/signup"/>
          <Route element={<Baskets/>} path="/baskets"/>
        </Routes>
      </Router>
      </>
    );
  }