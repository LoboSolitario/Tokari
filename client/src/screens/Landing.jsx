import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Basket from "../components/Sections/Basket";
import Pricing from "../components/Sections/Pricing";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Basket />
      <Pricing />
      <Footer />
    </>
  );
}


