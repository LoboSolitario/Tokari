import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from "../../uitils/PrivateRoutes";

// Screens
import Landing from "../../screens/Landing";
import Login from "../../screens/Login";

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