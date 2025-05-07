import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/image/logo1.png";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/about", label: "من نحن" },
    { to: "/features", label: "مميزاتنا" },
    { to: "/services", label: "خدماتنا" },
    { to: "/project", label: "أعمالنا" },
    { to: "/contact", label: "اتصل بنا" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-green-600 bg-opacity-95 backdrop-blur-md shadow-xl z-50" dir="rtl">
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
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Links */}
        <div
          className={`${menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
            } md:opacity-100 md:translate-y-0 md:pointer-events-auto
          absolute md:static top-full right-0 left-0 bg-green-700 md:bg-transparent transition-all duration-300 ease-in-out z-40 md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6 p-4 md:p-0 font-semibold text-white">
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
