import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Products from "../components/Sections/Products";
import Footer from "../components/Sections/Footer"
import { useEffect, useRef } from "react";

export default function Landing() {

  const hasUserSignedIn = useRef();
  // useEffect(() => {
    hasUserSignedIn.current = localStorage.getItem("auth");
    console.log("hasUserSignedIn: ", hasUserSignedIn.current)
  // });

  return (
    <>
      <TopNavbar hasUserSignedIn={hasUserSignedIn}/>
      <Header />
      <Products />
      <Footer />
    </>
  );
}


