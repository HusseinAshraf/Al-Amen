import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Features from "./Component/Features/Features";
import Services from "./Component/Services/Services";
import Project from "./Component/Project/Project";
import Layout from "./Layout/Layout";
import ScrollToTopButton from "./UI/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />} />
          <Route path="services" element={<Services />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <ScrollToTopButton /> 
    </Router>
  );
}

export default App;
