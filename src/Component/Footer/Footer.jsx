import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();


  // تعيين اتجاه النص حسب اللغة الحالية
  const direction = i18n.dir();


  return (
    <footer className="bg-green-900 text-white py-12" dir={direction}>
      <div
        className={`container mx-auto grid md:grid-cols-4 gap-8 px-8 text-center ${direction === "rtl" ? "md:text-right" : "md:text-left"
          }`}
      >
        {/* من نحن */}
        <div className="min-h-[180px]">
          <h3 className="text-xl font-bold mb-4 text-white">{t("footer.aboutUs.title")}</h3>
          <p className="text-gray-200 text-sm leading-relaxed min-h-[100px]">
            {t("footer.aboutUs.description")}
          </p>
          <div
            className={`flex justify-center md:justify-start ${direction === "rtl" ? "space-x-4" : " space-x-4"
              } mt-4`}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("footer.social.facebook")}
              className="text-white hover:text-gray-300 text-xl"
            >
              <FaFacebook aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("footer.social.instagram")}
              className="text-white hover:text-gray-300 text-xl"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("footer.social.linkedin")}
              className="text-white hover:text-gray-300 text-xl"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* روابط الموقع */}
        <div className="min-h-[160px]">
          <h3 className="text-xl font-bold mb-4 text-white">{t("footer.links.title")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-gray-200 hover:text-white">
                {t("footer.links.aboutUs")}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-gray-200 hover:text-white">
                {t("footer.links.faq")}
              </Link>
            </li>
            <li>
              <Link to="/history" className="text-gray-200 hover:text-white">
                {t("footer.links.history")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-200 hover:text-white">
                {t("footer.links.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* الخدمات */}
        <div className="min-h-[160px]">
          <h3 className="text-xl font-bold mb-4 text-white">{t("footer.services.title")}</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>{t("footer.services.villaGardens")}</li>
            <li>{t("footer.services.plantsSupply")}</li>
            <li>{t("footer.services.gardenMaintenance")}</li>
            <li>{t("footer.services.irrigationNetworks")}</li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div className="min-h-[160px]">
          <h3 className="text-xl font-bold mb-4 text-white">{t("footer.contact.title")}</h3>
          <ul className="space-y-2 text-sm">
            <li
              className={`flex items-center justify-center ${direction === "rtl" ? "md:justify-start" : "md:justify-start"
                } text-gray-200`}
            >
              <FaPhone className={`${direction === "rtl" ? "ml-2" : "mr-2"}`} aria-hidden="true" />
              <span>{t("footer.contact.phone")}</span>
            </li>
            <li
              className={`flex items-center justify-center ${direction === "rtl" ? "md:justify-start" : "md:justify-start"
                } text-gray-200`}
            >
              <FaEnvelope
                className={`${direction === "rtl" ? "ml-2" : "mr-2"}`}
                aria-hidden="true"
              />
              <span>amein2011@yahoo.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-300 text-xs mt-8 border-t border-gray-800 pt-4 h-20">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}

export default Footer;
