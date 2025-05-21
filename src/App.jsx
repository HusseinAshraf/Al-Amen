import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";
import ScrollToTopButton from "./UI/ScrollToTopButton/ScrollToTopButton";
import ScrollToTop from "./UI/ScrollToTop/ScrollToTop";
import LoadingScreen from "./UI/LoadingScreen/LoadingScreen";

// Loading component
const LoadingSpinner = () => (
  <LoadingScreen />
);

// Lazy-loaded components with better error handling
const Home = lazy(() =>
  import("./Component/Home/Home").catch(() => ({
    default: () => <div>Error loading Home component</div>
  }))
);

const About = lazy(() =>
  import("./Component/About/About").catch(() => ({
    default: () => <div>Error loading About component</div>
  }))
);

const Features = lazy(() =>
  import("./Component/Features/Features").catch(() => ({
    default: () => <div>Error loading Features component</div>
  }))
);

const Services = lazy(() =>
  import("./Component/Services/Services").catch(() => ({
    default: () => <div>Error loading Services component</div>
  }))
);

const Project = lazy(() =>
  import("./Component/Project/Project").catch(() => ({
    default: () => <div>Error loading Project component</div>
  }))
);

const Contact = lazy(() =>
  import("./Component/Contact/Contact").catch(() => ({
    default: () => <div>Error loading Contact component</div>
  }))
);

const Faq = lazy(() =>
  import("./Component/Faq/Faq").catch(() => ({
    default: () => <div>Error loading FAQ component</div>
  }))
);

const History = lazy(() =>
  import("./Component/History/History").catch(() => ({
    default: () => <div>Error loading History component</div>
  }))
);

const Hero = lazy(() =>
  import("./Component/Founder/Founder").catch(() => ({
    default: () => <div>Error loading Founder component</div>
  }))
);

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="about/company" element={<About />} />
            <Route path="about/founder" element={<Hero />} />
            <Route path="features" element={<Features />} />
            <Route path="services" element={<Services />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faq />} />
            <Route path="history" element={<History />} />
            <Route path="hero" element={<Hero />} />
          </Route>
        </Routes>
      </Suspense>

      <ScrollToTopButton />
    </Router>
  );
}

export default App;