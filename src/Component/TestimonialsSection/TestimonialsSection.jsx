import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "مها محي",
    role: "محاسبة",
    image: "https://i.pravatar.cc/80?img=1",
    review:
      "عمل احترافي ونتائج جميلة، زرعوا أشجار الفاكهة في حديقتنا وأصبحت رائعة.",
    rating: 5,
  },
  {
    name: "محمد طارق",
    role: "مدرس",
    image: "https://i.pravatar.cc/80?img=2",
    review: "الاهتمام بالتفاصيل جعل التجربة مميزة. خدمة رائعة وعناية كاملة.",
    rating: 5,
  },
  {
    name: "ندى خالد",
    role: "مهندسة",
    image: "https://i.pravatar.cc/80?img=1",
    review:
      "فريق محترف وتعامل راقٍ. أوصي بهم لكل من يريد تحسين مساحته الخضراء.",
    rating: 4,
  },
  {
    name: "أحمد فوزي",
    role: "مصمم",
    image: "https://i.pravatar.cc/80?img=4",
    review: "خدمة رائعة وسريعة، كانت التجربة ممتعة وسهلة.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <section className="py-16 bg-cover bg-center" dir="rtl">
        <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-between gap-10 px-4 md:px-6">
          <div className="w-full md:w-1/2 text-right pt-10">
            <h3 className="text-green-600 text-lg font-semibold mb-2">
              آراء عملائنا
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              فخرنا المستمر
            </h2>

            <div className="flex justify-center ml-52 mt-6 gap-4 pt-24">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8.jpg?updatedAt=1745446710369)`,
              }}
            ></div>

            <div className="relative  p-4 md:p-6  rounded-xl z-10 transform translate-x-0 md:translate-x-60 ">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                }}
                className="pb-10"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white p-4 md:p-8 mt-6 rounded-xl shadow-xl border border-gray-300  max-w-md mx-auto">

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
                          alt={testimonial.name}
                          className="w-16 md:w-20 h-16 md:h-20 rounded-full border-4 border-green-500 mb-3 shadow-md"
                        />
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
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
