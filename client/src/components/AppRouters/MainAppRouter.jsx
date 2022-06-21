import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "./PrivateRoutes";

// Screens
import Landing from "../../screens/Landing";
import Login from "../../screens/Login";
import Baskets from "../../screens/Baskets";
import Register from "../../screens/Register";

export default function App() {
    return (
      <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route element={<Baskets/>} path="/baskets"/>
          </Route>
          <Route element={<Landing/>} path="/" exact/>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Register/>} path="/signup"/>
        </Routes>
      </Router>
      </>
    );
  }