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
import Detail from "../../screens/Detail";

export default function MainAppRouter() {
    return (
      <>
      <Router>
        <Routes>
          {/* <Route element={<PrivateRoutes/>} > */}
           <Route element={<PortfolioRouters/>} path="/portfoliomain/*" exact={true}/>
          {/* </Route> */}
          {/* <Route element={<PrivateRoutes/>}> */}
            <Route element={<InvestorRouters/>} path="/investormain" exact={true}/>
          {/* </Route> */}
          <Route element={<Landing/>} path="/" exact/>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Register/>} path="/signup"/>
          <Route element={<Discover/>} path="/discover/*"/>
          <Route element={<Detail/>} path="/basket/:id"/>
          {/* <Route exact path="/:id" component={Detail}/> */}
        </Routes>
      </Router>
      </>
    );
  }