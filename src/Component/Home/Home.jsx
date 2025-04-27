import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import Project from "../Project/Project";
// import HeroSection from "../HeroSection/HeroSection";
import Features from "../Features/Features.jsx";
import Contact from "../Contact/Contact";
import AboutSection from "../About/AboutSection.jsx";
import WhyUS from "../WhyUs/WhyUS.jsx";
import StatsSection from "../StatsSection/StatsSection.jsx";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection.jsx";
import PartnersSection from "../PartnersSection/PartnersSection .jsx";
import LoadingScreen from "../../UI/LoadingScreen/LoadingScreen";
import ServicesSection from "../Services/ServicesSection.jsx";
import ElAmen from "../ElAmen/ElAmen.jsx";
import PlantsTestimonials from "../PlantsTestimonials/PlantsTestimonials.jsx";


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
          <ServicesSection />
          {/* <HeroSection /> */}
           <PlantsTestimonials/>
          <ElAmen/>
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
