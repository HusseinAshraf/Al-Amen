import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import صبار_اناناس from "../../assets/image/صبار اناناس.jpg";
import فيكس_بنجامينا from "../../assets/image/فيكس بنجامينا.jpg";
import dorantaLemony from "../../assets/image/دورنتا ليموني.jpg";
import spiralCypressAndBall from "../../assets/image/سرو حلزوني و كور.jpg";
import هيبسكس from "../../assets/image/هيبسكس.jpg";
import جهنمية_شماسي from "../../assets/image/جهنمية شماسي.jpg";

const plants = [
  { id: 1, name: "صبار أناناس", image: صبار_اناناس },
  { id: 2, name: "فيكس بنجامينا", image: فيكس_بنجامينا },
  { id: 3, name: "دورنتا ليموني", image: dorantaLemony },
  { id: 4, name: "سرو حلزوني مع كور", image: spiralCypressAndBall },
  { id: 5, name: "هيبسكس", image: هيبسكس },
  { id: 6, name: "جهنمية شماسي", image: جهنمية_شماسي },
];

function PlantsTestimonials() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    const pagination = document.querySelector(".custom-pagination");
    if (pagination) pagination.classList.add("swiper-pagination-bullets");
  }, []);

  return (
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
  );
}

export default PlantsTestimonials;
