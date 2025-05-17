import React from "react";
import { Leaf, Wrench, Target, Sprout } from "lucide-react";
import { Helmet } from "react-helmet";
import { useTranslation, Trans } from "react-i18next";

function WhyUS() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const features = [
    {
      icon: <Leaf className="text-green-500 w-8 h-8" />,
      title: t("whyus.features.innovation.title"),
      desc: t("whyus.features.innovation.desc"),
    },
    {
      icon: <Wrench className="text-green-500 w-8 h-8" />,
      title: t("whyus.features.services.title"),
      desc: t("whyus.features.services.desc"),
    },
    {
      icon: <Target className="text-green-500 w-8 h-8" />,
      title: t("whyus.features.commitment.title"),
      desc: t("whyus.features.commitment.desc"),
    },
    {
      icon: <Sprout className="text-green-500 w-8 h-8" />,
      title: t("whyus.features.vision.title"),
      desc: t("whyus.features.vision.desc"),
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content={t("whyus.meta.description")} />
        <meta name="keywords" content={t("whyus.meta.keywords")} />
        <meta property="og:title" content={t("whyus.meta.ogTitle")} />
        <meta property="og:description" content={t("whyus.meta.ogDescription")} />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/whu.webp?updatedAt=1745446710919"
        />
        <meta property="og:url" content="https://example.com/why-us" />
      </Helmet>

      <section className="bg-gray-100 py-12 px-4 md:px-8" dir={currentLang === "ar" ? "rtl" : "ltr"}>
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className={`${currentLang === "ar" ? "text-right" : "text-left"} space-y-4`}>
            <h3 className="text-green-600 text-lg font-semibold">
              {t("whyus.heading")}
            </h3>
            <h2 className="text-3xl font-bold text-gray-800">
              {t("whyus.title")}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              <Trans i18nKey="whyus.description" components={{ 1: <strong /> }} />
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-sm">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  role="group"
                  aria-roledescription={item.title}
                >
                  <div>{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="https://ik.imagekit.io/hussein74/Al%20Amen/whu.webp?updatedAt=1745446710919"
              alt={t("whyus.imageAlt")}
              className="w-full rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUS;
