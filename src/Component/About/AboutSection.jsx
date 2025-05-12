import React from "react";
import { motion } from "framer-motion";
import { Leaf, Paintbrush, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // استيراد react-helmet-async

const AboutSection = () => {
  return (
    <>
      <Helmet>

        <meta
          name="description"
          content="شركة الأمين لاند سكيب تقدم خدمات اللاندسكيب المبتكرة، تصميم وتنفيذ حدائق الفلل والملاعب، توفير نباتات الزينة والمعدات اللازمة للصيانة."
        />
        <meta
          name="keywords"
          content="الأمين لاند سكيب, تصميم لاندسكيب, صيانة حدائق, نباتات الزينة, تنسيق حدائق, هارد سكيب, شبكات ري, مشاريع لاندسكيب"
        />
        <meta name="author" content="الأمين لاند سكيب" />
        <meta property="og:title" content="من نحن - الأمين لاند سكيب" />
        <meta
          property="og:description"
          content="اكتشف خدمات شركة الأمين لاند سكيب في تقديم حلول لاندسكيب متكاملة وتحويل المساحات إلى بيئة خضراء رائعة."
        />
      </Helmet>

      <section className="bg-white py-16 px-4 sm:px-6 md:px-16" dir="rtl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="text-green-700 font-semibold text-base sm:text-lg">
              نبذة عنا
            </h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              خبرة تصنع الفرق
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              نحن في الأمين لاند سكيب متخصصون في تقديم خدمات اللاندسكيب المبتكرة
              التي تضفي جمالًا وأناقة على أي مساحة. نقدم حلولًا متكاملة لتصميم
              وتنفيذ حدائق الفلل، الأماكن العامة، والملاعب، بالإضافة إلى توفير
              نباتات الزينة، نجيلة (صناعي ، طبيعي )، الزهور، وأشجار الفاكهة و جميع
              معدات هارت سكيب من رشاشات و رمل و انتر لوك كما نهتم بصيانة الحدائق
              وتطوير شبكات الري لضمان مظهر مثالي يدوم طويلاً. رؤيتنا هي تحويل
              مساحاتك إلى واحات تنبض بالحياة، لأننا نؤمن بأن الطبيعة هي سر
              الإلهام والجمال.
            </p>
            <Link
              to="/about"
              className="inline-block mt-6 bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition shadow-md text-base sm:text-lg"
              aria-label="اعرف أكثر عن خدمات الأمين لاند سكيب"
            >
              اعرف أكثر
            </Link>
          </div>

          {/* الصورة والدائرة المتحركة */}
          <div className="relative flex justify-center">
            {/* صورة دائرية */}
            <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-green-200 shadow-lg">
              <img
                src="https://ik.imagekit.io/hussein74/Al%20Amen/about-1.webp?updatedAt=1745447747249"
                alt="صورة لحديقة أو تصميم لاند سكيب"
                className="w-full h-full object-cover"
              />
            </div>

            {/* دائرة متحركة */}
            <motion.div
              className="absolute w-64 h-64 sm:w-[300px] sm:h-[300px] flex items-center justify-center rounded-full border-4 border-green-200"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              {/* العناصر الثلاثة */}
              <div className="absolute w-full h-full flex items-center justify-center rounded-full">
                {/* عنصر 1 */}
                <div className="absolute top-0 bg-white shadow-lg p-4 sm:p-5 rounded-full flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl" aria-label="خبرة رائدة">
                  <Leaf className="text-green-600 w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
                  <p className="text-xs text-gray-700 mt-2 font-medium text-center">
                    خبرة رائدة
                  </p>
                </div>

                {/* عنصر 2 */}
                <div className="absolute bottom-0 left-0 bg-white shadow-lg p-4 sm:p-5 rounded-full flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl" aria-label="تصاميم مبتكرة">
                  <Paintbrush className="text-green-600 w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
                  <p className="text-xs text-gray-700 mt-2 font-medium text-center">
                    تصاميم مبتكرة
                  </p>
                </div>

                {/* عنصر 3 */}
                <div className="absolute bottom-0 right-0 bg-white shadow-lg p-4 sm:p-5 rounded-full flex flex-col items-center w-24 h-24 sm:w-28 sm:h-28 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl" aria-label="بيئة محفزة">
                  <Users className="text-green-600 w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
                  <p className="text-xs text-gray-700 mt-2 font-medium text-center">
                    بيئة محفزة
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
