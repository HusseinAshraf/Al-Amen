import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/image/logo1.png";
import { Menu, X, ChevronDown } from "lucide-react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();
  const aboutRef = useRef();

  const navLinks = [
    { to: "/features", label: "مميزاتنا" },
    { to: "/services", label: "خدماتنا" },
    { to: "/project", label: "أعمالنا" },
    { to: "/contact", label: "اتصل بنا" },
  ];

  // إغلاق الدروب داون عند النقر خارجه
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
    <nav
      className="fixed top-0 w-full bg-green-600 bg-opacity-95 backdrop-blur-md shadow-xl z-50"
      dir="rtl"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src={logo} className="h-12 w-12 md:h-14 md:w-14" alt="Logo" />
          <span className="text-xl font-bold text-white">الأمين لاند سكيب</span>
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
          className={`${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
            } md:opacity-100 md:translate-y-0 md:pointer-events-auto
          absolute md:static top-full right-0 left-0 bg-green-700 md:bg-transparent transition-all duration-300 ease-in-out z-40 md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6 p-4 md:p-0 font-semibold text-white">

            {/* من نحن */}
            <li ref={aboutRef} className="relative w-full md:w-auto">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 py-2 px-4 w-full text-right rounded-lg transition-all duration-300 hover:scale-105 hover:text-yellow-300 cursor-pointer"
                aria-expanded={aboutOpen}
                aria-controls="about-menu"
              >
                من نحن
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              <ul
                id="about-menu"
                className={`transition-all duration-300 ${aboutOpen ? "block" : "hidden"} w-full md:w-40 
                bg-green-800 bg-opacity-95 rounded-lg shadow-md z-50 md:absolute md:right-0 md:mt-2`}
              >
                <li>
                  <Link
                    to="/about/company"
                    className={`block px-4 py-2 hover:bg-green-600 transition ${location.pathname === "/about/company" ? "text-yellow-300" : ""
                      }`}
                    onClick={() => {
                      setMenuOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    عن الشركة
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/founder"
                    className={`block px-4 py-2 hover:bg-green-600 transition ${location.pathname === "/about/founder" ? "text-yellow-300" : ""
                      }`}
                    onClick={() => {
                      setMenuOpen(false);
                      setAboutOpen(false);
                    }}
                  >
                    عن المؤسس
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
                    className={`block py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105  ${isActive
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
