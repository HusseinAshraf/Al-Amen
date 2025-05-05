import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"; // استيراد react-helmet-async
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const plants = [
  { id: 1, name: "صبار أناناس", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B5%D8%A8%D8%A7%D8%B1%20%D8%A7%D9%86%D8%A7%D9%86%D8%A7%D8%B3.jpg?updatedAt=1745446719675" },
  { id: 2, name: "فيكس بنجامينا", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%81%D9%8A%D9%83%D8%B3%20%D8%A8%D9%86%D8%AC%D8%A7%D9%85%D9%8A%D9%86%D8%A7.jpg?updatedAt=1745446722376" },
  { id: 3, name: "دورنتا ليموني", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AF%D9%88%D8%B1%D9%86%D8%AA%D8%A7%20%D9%84%D9%8A%D9%85%D9%88%D9%86%D9%8A.jpg?updatedAt=1745446719434" },
  { id: 4, name: "سرو حلزوني مع كور", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B3%D8%B1%D9%88%20%D8%AD%D9%84%D8%B2%D9%88%D9%86%D9%8A%20%D9%88%20%D9%83%D9%88%D8%B1.jpg?updatedAt=1745446717816" },
  { id: 5, name: "هيبسكس", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%87%D9%8A%D8%A8%D8%B3%D9%83%D8%B3.jpg?updatedAt=1745446723288" },
  { id: 6, name: "جهنمية شماسي", image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AC%D9%87%D9%86%D9%85%D9%8A%D8%A9%20%D8%B4%D9%85%D8%A7%D8%B3%D9%8A.jpg?updatedAt=1745446719565" },
];

function PlantsTestimonials() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    const pagination = document.querySelector(".custom-pagination");
    if (pagination) pagination.classList.add("swiper-pagination-bullets");
  }, []);

  return (
    <>
      <Helmet>
        <title>تنسيق النباتات - الأمين لاند سكيب</title>
        <meta
          name="description"
          content="استعرض مجموعة من النباتات التي تم تنسيقها في مشاريعنا السابقة مع معلومات عن كل نوع."
        />
        <meta
          name="keywords"
          content="تنسيق النباتات, تصميم حدائق, نباتات زينة, صبار أناناس, فيكس بنجامينا, جهنمية شماسي"
        />
        <meta
          property="og:title"
          content="تنسيق النباتات - الأمين لاند سكيب"
        />
        <meta
          property="og:description"
          content="استعرض مجموعة من النباتات التي تم تنسيقها في مشاريعنا السابقة مع معلومات عن كل نوع."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B5%D8%A8%D8%A7%D8%B1%20%D8%A7%D9%86%D8%A7%D9%86%D8%A7%D8%B3.jpg?updatedAt=1745446719675"
        />
      </Helmet>

      <section className="py-20 bg-gradient-to-b from-green-50 to-white text-center relative">
        <h3 className="text-green-700 text-xl font-semibold mb-2">
          لمسة خضراء في كل مكان
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          من أعمالنا السابقة في تنسيق النباتات
        </h2>

        <div className="container mx-auto px-4 md:px-20">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-12"
          >
            {plants.map((plant) => (
              <SwiperSlide key={plant.id}>
                <div
                  className="relative bg-white rounded-3xl shadow-lg overflow-hidden group h-80 flex items-center justify-center cursor-pointer"
                  onClick={() => setSelectedPlant(plant)}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-auto h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-bold drop-shadow-md">
                      {plant.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="custom-pagination mt-8 flex justify-center gap-2 [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:bg-green-300 [&>.swiper-pagination-bullet-active]:bg-green-600 transition-all" />
        </div>

        {/* Popup Modal */}
        {selectedPlant && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedPlant(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 left-2 text-gray-600 hover:text-red-500 text-xl"
                onClick={() => setSelectedPlant(null)}
              >
                &times;
              </button>
              <img
                src={selectedPlant.image}
                alt={selectedPlant.name}
                className="rounded-xl mb-4 max-h-[60vh] object-contain mx-auto"
              />
              <h3 className="text-lg font-bold text-gray-800">
                {selectedPlant.name}
              </h3>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default PlantsTestimonials;
