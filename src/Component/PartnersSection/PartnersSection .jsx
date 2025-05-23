import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

import Hanter from "../../assets/image/Hanter.jpg";
import Shira from "../../assets/image/Shira.jpg";
import ELShamy from "../../assets/image/el Shamy.png";
import elwady from "../../assets/image/elwady.png";
import neisco from "../../assets/image/neisco.png";
import egyption from "../../assets/image/egyption.png";
import i18n from "../../i18n";

const partners = [
  { id: 1, name: "Hanter", image: Hanter },
  { id: 2, name: "Shira", image: Shira },
  { id: 3, name: "EL Shamy", image: ELShamy },
  { id: 4, name: "El Wady", image: elwady },
  { id: 5, name: "Neisco", image: neisco },
  { id: 6, name: "Egyption", image: egyption },
];

const PartnersSection = () => {
  const { t } = useTranslation();
  const isRTL = i18n.dir() === "rtl";


  useEffect(() => {
    setTimeout(() => {
      const pagination = document.querySelector(".custom-pagination");
      if (pagination) pagination.classList.add("swiper-pagination-bullets");
    }, 100);
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content={t("partners.meta.description")} />
        <meta name="keywords" content={t("partners.meta.keywords")} />
        <meta name="author" content={t("partners.meta.author")} />
        <meta property="og:title" content={t("partners.meta.ogTitle")} />
        <meta property="og:description" content={t("partners.meta.ogDescription")} />
        <meta property="og:image" content="https://ik.imagekit.io/hussein74/Al%20Amen/background.jpg" />
        <meta property="og:url" content="https://example.com/partners" />
      </Helmet>

      <section className="py-16 text-center" aria-labelledby="partners-title">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-40">
          <h3 className="text-green-600 text-base md:text-lg font-semibold mb-2">
            {t("partners.subtitle")}
          </h3>
          <h2
            id="partners-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10"
          >
            {t("partners.title")}
          </h2>

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
              0: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-6"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div
                  className="relative bg-white p-4 sm:p-5 md:p-6 border border-gray-300 rounded-xl flex justify-center items-center shadow-md h-32 sm:h-36 md:h-40 overflow-hidden group"
                  aria-label={t("partners.aria", { name: partner.name })}
                >
                  <img
                    src={partner.image}
                    alt={t("partners.alt", { name: partner.name })}
                    className="w-auto h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-transparent backdrop-blur-md flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-green-950 text-sm sm:text-base font-semibold">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-6 gap-3 flex justify-center [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:bg-green-300 [&>.swiper-pagination-bullet-active]:bg-green-600 transition-all" />
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
