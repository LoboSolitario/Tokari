import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import PrivateRoutes from './uitils/PrivateRoutes'
// Screens
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";


export default function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route element={<PrivateRoutes/>}>
           <Route element={<Landing />} path="/" exact/>
        </Route>
        
        <Route element={<Login/>} path="/login"/>

      </Routes>
    </Router>
    </>
  );
}

