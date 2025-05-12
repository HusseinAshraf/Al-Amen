import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Hero from "../Founder/Founder.jsx";
import Project from "../Project/Project";
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
import { Helmet } from "react-helmet";
import HeroSlider from "../HeroSlider/HeroSlider.jsx";

function Home() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    window.document.title = "الأمين لاندسكيب - حلول زراعة، لاندسكيب، وهاردسكيب متكاملة";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: whyUsRef, inView: whyUsInView } = useInView({ triggerOnce: true });
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true });
  const { ref: plantsTestimonialsRef, inView: plantsTestimonialsInView } = useInView({ triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const { ref: partnersRef, inView: partnersInView } = useInView({ triggerOnce: true });

  return (
    <>
      <Helmet>
        <title>الأمين لاندسكيب - حلول زراعة، لاندسكيب، وهاردسكيب متكاملة</title>
        <meta
          name="description"
          content="الأمين لاندسكيب تقدم حلول متكاملة في الزراعة، اللاند سكيب، الهارد سكيب، وتوفير أفضل الخامات الزراعية بأسلوب احترافي وحديث."
        />
        <meta
          name="keywords"
          content="الأمين لاندسكيب, شركة زراعة, تنسيق حدائق, لاندسكيب, هاردسكيب, خامات زراعية, نجيل صناعي, تصميم حدائق, أنظمة ري"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="الأمين لاندسكيب | زراعة ولاندسكيب وهاردسكيب" />
        <meta
          property="og:description"
          content="رواد في تقديم حلول الزراعة واللاندسكيب مع تنفيذ الهاردسكيب وتوفير الخامات الزراعية بأعلى جودة."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="url_to_image.jpg" />
        <link rel="canonical" href="https://www.example.com/home" />
      </Helmet>

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* <Hero /> */}
          <HeroSlider/>
          <div ref={aboutRef} className={`section ${aboutInView ? 'fadeInUp' : ''}`}>
            <AboutSection />
          </div>
          <div ref={whyUsRef} className={`section ${whyUsInView ? 'fadeInUp' : ''}`}>
            <WhyUS />
          </div>
          <div ref={featuresRef} className={`section ${featuresInView ? 'fadeInUp' : ''}`}>
            <Features />
          </div>
          <div ref={servicesRef} className={`section ${servicesInView ? 'fadeInUp' : ''}`}>
            <ServicesSection />
          </div>
          <div ref={plantsTestimonialsRef} className={`section ${plantsTestimonialsInView ? 'fadeInUp' : ''}`}>
            <PlantsTestimonials />
          </div>
          <div ref={testimonialsRef} className={`section ${testimonialsInView ? 'fadeInUp' : ''}`}>
            <TestimonialsSection />
          </div>
          <div ref={statsRef} className={`section ${statsInView ? 'fadeInUp' : ''}`}>
            <StatsSection />
          </div>
          <div ref={partnersRef} className={`section ${partnersInView ? 'fadeInUp' : ''}`}>
            <PartnersSection />
          </div>
          <ElAmen />
          <Project limit={6} />
          <Contact />
        </>
      )}
    </>
  );
}

export default Home;
