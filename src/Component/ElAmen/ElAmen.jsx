import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function ElAmen() {
  const { t } = useTranslation();
  const currentLang = i18n.language;
  const isRTL = currentLang === "ar";

  const [videoLoaded, setVideoLoaded] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const timer = setTimeout(() => {
        if (iframeRef.current) {
          const currentSrc = iframeRef.current.src;
          iframeRef.current.src = `${currentSrc}&autoplay=1`;
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [videoLoaded]);

  const handleIframeLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang: currentLang, dir: isRTL ? "rtl" : "ltr" }}>
        <meta name="description" content={t("elamen.meta.description")} />
        <meta name="keywords" content={t("elamen.meta.keywords")} />
        <meta name="author" content={t("elamen.meta.author")} />
        <meta property="og:title" content={t("elamen.meta.ogTitle")} />
        <meta property="og:description" content={t("elamen.meta.ogDescription")} />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/amen-landscape.jpg?updatedAt=1745447747249"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/el-amen" />
      </Helmet>

      <section
        className="py-16 px-4 sm:px-6 md:px-16 bg-gradient-to-b from-green-50 to-white"
        dir={i18n.dir()}
        aria-labelledby="elamen-title"
      >
        <div
          className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isRTL ? "md:flex-row-reverse" : ""
            }`}
        >
          {/* النص */}
          <header
            className={`${isRTL ? "md:text-right" : "md:text-left"
              } text-center space-y-4 w-full`}
          >
            <h2
              id="elamen-title"
              className="text-3xl sm:text-4xl font-bold text-green-900 leading-snug"
            >
              {t("elamen.title")}
              <br />
              <span className="text-green-600 text-2xl font-semibold block mt-2">
                {t("elamen.subtitle")}
              </span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {t("elamen.description.part1")}{" "}
              <strong className="text-green-800 font-semibold">
                {t("elamen.companyName")}
              </strong>{" "}
              {t("elamen.description.part2")}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow transition duration-300"
            >
              {t("elamen.contactBtn")}
            </Link>
          </header>

          {/* الفيديو */}
          <figure className="relative flex justify-center w-full">
            <div className="w-full max-w-xl">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-green-200">
                <iframe
                  ref={iframeRef}
                  className="w-full h-64 md:h-96 rounded-2xl"
                  src="https://www.youtube.com/embed/n84AqxOodKg?rel=0&mute=1&enablejsapi=1"
                  title={t("elamen.videoTitle")}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
                  allowFullScreen
                  loading="lazy"
                  onLoad={handleIframeLoad}
                ></iframe>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}

export default ElAmen;
