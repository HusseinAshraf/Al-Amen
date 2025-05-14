import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 md:px-16 bg-gradient-to-b from-green-50 to-white"
      dir="rtl"
      aria-label="نبذة عن خدمات شركة الأمين"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* نص تعريفي */}
        <header className="text-center md:text-right space-y-4">
          <h4 className="text-green-700 font-semibold text-base sm:text-lg">
            نبذة عن خدماتنا
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            خدماتنا تنبض بالجمال
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            نحن في شركة الأمين متخصصون في تقديم حلول متكاملة للحدائق والمساحات الخارجية.
            خدماتنا تشمل تصميم وتنسيق الحدائق، تركيب الشلالات والبرجولات، تنفيذ شبكات الري،
            الملاعب، الديكورات الزراعية، وتوريد خامات اللاندسكيب بجودة عالية. نعمل بأيدي
            محترفة وبأحدث التقنيات لنحول مساحتك إلى واحة تنبض بالجمال.
          </p>
          <Link
            to="/services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition duration-300"
          >
            اعرف أكثر
          </Link>
        </header>

        {/* فيديو توضيحي */}
        <figure className="relative flex justify-center">
          <div className="w-full max-w-md">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-green-200">
              <iframe
                className="w-full h-64 rounded-2xl"
                src="https://www.youtube.com/embed/Gl4unWQKTr4?autoplay=1&mute=1&origin=https://yourwebsite.com"
                title="عرض تقديمي لخدمات شركة الأمين لاند سكيب"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                data-cookieconsent="tracking"
              ></iframe>

            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default ServicesSection;
