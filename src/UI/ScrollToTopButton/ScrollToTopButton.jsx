import { useState, useEffect } from "react";
import { FaLeaf } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="العودة إلى الأعلى"
      className={`fixed bottom-5 right-5 p-3 rounded-full bg-green-600 text-white shadow-lg transition-all duration-300 hover:bg-green-700 z-30 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        }`}
    >
      <FaLeaf size={22} aria-hidden="true" />
    </button>
  );
};

export default ScrollToTopButton;
