import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12" dir="rtl">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-8 text-center md:text-right">
        {/* من نحن */}
        <div className="min-h-[180px]">
          <h3 className="text-xl font-bold mb-4 text-white">من نحن</h3>
          <p className="text-gray-200 text-sm leading-relaxed min-h-[100px]">
            في الأمين لاند سكيب نصنع مساحات خضراء تنبض بالجمال والحياة. نقدم خدمات تصميم وتنفيذ حدائق الفلل، الأماكن العامة والملاعب، مع توفير نباتات زينة وزهور وشبكات ري متطورة.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تابعنا على فيسبوك"
              className="text-white hover:text-gray-300 text-xl"
            >
              <FaFacebook aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تابعنا على إنستجرام"
              className="text-white hover:text-gray-300 text-xl"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تابعنا على لينكدإن"
              className="text-white hover:text-gray-300 text-xl"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* روابط الموقع */}
        <div className="min-h-[160px]">
          <h3 className="text-xl font-bold mb-4 text-white">لينكات</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-gray-200 hover:text-white">
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-gray-200 hover:text-white">
                الأسئلة الشائعة
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-gray-200 hover:text-white">
                تاريخنا
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-200 hover:text-white">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        {/* الخدمات */}
        <div className="min-h-[160px]">
          <h3 className="text-xl font-bold mb-4 text-white">الخدمات</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>تصميم حدائق الفلل</li>
            <li>توفير النباتات</li>
            <li>أعمال صيانة الحدائق</li>
            <li>شبكات الري</li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div className="min-h-[160px]">
          <h3 className="text-xl font-bold mb-4 text-white">تواصل معنا</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start text-gray-200">
              <FaPhone className="ml-2" aria-hidden="true" />
              <span>01001243084 - 01114423163</span>
            </li>
            <li className="flex items-center justify-center md:justify-start text-gray-200">
              <FaEnvelope className="ml-2" aria-hidden="true" />
              <span>amein2011@yahoo.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-300 text-xs mt-8 border-t border-gray-800 pt-4 h-20">
        El Amen Landscape © 2025 جميع الحقوق محفوظة | Hussein Ashraf
      </div>
    </footer>
  );
}

export default Footer;