import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-green-900 to-green-700 text-white py-10"
      dir="rtl"
    >
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-8">
        {/* قسم معلومات الشركة */}
        <div>
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">
            شركة الأمين لاند سكيب
          </h2>
          <p className="text-gray-200 leading-relaxed">
            شركة متخصصة في الزراعة وتنسيق الحدائق، نقدم حلولًا بيئية مستدامة
            ومبتكرة.
          </p>
        </div>

        {/* روابط التنقل */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            لتفاصيل أكثر
          </h3>
          <ul className="space-y-3 text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                عن الشركة
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                اتصل بنا
              </Link>
            </li>
          </ul>
        </div>

        {/* معلومات التواصل */}
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            تواصل معنا
          </h3>
          <div className="space-y-3 text-lg">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-400 ml-3 text-xl" />
              <span>القاهرة، مصر</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-yellow-400 ml-3 text-xl" />
              <span>+20 123 456 7890</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-yellow-400 ml-3 text-xl" />
              <span>info@landscape-eg.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* وسائل التواصل الاجتماعي */}
      <div className="border-t border-gray-500 mt-8 pt-6 text-center">
        <div className="flex justify-center space-x-6  text-2xl">
          <a
            href="#"
            className="text-white hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-gray-300 mt-6 text-sm">
          © 2025 جميع الحقوق محفوظة لشركة الأمين لاند سكيب
        </p>
      </div>
    </footer>
  );
}

export default Footer;
