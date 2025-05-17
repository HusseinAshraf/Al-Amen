import React from "react";
import { motion } from "framer-motion";
import { Leaf, Paintbrush, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <meta name="description" content={t("about.meta.description")} />
        <meta name="keywords" content={t("about.meta.keywords")} />
        <meta name="author" content={t("about.meta.author")} />
        <meta property="og:title" content={t("about.meta.ogTitle")} />
        <meta property="og:description" content={t("about.meta.ogDescription")} />
      </Helmet>

      <section
        className="bg-white py-16 px-4 sm:px-6 md:px-16"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        lang={i18n.language}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div className={` md:text-${i18n.language === "ar" ? "right" : "left "} space-y-4`}>
            <h1 className="text-green-700 font-semibold text-base sm:text-lg">
              {t("aboutSection.title")}
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              {t("aboutSection.subtitle")}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              {t("aboutSection.description")}
            </p>
            <Link
              to="/about"
              className="inline-block mt-6 bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition shadow-md text-base sm:text-lg"
              aria-label={t("aboutSection.learnMoreAria")}
            >
              {t("aboutSection.learnMore")}
            </Link>
          </div>

          {/* الصورة والدائرة المتحركة */}
          <div className="relative flex justify-center">

            <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-green-200 shadow-lg">
              <img
                src="https://ik.imagekit.io/hussein74/Al%20Amen/about-1.webp?updatedAt=1745447747249"
                alt={t("about.imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>

            {/* دائرة متحركة */}
            <motion.div
              className="absolute w-64 h-64 sm:w-[300px] sm:h-[300px] flex items-center justify-center rounded-full border-4 border-green-200"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              {/* العناصر الثلاثة */}
              <div className="absolute w-full h-full flex items-center justify-center rounded-full">
                {/* عنصر 1 */}
                <div
                  className="absolute top-0 bg-white shadow-lg p-4 sm:p-5 rounded-full flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                  aria-label={t("aboutSection.expertLabel")}
                >
                  <Leaf className="text-green-600 w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
                  <p className="text-xs text-gray-700 mt-2 font-medium text-center">
                    {t("aboutSection.expertText")}
                  </p>
                </div>

                {/* عنصر 2 */}
                <div
                  className="absolute bottom-0 left-0 bg-white shadow-lg p-4 sm:p-5 rounded-full flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                  aria-label={t("aboutSection.innovativeLabel")}
                >
                  <Paintbrush className="text-green-600 w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
                  <p className="text-xs text-gray-700 mt-2 font-medium text-center">
                    {t("aboutSection.innovativeText")}
                  </p>
                </div>

                {/* عنصر 3 */}
                <div
                  className="absolute bottom-0 right-0 bg-white shadow-lg p-4 sm:p-5 rounded-full flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                  aria-label={t("aboutSection.inspiringLabel")}
                >
                  <Users className="text-green-600 w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
                  <p className="text-xs text-gray-700 mt-2 font-medium text-center">
                    {t("aboutSection.inspiringText")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
