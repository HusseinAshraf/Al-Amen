import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Features from "../Features/Features.jsx";
import AboutSection from "../About/AboutSection.jsx";
import WhyUS from "../WhyUs/WhyUS.jsx";
import StatsSection from "../StatsSection/StatsSection.jsx";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection.jsx";
import PartnersSection from "../PartnersSection/PartnersSection .jsx";
import ServicesSection from "../Services/ServicesSection.jsx";
import ElAmen from "../ElAmen/ElAmen.jsx";
import PlantsTestimonials from "../PlantsTestimonials/PlantsTestimonials.jsx";
import { Helmet } from "react-helmet";
import HeroSlider from "../HeroSlider/HeroSlider.jsx";
import ContactSection from "../Contact/ContactSection.jsx";
import FeaturedProjectsSection from "../Project/FeaturedProjectsSection.jsx";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    window.document.title = t("home.title");
  }, [t]);

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
        <title>{t("home.title")}</title>
        <meta name="description" content={t("home.description")} />
        <meta name="keywords" content={t("home.keywords")} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={t("home.ogTitle")} />
        <meta property="og:description" content={t("home.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="url_to_image.jpg" />
        <link rel="canonical" href="https://www.example.com/home" />
      </Helmet>

      <>
        <HeroSlider />
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
        <FeaturedProjectsSection />
        <ContactSection />
      </>
    </>
  );
}

export default Home;
