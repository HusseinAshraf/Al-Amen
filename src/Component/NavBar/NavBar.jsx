import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo1.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
 

  return (
    <nav className="fixed top-0 w-full bg-green-500 bg-opacity-90 backdrop-blur-md shadow-lg z-50" dir="rtl">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={logo} className="h-14 w-14" alt="Logo" />
          <span className="text-2xl font-semibold text-white ml-3">الأمين لاند سكيب</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <div className={`${menuOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 rtl:space-x-reverse text-white font-medium p-4 md:p-0 mt-4 md:mt-0 bg-gray-800 md:bg-transparent rounded-lg md:rounded-none">
            <li className="relative">
              <Link to="/about" className="block py-2 px-4 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-400 transition-all">من نحن</Link>
            </li>
            <li className="relative">
              <Link to="/features" className="block py-2 px-4 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-400 transition-all">مميزاتنا</Link>
            </li>
            <li className="relative">
              <Link to="/services" className="block py-2 px-4 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-400 transition-all">خدماتنا</Link>
            </li>
            <li className="relative">
              <Link to="/project" className="block py-2 px-4 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-400 transition-all">أعمالنا</Link>
            </li>
            <li className="relative">
              <Link to="/contact" className="block py-2 px-4 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-400 transition-all">اتصل بنا</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
