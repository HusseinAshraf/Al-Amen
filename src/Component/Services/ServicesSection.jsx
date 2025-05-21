import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../i18n";

const ServicesSection = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;

  const [videoVisible, setVideoVisible] = useState(false);

  const handleVideoClick = () => {
    setVideoVisible(true);
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 md:px-16 bg-gradient-to-b from-green-50 to-white"
      dir={i18n.dir()}
      aria-label={t("servicesSection.ariaLabel")}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <header className={`${currentLang === "ar" ? "md:text-right" : "md:text-left"} text-center space-y-4`}>
          <h4 className="text-green-700 font-semibold text-base sm:text-lg">
            {t("servicesSection.introLabel")}
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            {t("servicesSection.title")}
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            {t("servicesSection.description")}
          </p>
          <Link
            to="/services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition duration-300"
          >
            {t("servicesSection.button")}
          </Link>
        </header>

        <figure className="relative flex justify-center">
          <div className="w-full max-w-xl">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-green-200">
              {videoVisible ? (
                <iframe
                  className="w-full h-64 md:h-96 rounded-2xl"
                  src="https://www.youtube-nocookie.com/embed/Gl4unWQKTr4?rel=0&autoplay=1"
                  title={t("servicesSection.videoTitle")}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <div
                  onClick={handleVideoClick}
                  className="cursor-pointer relative w-full h-64 md:h-96 bg-black group"
                >
                  <img
                    src={`https://img.youtube.com/vi/Gl4unWQKTr4/hqdefault.jpg`}
                    alt="YouTube thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center transition">
                    <svg className="w-16 h-16 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default ServicesSection;
