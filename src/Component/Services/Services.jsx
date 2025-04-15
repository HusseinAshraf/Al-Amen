import React, { useState } from "react";
import { FaTools, FaWater, FaWrench, FaTruck, FaLeaf } from "react-icons/fa";
import img1 from "../../assets/image/عشب-صناعي.jpg";
import img2 from "../../assets/image/شلالات.jpg";
import img3 from "../../assets/image/برجولات.jpg";
import img4 from "../../assets/image/شبكات الري.jpg";
import img5 from "../../assets/image/sport2.jpg";
import img6 from "../../assets/image/ديكورات-زراعية.jpg";
import img7 from "../../assets/image/تطوير.jpg";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import BackGround from "../../UI/BackGround/BackGround";

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const servicesData = [
    {
      icon: <FaLeaf />,
      title: "تصميم وتنسيق الحدائق",
      description: "تنسيق حدائق المنازل باستخدام أفضل المواد والتصاميم.",
      fullDescription:
        "نحن نقدم خدمات تصميم وتنسيق حدائق الفلل والمنازل والحدائق العامة والملاعب، باستخدام أفضل المواد والأساليب الحديثة. يشمل عملنا تنسيق العشب الصناعي والطبيعي، تصميم النوافير والشلالات، تركيب المظلات والسواتر، وتنفيذ ديكورات زراعية لخلق بيئة خضراء ومريحة. ",
      image: img1,
      category: "تنسيق الحدائق",
    },
    {
      icon: <FaWater />,
      title: "الشلالات الصناعية",
      description: "تصميم وتركيب الشلالات بكل أنواعها.",
      fullDescription:
        "نقوم بتركيب شلالات صناعية في حدائق المنازل، والقصور، والحدائق العامة، والملاعب. نوفّر أنواع مختلفة مثل الشلالات الكلاسيكية والجدارية، وكذلك الشلالات الموسيقية والزخرفية...",
      image: img2,
      category: "شلالات",
    },
    {
      icon: <FaWrench />,
      title: "البرجولات والمظلات",
      description: "تركيب برجولات وسواتر عالية الجودة.",
      fullDescription:
        "نقدم خدمة تركيب المظلات، السواتر، والبرجولات بمختلف الأشكال والأحجام...",
      image: img3,
      category: "مظلات وبرجولات",
    },
    {
      icon: <FaTruck />,
      title: "شبكات الري",
      description: "شبكات ري حديثة بالتنقيط والرش.",
      fullDescription:
        "نوفر خدمات تركيب وصيانة شبكات الري الحديثة باستخدام شبكات الري بالتنقيط أو بالرش...",
      image: img4,
      category: "الري",
    },
    {
      icon: <FaTools />,
      title: "الملاعب",
      description: "تصميم وصيانة ملاعب رياضية.",
      fullDescription:
        "نقوم بتصميم، تركيب، وصيانة الملاعب الرياضية وفقًا لأعلى المعايير العالمية...",
      image: img5,
      category: "ملاعب",
    },
    {
      icon: <FaLeaf />,
      title: "الديكورات الزراعية",
      description: "تصاميم حدائق ديكورية باستخدام نباتات وأحجار طبيعية.",
      fullDescription:
        "نقوم بعمل تصميم وتركيب أجمل الديكورات الزراعية للحدائق والمنازل...",
      image: img6,
      category: "ديكورات",
    },
    {
      icon: <FaTruck />,
      title: "توريد خامات لاند سكيب",
      description: "توريد خامات معتمدة من كبرى الشركات.",
      fullDescription:
        "تتميز شركة الأمين بتوفير جميع خامات اللاند سكيب من مواسير، رشاشات، خراطيم، وأكواع...",
      image: img7,
      category: "لاندسكيب",
    },
  ];

  const categories = ["الكل", ...new Set(servicesData.map((s) => s.category))];

  const filteredServices =
    selectedCategory === "الكل"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <BackGround>
      <section id="services" className="py-20 px-4 sm:px-6 md:px-16" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 pt-7">
            <TitleWithLeaves title="خدماتنا" />
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white border border-green-400 text-green-600 hover:bg-green-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-4 sm:p-6 space-y-3 text-center">
                  <div className="flex justify-center">
                    <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-700 flex items-center justify-center rounded-full shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-green-600 group-hover:text-white text-2xl sm:text-3xl">
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
              </div>
            ))}
          </div>
        </div>

        {selectedService && (
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 pt-20"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white w-full max-w-md sm:max-w-xl lg:max-w-2xl rounded-2xl shadow-xl p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 left-3 text-gray-500 hover:text-red-600 text-xl"
                onClick={() => setSelectedService(null)}
              >
                ✕
              </button>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-52 sm:h-60 md:h-72 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                {selectedService.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                {selectedService.fullDescription || selectedService.description}
              </p>
            </div>
          </div>
        )}
      </section>
    </BackGround>
  );
}

export default Services;
