import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();

  // Current language direction
  const isRTL = i18n.language === "ar";

  // Get testimonials from translations
  const testimonials = t('testimonials', { returnObjects: true });

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={t('meta.description')}
        />
        <meta
          name="keywords"
          content={t('meta.keywords')}
        />
        <meta name="author" content={t('meta.author')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta
          property="og:description"
          content={t('meta.ogDescription')}
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8.jpg"
        />
        <meta property="og:url" content="https://example.com/testimonials" />
      </Helmet>

      <section className="py-16 bg-cover bg-center" dir={isRTL ? "rtl" : "ltr"}>
        <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-between gap-10 px-4 md:px-6">
          {/* Text section */}
          <div className={`w-full md:w-1/2 ${isRTL ? 'text-right' : 'text-left'} pt-10`}>
            <h3 className="text-green-600 text-lg font-semibold mb-2">
              {t('headings.subtitle')}
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t('headings.title')}
            </h2>

            <div className={`flex justify-center ${isRTL ? 'ml-52' : 'mr-52'} mt-6 gap-4 pt-24`}>
              <button
                aria-label={t('buttons.previous')}
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition"
              >
                {isRTL ? <FaChevronRight className="w-6 h-6" /> : <FaChevronLeft className="w-6 h-6" />}
              </button>
              <button
                aria-label={t('buttons.next')}
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition"
              >
                {isRTL ? <FaChevronLeft className="w-6 h-6" /> : <FaChevronRight className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full md:w-1/2 relative">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8.jpg?updatedAt=1745446710369)`,
              }}
            ></div>

            <div className={`relative p-4 md:p-6 rounded-xl z-10 ${isRTL ? 'translate-x-0 md:translate-x-60' : 'translate-x-0 md:-translate-x-60'}`}>
              <Swiper
                key={i18n.dir()}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                dir={i18n.dir()}
                rtl={isRTL}
                loop
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                }}
                className="pb-10"
                dir={isRTL ? "rtl" : "ltr"}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="bg-white p-4 md:p-8 mt-6 rounded-xl shadow-xl border border-gray-300 max-w-md mx-auto"
                      aria-label={t('testimonial.ariaLabel', { name: testimonial.name })}
                    >
                      <p className="mb-4 text-sm md:text-lg leading-relaxed text-gray-700">
                        {testimonial.review}
                      </p>
                      <div className="flex justify-center gap-1 text-yellow-500 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < testimonial.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <div className="flex flex-col items-center">
                        <img
                          src={testimonial.image}
                          alt={t('testimonial.imageAlt', { name: testimonial.name })}
                          className="w-16 md:w-20 h-16 md:h-20 rounded-full border-4 border-green-500 mb-3 shadow-md"
                        />
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;