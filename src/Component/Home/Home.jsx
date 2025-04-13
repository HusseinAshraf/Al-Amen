import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Project from "../Project/Project";
import HeroSection from "../HeroSection/HeroSection";
import Features from "../Features/Features.jsx";
import Contact from "../Contact/Contact";
import AboutSection from "../About/AboutSection.jsx";
import WhyUS from "../WhyUs/WhyUS.jsx";
import StatsSection from "../StatsSection/StatsSection.jsx";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection.jsx";
import PartnersSection from "../PartnersSection/PartnersSection .jsx";
import ElAMen from "../ElAMen/ElAMen.jsx";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyUS />
      <Features />
      <Services />
      <HeroSection />
      <ElAMen />
      <TestimonialsSection />
      <Project limit={6} />
      <StatsSection />
      <PartnersSection />
      <Contact />
    </>
  );
}

export default Home;
