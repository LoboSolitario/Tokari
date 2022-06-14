import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
// Screens
import Landing from "./screens/Landing.jsx";
import Login from "./screens/Login.jsx";


export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<Landing />} path="/" exact/>
        <Route element={<Login/>} path="/login"/>
      </Routes>
    </Router>
    </>
  );
}

