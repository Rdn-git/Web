"use client";
import React from "react";
import HeroSlider from "../../components/HeroSlider";
import AboutSlider from "../../components/AboutSlider";
import Footer from "../../components/Footer";

const Home = () => {
  // Correctly define the component with arrow function syntax
  return (
    <>
      <div className="bg-blue-500 text-white p-4">Hello, Tailwind CSS!</div>

      <HeroSlider />
      <AboutSlider />
      <Footer />
    </>
  );
};

export default Home; // Export the component properly
