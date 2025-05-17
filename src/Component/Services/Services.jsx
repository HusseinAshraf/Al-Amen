import React, { useState, useMemo } from "react";
import { FaTools, FaWater, FaWrench, FaTruck, FaLeaf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import { useTranslation } from "react-i18next";

// تعريف معرفات ثابتة للفئات
const CATEGORIES = {
  ALL: 'all',
  GARDEN: 'garden',
  WATERFALLS: 'waterfalls',
  PERGOLAS: 'pergolas',
  IRRIGATION: 'irrigation',
  SPORTS_FIELDS: 'sports_fields',
  DECORATIONS: 'decorations',
  LANDSCAPE: 'landscape'
};

function Services() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.ALL);

  const servicesData = useMemo(() => [
    {
      icon: <FaLeaf />,
      title: t('services.garden_design.title'),
      description: t('services.garden_design.short_desc'),
      fullDescription: t('services.garden_design.full_desc'),
      images: [
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AA%D9%86%D8%B3%D9%8A%D9%82%20%D8%A7%D9%84%D8%AD%D8%AF%D8%A7%D8%A6%D9%82.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B9%D8%B4%D8%A8-%D8%B5%D9%86%D8%A7%D8%B9%D9%8A.jpg?updatedAt=1745446721590",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%86%D8%AC%D9%8A%D9%84%D8%A9%20%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A.jpg?updatedAt=1745446722979",
        "https://ik.imagekit.io/hussein74/Al%20Amen/project4.jpg?updatedAt=1745446697841",
        "https://ik.imagekit.io/hussein74/Al%20Amen/OsamaBenZayed.jpg?updatedAt=1745446692188"
      ],
      category: CATEGORIES.GARDEN,
      translatedCategory: t('categories.garden')
    },
    {
      icon: <FaWater />,
      title: t('services.waterfalls.title'),
      description: t('services.waterfalls.short_desc'),
      fullDescription: t('services.waterfalls.full_desc'),
      images: ["https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D9%84%D8%A7%D9%84%D8%A7%D8%AA.jpg?updatedAt=1745446716766",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A743.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA5.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA1.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA2.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA3.jpg"
      ],
      category: CATEGORIES.WATERFALLS,
      translatedCategory: t('categories.waterfalls')
    },
    {
      icon: <FaWrench />,
      title: t('services.pergolas.title'),
      description: t('services.pergolas.short_desc'),
      fullDescription: t('services.pergolas.full_desc'),
      images: ["https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%B1%D8%AC%D9%88%D9%84%D8%A7%D8%AA.jpg?updatedAt=1745446709223",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A72%20.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A73.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A74.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A77.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A71%20.jpg",
      ],
      category: CATEGORIES.PERGOLAS,
      translatedCategory: t('categories.pergolas')
    },
    {
      icon: <FaTruck />,
      title: t('services.irrigation.title'),
      description: t('services.irrigation.short_desc'),
      fullDescription: t('services.irrigation.full_desc'),
      images: [
        "https://ik.imagekit.io/hussein74/Al%20Amen/111212.png",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%8A.jpg?updatedAt=1745446720365",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A3%D9%86%D8%B8%D9%85%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B1%D9%8A%20%D8%A7%D9%84%D8%A7%D9%85%D9%8A%D9%86%203.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B1%D9%8A%20%D8%A7%D9%84%D8%A7%D9%85%D9%8A%D9%86.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B1%D9%8A%20%D8%A7%D9%84%D8%A7%D9%85%D9%8A%D9%86%202.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/1.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B1%D9%8A-%D9%85%D8%BA%D9%84%D9%82.jpg"
      ],
      category: CATEGORIES.IRRIGATION,
      translatedCategory: t('categories.irrigation')
    },
    {
      icon: <FaTools />,
      title: t('services.sports_fields.title'),
      description: t('services.sports_fields.short_desc'),
      fullDescription: t('services.sports_fields.full_desc'),
      images: ["https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%207.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%201.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%202.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%203.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%204.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%206.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%208.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%209.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%2010.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A85.jpg", "https://ik.imagekit.io/hussein74/Al%20Amen/sport2.jpg?updatedAt=1745446702545"
      ],
      category: CATEGORIES.SPORTS_FIELDS,
      translatedCategory: t('categories.sports_fields')
    },
    {
      icon: <FaLeaf />,
      title: t('services.agricultural_decor.title'),
      description: t('services.agricultural_decor.short_desc'),
      fullDescription: t('services.agricultural_decor.full_desc'),
      images: ["https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9.jpg?updatedAt=1745446720627",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA1.jpg?updatedAt=1746549679149",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A72%20.jpg?updatedAt=1746549357624",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8.jpg?updatedAt=1745446710369",
        "https://ik.imagekit.io/hussein74/Al%20Amen/image1.jpg?updatedAt=1745446687674",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AF%D9%8A%D9%83%D9%88%D8%B1%20%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A.jpg"
      ],
      category: CATEGORIES.DECORATIONS,
      translatedCategory: t('categories.decorations')
    },
    {
      icon: <FaTruck />,
      title: t('services.landscape_materials.title'),
      description: t('services.landscape_materials.short_desc'),
      fullDescription: t('services.landscape_materials.full_desc'),
      images: [
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%88%D8%A7%D8%AA%D9%8A%D8%B1.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%84%D9%88%D8%AD%D8%A9%20%D8%AA%D8%AC%D9%83%D9%85.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D8%AD%D8%A8%D8%B3.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%84%D9%88%D8%AD%D8%A9%20%D8%AA%D8%AD%D9%83%D9%85.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B1%D8%B4%D8%A7%D8%B4%D8%A7%D8%AA.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A7%D9%86%D8%AA%D9%84%D9%88%D9%83.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AE%D8%B1%D8%A7%D8%B7%D9%8A%D9%85%20%D8%AA%D9%86%D9%82%D9%8A%D8%B7.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B1%D8%B4%D8%A7%D8%B4.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AE%D8%B1%D8%A7%D8%B7%D9%8A%D9%85.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%88%D8%A7%D8%B3%D9%8A%D8%B1.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D8%A7%D9%83%D9%8A%D9%86%D8%A9%20%D9%82%D8%B5.jpg",
      ],
      category: CATEGORIES.LANDSCAPE,
      translatedCategory: t('categories.landscape')
    },
  ], [t]);

  // تعريف الفئات مع النصوص المترجمة
  const categories = useMemo(() => [
    { id: CATEGORIES.ALL, name: t('categories.all') },
    { id: CATEGORIES.GARDEN, name: t('categories.garden') },
    { id: CATEGORIES.WATERFALLS, name: t('categories.waterfalls') },
    { id: CATEGORIES.PERGOLAS, name: t('categories.pergolas') },
    { id: CATEGORIES.IRRIGATION, name: t('categories.irrigation') },
    { id: CATEGORIES.SPORTS_FIELDS, name: t('categories.sports_fields') },
    { id: CATEGORIES.DECORATIONS, name: t('categories.decorations') },
    { id: CATEGORIES.LANDSCAPE, name: t('categories.landscape') }
  ], [t]);

  // تصفية الخدمات حسب الفئة المحددة
  const filteredServices = useMemo(() =>
    selectedCategory === CATEGORIES.ALL
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory),
    [selectedCategory, servicesData]
  );

  const handleCloseModal = React.useCallback(() => {
    setSelectedService(null);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('metaServices.services.title')}</title>
        <meta
          name="description"
          content={t('metaServices.services.description')}
        />
        <meta
          name="keywords"
          content={t('metaServices.services.keywords')}
        />
        <meta property="og:title" content={t('metaServices.services.og_title')} />
        <meta
          property="og:description"
          content={t('metaServices.services.og_description')}
        />
        <meta property="og:type" content="service" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <section
        id="services"
        className="py-20 px-4 sm:px-6 md:px-16 bg-gradient-to-b from-green-50 to-white"
        dir={t('direction')}
        aria-labelledby="services-title"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 pt-7">
            <TitleWithLeaves
              id="services-title"
              title={t('services.title')}
              aria-level="2"
            />
          </div>

          {/* Categories Filter */}
          <div
            className="flex flex-wrap gap-3 justify-center mb-10"
            role="tablist"
            aria-label={t('services.categories_label')}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                role="tab"
                aria-selected={selectedCategory === category.id}
                aria-label={t('services.view_category', { category: category.name })}
                className={`px-4 py-2 rounded-full text-sm transition cursor-pointer ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white border border-green-400 text-green-600 hover:bg-green-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
            aria-live="polite"
          >
            {filteredServices.map((service) => (
              <article
                key={service.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
                aria-label={t('services.service_details', { service: service.title })}
                role="button"
                tabIndex={0}
              >
                {/* Service Card Content */}
                <img
                  src={service.images[0]}
                  alt={t('services.service_image', { service: service.title })}
                  loading="lazy"
                  className="w-full h-56 object-cover bg-white"
                />
                <div className="p-4 sm:p-6 text-center space-y-3">
                  <div className="flex justify-center">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-700 flex items-center justify-center rounded-full shadow-inner transition group-hover:scale-110 group-hover:rotate-6 group-hover:bg-green-600 group-hover:text-white text-2xl sm:text-3xl"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-green-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 pt-20"
              onClick={handleCloseModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
            >
              <motion.div
                className="bg-white w-full max-w-md sm:max-w-xl lg:max-w-3xl rounded-2xl shadow-xl p-4 sm:p-6 relative overflow-y-auto max-h-[85vh] space-y-6 z-[99999]"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Close Button */}
                <button
                  className="absolute top-3 left-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
                  onClick={handleCloseModal}
                  aria-label={t('common.close')}
                >
                  &times;
                </button>

                {/* Service Images Carousel */}
                {selectedService.images && (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full rounded-xl"
                    a11y={{
                      enabled: true,
                      prevSlideMessage: t('carousel.prev_slide'),
                      nextSlideMessage: t('carousel.next_slide'),
                    }}
                  >
                    {selectedService.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="w-full aspect-video max-h-[60vh] overflow-hidden rounded-xl">
                          <img
                            src={img}
                            alt={t('carousel.image', { service: selectedService.title, index: idx + 1 })}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                {/* Service Details */}
                <div className="text-center px-2 sm:px-4">
                  <h2
                    id="service-modal-title"
                    className="text-2xl sm:text-3xl font-bold text-green-800 mb-3"
                  >
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </section>
    </>
  );
}

export default React.memo(Services);