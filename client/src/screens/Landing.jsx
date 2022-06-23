import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Products from "../components/Sections/Products";
import Footer from "../components/Sections/Footer"
import FAQ from "../components/Sections/FAQ";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Products />
      <FAQ />
      <Footer />
    </>
  );
}


