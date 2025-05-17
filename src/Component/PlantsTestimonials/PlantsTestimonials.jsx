import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

// بيانات النباتات (ترجم أسماء النباتات في ملف الترجمة)
const plantsData = [
  { id: 1, nameKey: "plants.pineappleCactus", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B5%D8%A8%D8%A7%D8%B1%20%D8%A7%D9%86%D8%A7%D9%86%D8%A7%D8%B3.jpg?updatedAt=1745446719675" },
  { id: 2, nameKey: "plants.ficusB", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%81%D9%8A%D9%83%D8%B3%20%D8%A8%D9%86%D8%AC%D8%A7%D9%85%D9%8A%D9%86%D8%A7.jpg?updatedAt=1745446722376" },
  { id: 3, nameKey: "plants.dorentaLemoni", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AF%D9%88%D8%B1%D9%86%D8%AA%D8%A7%20%D9%84%D9%8A%D9%85%D9%88%D9%86%D9%8A.jpg?updatedAt=1745446719434" },
  { id: 4, nameKey: "plants.spiralCypress", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B3%D8%B1%D9%88%20%D8%AD%D9%84%D8%B2%D9%88%D9%86%D9%8A%20%D9%88%20%D9%83%D9%88%D8%B1.jpg?updatedAt=1745446717816" },
  { id: 5, nameKey: "plants.hibiscus", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%87%D9%8A%D8%A8%D8%B3%D9%83%D8%B3.jpg?updatedAt=1745446723288" },
  { id: 6, nameKey: "plants.jasmineShamsi", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AC%D9%87%D9%86%D9%85%D9%8A%D8%A9%20%D8%B4%D9%85%D8%A7%D8%B3%D9%8A.jpg?updatedAt=1745446719565" },
];

function PlantsTestimonials() {
  const { t, i18n } = useTranslation();
  const [selectedPlant, setSelectedPlant] = useState(null);
  const isRTL = i18n.dir() === "rtl";

  useEffect(() => {
    const pagination = document.querySelector(".custom-pagination");
    if (pagination) {
      pagination.classList.add("swiper-pagination-bullets");
    }

    // إغلاق المودال بزر Escape
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedPlant(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={t("plantsMeta.description")}
        />
        <meta
          name="keywords"
          content={t("plantsMeta.keywords")}
        />
        <meta
          property="og:title"
          content={t("plantsMeta.title")}
        />
        <meta
          property="og:description"
          content={t("plantsMeta.description")}
        />
        <meta
          property="og:image"
          content={plantsData[0].image}
        />
      </Helmet>

      <section
        className="py-20 bg-gradient-to-b from-green-50 to-white text-center relative"
        aria-label={t("plantsSection.ariaLabel")}
        dir={i18n.dir()}
      >
        {/* العنوان */}
        <h3 className="text-green-700 text-base md:text-xl font-semibold mb-2">
          {t("plantsSection.subtitle")}
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          {t("plantsSection.title")}
        </h2>

        {/* سلايدر Swiper */}
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <Swiper
            key={i18n.dir()}
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            dir={i18n.dir()}
            rtl={isRTL}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {plantsData.map((plant) => (
              <SwiperSlide key={plant.id}>
                <div
                  className="relative bg-white rounded-3xl shadow-lg overflow-hidden group h-64 md:h-80 flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedPlant(plant)}
                  role="button"
                  aria-label={`${t("plantsSection.viewDetails")} ${t(plant.nameKey)}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setSelectedPlant(plant);
                  }}
                >
                  <img
                    src={plant.image}
                    alt={`${t("plantsSection.imageOf")} ${t(plant.nameKey)}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-bold drop-shadow-md">
                      {t(plant.nameKey)}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* نقاط التمرير */}
          <div className="custom-pagination mt-8 flex justify-center gap-2 [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:bg-green-300 [&>.swiper-pagination-bullet-active]:bg-green-600 transition-all" />
        </div>

        {/* نافذة منبثقة للمعلومات */}
        {selectedPlant && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedPlant(null)}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`absolute top-2 ${isRTL ? 'left-2' : 'right-2'} text-gray-600 hover:text-red-500 text-xl`}
                onClick={() => setSelectedPlant(null)}
                aria-label={t("plantsSection.closeModal")}
              >
                &times;
              </button>
              <img
                src={selectedPlant.image}
                alt={`${t("plantsSection.enlargedViewOf")} ${t(selectedPlant.nameKey)}`}
                className="rounded-xl mb-4 max-h-[60vh] object-contain mx-auto"
              />
              <h3 className="text-lg font-bold text-gray-800">
                {t(selectedPlant.nameKey)}
              </h3>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default PlantsTestimonials;