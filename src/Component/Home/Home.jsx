import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Project from "../Project/Project";
import HeroSection from "../HeroSection/HeroSection";
import Features from "../Features/Features.jsx";
import Contact from "../Contact/Contact";
import About from "../About/About";

function Home() {
  return (
    <>
   
      <Hero />
      <About />
      <Features />
      <Services />
      <HeroSection />
      <Project limit={6} />
      <Contact />
    </>
  );
}

export default Home;
