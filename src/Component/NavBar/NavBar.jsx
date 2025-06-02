import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();
  const aboutRef = useRef();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language || "ar";

  const navLinks = [
    { to: "/features", label: t("Features") },
    { to: "/services", label: t("ourServices") },
    { to: "/project", label: t("Projects") },
    { to: "/contact", label: t("Contact") },
  ];

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    const newDir = newLang === "ar" ? "rtl" : "ltr";

    // تحديث i18n
    i18n.changeLanguage(newLang);

    // حفظ اللغة الجديدة
    localStorage.setItem("language", newLang);

    // تطبيق الاتجاه فوراً
    document.documentElement.lang = newLang;
    document.documentElement.dir = newDir;
    document.body.dir = newDir;

    // إضافة/إزالة classes
    document.body.classList.remove('rtl', 'ltr');
    document.body.classList.add(newDir);

    // إجبار إعادة الرسم
    document.body.style.display = 'none';
    document.body.offsetHeight; // trigger reflow
    document.body.style.display = '';

    // لا نحتاج reload بعد الآن!
    // window.location.reload(); ← تم إزالة هذا السطر
  };

  // التأكد من اللغة الصحيحة عند التحميل
  useEffect(() => {
    const lang = localStorage.getItem("language") || "ar";
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-green-800 bg-opacity-95 backdrop-blur-md shadow-xl z-50">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://ik.imagekit.io/hussein74/Al%20Amen/logo.png?updatedAt=1745446702466&tr=w-56,h-56"
            className="h-12 w-12 md:h-14 md:w-14"
            alt="Logo"
          />
          <span className="text-xl font-bold text-white">{t("brandName")}</span>
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white transition-transform duration-200 hover:scale-110 focus:outline-none"
          aria-label="قائمة التنقل"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu */}
        <div
          className={`${menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
            } md:opacity-100 md:translate-y-0 md:pointer-events-auto
          absolute md:static top-full right-0 left-0 bg-green-900 md:bg-transparent transition-all duration-300 ease-in-out z-40 md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6 p-4 md:p-0 font-semibold text-white items-start md:items-center">
            {/* من نحن */}
            <li ref={aboutRef} className="relative w-full md:w-auto">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 py-2 px-4 w-full text-right rounded-lg transition-all duration-300 hover:bg-green-700 hover:text-yellow-300 cursor-pointer"
                aria-expanded={aboutOpen}
                aria-controls="about-menu"
              >
                {t("About")}
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <ul
                id="about-menu"
                className={`transition-all duration-300 ${aboutOpen ? "block" : "hidden"
                  } w-full md:w-40 bg-green-900 bg-opacity-95 rounded-lg shadow-md z-50 md:absolute md:right-0 md:mt-2`}
              >
                <li>
                  <Link
                    to="/about/company"
                    className={`block px-4 py-2 hover:bg-green-800 transition ${location.pathname === "/about/company"
                      ? "text-yellow-300"
                      : "text-white"
                      }`}
                    onClick={() => {
                      setMenuOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    {t("Company")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/founder"
                    className={`block px-4 py-2 hover:bg-green-800 transition ${location.pathname === "/about/founder"
                      ? "text-yellow-300"
                      : "text-white"
                      }`}
                    onClick={() => {
                      setMenuOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    {t("Founder")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* روابط أخرى */}
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-green-700 ${isActive
                      ? "text-yellow-300 underline underline-offset-6 decoration-2 "
                      : "hover:text-yellow-300"
                      }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* زر تغيير اللغة */}
            <li className="mt-2 md:mt-0">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 rounded-full border-2 border-yellow-400 bg-yellow-400 text-green-900 font-bold px-5 py-1.5 text-sm shadow-md transition-all duration-300 hover:bg-yellow-500 hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
                aria-label={
                  currentLang === "ar" ? "Switch to English" : "التبديل إلى العربية"
                }
              >
                <span className="text-lg">{currentLang === "ar" ? "🇺🇸" : "AR"}</span>
                <span className="whitespace-nowrap">
                  {currentLang === "ar" ? "English" : "عربي"}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;