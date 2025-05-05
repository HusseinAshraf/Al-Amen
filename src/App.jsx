import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  lazy } from "react";
import Layout from "./Layout/Layout";
import ScrollToTopButton from "./UI/ScrollToTopButton/ScrollToTopButton";
import ScrollToTop from "./UI/ScrollToTop/ScrollToTop";

// Lazy-loaded components
const Home = lazy(() => import("./Component/Home/Home"));
const About = lazy(() => import("./Component/About/About"));
const Features = lazy(() => import("./Component/Features/Features"));
const Services = lazy(() => import("./Component/Services/Services"));
const Project = lazy(() => import("./Component/Project/Project"));
const Contact = lazy(() => import("./Component/Contact/Contact"));
const Faq = lazy(() => import("./Component/Faq/Faq"));
const History = lazy(() => import("./Component/History/History"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="features" element={<Features />} />
            <Route path="services" element={<Services />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
            <Route path="history" element={<History />} />
          </Route>
        </Routes>
      
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
