import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Project from "../Project/Project";
import HeroSection from "../HeroSection/HeroSection";
import Features from "../Features/Features.jsx";
import Contact from "../Contact/Contact";
import About from "../About/About";
import AboutSection from "../About/AboutSection.jsx";
import WhyUS from "../WhyUs/WhyUS.jsx";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyUS />
      <Features />
      <Services />
      <HeroSection />
      <Project limit={6} />
      <Contact />
    </>
  );
}

export default Home;
