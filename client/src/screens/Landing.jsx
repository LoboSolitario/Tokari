import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Products from "../components/Sections/Products";
import Pricing from "../components/Sections/Pricing";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Products />
      <Pricing />
      <Footer />
    </>
  );
}


