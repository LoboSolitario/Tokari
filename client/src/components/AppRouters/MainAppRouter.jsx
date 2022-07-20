import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";

// Screens
import Landing from "../../screens/Landing";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import InvestorRouters from "./InvestorRouters";
import PortfolioRouters from "./PortfolioRouters";
import Discover from "../../screens/Discover";
import Payment from "../../screens/Payment"
import Detail from "../../screens/Detail";
import Investing from "../../screens/Investing";
import AfterI from "../../screens/AfterI";
import Manager from "../../screens/Manager";
export default function MainAppRouter() {
    return (
      <>
      <Router>
        <Routes>
      
          <Route element={<PrivateRoutes role="manager"/>} >
            <Route path="/portfoliomain/*" element={ <PortfolioRouters/>} />
          </Route>
          
          <Route element={<PrivateRoutes role="investor"/>} >
            <Route path="/investormain/*"  element={<InvestorRouters/>}/>
          </Route>

          <Route element={<Landing/>} path="/" exact/>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Register/>} path="/signup"/>
          <Route element={<Discover/>} path="/discover/*"/>
          <Route element={<Payment/>} path="/payment"/>

          <Route element={<Detail/>} path="/basket/:id"/>
          <Route element={<Investing/>} path="/basket/invest/:id" />
          <Route element={<AfterI/>} path="/investsuccessfully"/>
          <Route element={<Manager/>} path="/manager/:id"/>
          {/* <Route exact path="/:id" component={Detail}/> */}
        </Routes>
      </Router>
      </>
    );
  }