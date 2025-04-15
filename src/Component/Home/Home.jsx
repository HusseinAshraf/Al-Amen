import React, { useState, useEffect } from "react";
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
import LoadingScreen from "../../UI/LoadingScreen/LoadingScreen";
import ServicesSection from "../Services/ServicesSection.jsx";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Hero />
          <AboutSection />
          <WhyUS />
          <Features />
          <ServicesSection/>
          <HeroSection />
          <ElAMen />
          <TestimonialsSection />
          <Project limit={6} />
          <StatsSection />
          <PartnersSection />
          <Contact />
        </>
      )}
    </>
  );
}

export default Home;
