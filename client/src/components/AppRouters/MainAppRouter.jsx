import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "../../uitils/PrivateRoutes";

// Screens
import Landing from "../../screens/Landing";
import Login from "../../screens/Login";
import Baskets from "../../screens/Baskets";

export default function App() {
    return (
      <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route element={<Baskets/>} path="/baskets"/>
          </Route>
          <Route element={<Landing />} path="/" exact/>
          <Route element={<Login/>} path="/login"/>
        </Routes>
      </Router>
      </>
    );
  }