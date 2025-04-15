import React from "react";
import {
  Leaf,
  Waves,
  TentTree,
  Trophy,
  Sprout,
  Flower2,
  Boxes,
} from "lucide-react";
import { Link } from "react-router-dom";
import BackGround from "../../UI/BackGround/BackGround";

const services = [
  {
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    title: "تنسيق حدائق",
  },
  {
    icon: <Waves className="w-6 h-6 text-green-600" />,
    title: "شلالات صناعية",
  },
  {
    icon: <TentTree className="w-6 h-6 text-green-600" />,
    title: "برجولات ومظلات",
  },
  {
    icon: <Sprout className="w-6 h-6 text-green-600" />,
    title: "شبكات ري",
  },
  {
    icon: <Trophy className="w-6 h-6 text-green-600" />,
    title: "ملاعب رياضية",
  },
  {
    icon: <Flower2 className="w-6 h-6 text-green-600" />,
    title: "ديكورات زراعية",
  },
  {
    icon: <Boxes className="w-6 h-6 text-green-600" />,
    title: "توريد خامات",
  },
];

const ServicesSection = () => {
  return (
 
     <section className=" py-16 px-4 sm:px-6 md:px-16 bg-gradient-to-b from-green-50 to-white " dir="rtl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div className="text-center md:text-right space-y-4">
          <h4 className="text-green-700 font-semibold text-base sm:text-lg">
            نبذة عن خدماتنا
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            خدماتنا تنبض بالجمال
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            نحن في شركة الأمين متخصصون في تقديم حلول متكاملة للحدائق والمساحات
            الخارجية. خدماتنا تشمل تصميم وتنسيق الحدائق، تركيب الشلالات
            والبرجولات، تنفيذ شبكات الري، الملاعب، الديكورات الزراعية، وتوريد
            خامات اللاندسكيب بجودة عالية. نعمل بأيدي محترفة وبأحدث التقنيات
            لنحول مساحتك إلى واحة تنبض بالجمال.
          </p>
          <Link to="/services" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow">
            اعرف أكثر
          </Link>
        </div>

        {/* عرض الفيديو */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-md">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-green-200">
              <iframe
                className="w-full h-64 rounded-2xl"
                src="https://www.youtube.com/embed/your-video-id"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute text-black top-0 left-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-4">
              {services[0].icon}
              <p className="text-xs mt-1 ">{services[0].title}</p>
            </div>
            <div className="absolute bottom-0 text-black left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full shadow-md p-4">
              {services[1].icon}
              <p className="text-xs mt-1">{services[1].title}</p>
            </div>
            <div className="absolute bottom-0 text-black right-1/4 transform translate-x-1/2 translate-y-1/2 bg-white rounded-full shadow-md p-4">
              {services[2].icon}
              <p className="text-xs mt-1">{services[2].title}</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default ServicesSection;
