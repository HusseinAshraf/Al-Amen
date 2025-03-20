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
    <footer className="bg-green-900 text-white py-12" dir="rtl">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-8 text-center md:text-right">
        {/* من نحن */}
        <div>
          <h3 className="text-xl font-bold mb-4">من نحن</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            في الأمين لاند سكيب نصنع مساحات خضراء تنبض بالجمال والحياة. نقدم خدمات
            تصميم وتنفيذ حدائق الفلل، الأماكن العامة والملاعب، مع توفير نباتات
            زينة وزهور وشبكات ري متطورة.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-400 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-gray-400 text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-400 text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* روابط الموقع */}
        <div>
          <h3 className="text-xl font-bold mb-4">لينكات</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-gray-400">
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-gray-400">
                الأسئلة الشائعة
              </Link>
            </li>
            <li>
              <Link to="/history" className="hover:text-gray-400">
                تاريخنا
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        {/* الخدمات */}
        <div>
          <h3 className="text-xl font-bold mb-4">الخدمات</h3>
          <ul className="space-y-2 text-sm">
            <li>تصميم حدائق الفلل</li>
            <li>توفير النباتات</li>
            <li>أعمال صيانة الحدائق</li>
            <li>شبكات الري</li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div>
          <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start">
              <FaPhone className="ml-2" /> 01011115940
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="ml-2" /> info@greenlife-landscaping.com
            </li>
          </ul>
        </div>
      </div>

      
      <div className="text-center text-gray-400 text-xs mt-8 border-t border-gray-800 pt-4">
        El Amen LandScaip © 2025 All Rights Reserved | By Hussein Ashraf
      </div>
    </footer>
  );
}

export default Footer;
