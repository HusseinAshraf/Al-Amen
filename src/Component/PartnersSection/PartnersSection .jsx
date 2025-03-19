import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Hanter from "../../assets/image/Hanter.jpg";
import Shira from "../../assets/image/Shira.jpg";
import ELShamy from "../../assets/image/el Shamy.png";
import elwady from "../../assets/image/elwady.png";
import neisco from "../../assets/image/neisco.png";

const partners = [
  { id: 1, name: "Hanter", image: Hanter },
  { id: 2, name: "Shira", image: Shira },
  { id: 3, name: "EL Shamy", image: ELShamy },
  { id: 4, name: "El Wady", image: elwady },
  { id: 5, name: "Neisco", image: neisco },
];

const PartnersSection = () => {
  useEffect(() => {
    setTimeout(() => {
      const pagination = document.querySelector(".custom-pagination");
      if (pagination) pagination.classList.add("swiper-pagination-bullets");
    }, 100);
  }, []);

  return (
    <section className="py-16 text-center">
      <h3 className="text-green-600 text-lg font-semibold mb-2">
        سابقة أعمالنا
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        شركاء النجاح
      </h2>

      <div className="container mx-auto px-4 md:px-40">
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
          className="pb-6"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="relative bg-white p-6 border border-gray-300 rounded-xl flex justify-center items-center shadow-md h-40 overflow-hidden group">
                <img
                  src={partner.image}
                  alt="Partner Logo"
                  className="w-auto h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-transparent backdrop-blur-md flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-green-950 text-lg font-semibold">
                    {partner.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  );
};

export default PartnersSection;
