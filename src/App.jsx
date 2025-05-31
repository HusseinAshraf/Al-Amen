import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
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

// مكون لمعالجة الـ direction مع تحديث تلقائي
function DirectionController() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const setDirection = () => {
      const lang = localStorage.getItem("language") || "ar";
      const dir = lang === "ar" ? "rtl" : "ltr";

      // تطبيق الـ direction على العناصر الرئيسية
      document.documentElement.dir = dir;
      document.documentElement.lang = lang;
      document.body.dir = dir;

      // إضافة class للـ body حسب الاتجاه
      document.body.classList.remove('rtl', 'ltr');
      document.body.classList.add(dir);

      // التأكد من تطبيق i18n
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    };

    // تطبيق فوري
    setDirection();

  }, [location.pathname, location.key, i18n.language]);

  // مراقبة تغييرات اللغة من i18n مباشرة
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      const dir = lng === "ar" ? "rtl" : "ltr";

      document.documentElement.dir = dir;
      document.documentElement.lang = lng;
      document.body.dir = dir;

      document.body.classList.remove('rtl', 'ltr');
      document.body.classList.add(dir);

      // حفظ اللغة الجديدة
      localStorage.setItem("language", lng);
    };

    // الاستماع لتغييرات اللغة
    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return null; // هذا المكون مسؤول فقط عن الـ direction
}

function AppContent() {
  return (
    <>
      <DirectionController />
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
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;