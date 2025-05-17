import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaUsers, FaCog, FaClipboardCheck } from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import BackGround from "../../UI/BackGround/BackGround";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Features() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();
  const isFeaturesPage = location.pathname === "/features";

  const featuresData = [
    {
      icon: FaDollarSign,
      title: t("features.items.0.title"),
      description: t("features.items.0.description"),
    },
    {
      icon: FaUsers,
      title: t("features.items.1.title"),
      description: t("features.items.1.description"),
    },
    {
      icon: FaCog,
      title: t("features.items.2.title"),
      description: t("features.items.2.description"),
    },
    {
      icon: FaClipboardCheck,
      title: t("features.items.3.title"),
      description: t("features.items.3.description"),
    },
  ];

  return (
    <>
      {isFeaturesPage && (
        <Helmet>
          <html lang={currentLang} />
          <title>{t("features.meta.title")}</title>
          <meta name="description" content={t("features.meta.description")} />
          <meta name="keywords" content={t("features.meta.keywords")} />
          <meta name="author" content={t("features.meta.author")} />
          <meta property="og:title" content={t("features.meta.ogTitle")} />
          <meta property="og:description" content={t("features.meta.ogDescription")} />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/hussein74/Al%20Amen/features-image.jpg?updatedAt=1745447747249"
          />
        </Helmet>
      )}

      <BackGround>
        <section
          id="features"
          aria-label={t("features.sectionAriaLabel")}
          className="py-20 px-4 sm:px-8 lg:px-12"
          dir={currentLang === "ar" ? "rtl" : "ltr"}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14 pt-7">
              <TitleWithLeaves title={t("features.title")} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
              {featuresData.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white p-8 rounded-2xl border-t-4 border-green-600 transition-all duration-300 group hover:shadow-[0_8px_24px_rgba(34,197,94,0.25)] hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* تأثير خلفي عند التحويم */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-green-200/10 to-transparent rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                  {/* الأيقونة */}
                  <div
                    className="relative z-10 w-16 h-16 mx-auto mb-6 bg-green-100 text-green-700 flex items-center justify-center rounded-full shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-green-600 group-hover:text-white"
                    aria-hidden="true"
                  >
                    <feature.icon className="text-2xl" />
                  </div>

                  {/* العنوان */}
                  <h3 className="relative z-10 text-xl font-bold text-green-800 mb-3 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>

                  {/* الوصف */}
                  <p className="relative z-10 text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </BackGround>
    </>
  );
}

export default Features;
