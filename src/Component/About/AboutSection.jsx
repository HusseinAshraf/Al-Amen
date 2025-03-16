import React from "react";
import { motion } from "framer-motion";
import { Leaf, Paintbrush, Users } from "lucide-react";
import aboutImage from "../../assets/image/about-1.webp";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16" dir="rtl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-right space-y-4">
          <h4 className="text-green-700 font-semibold text-lg">نبذة عنا</h4>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            خبرة تصنع الفرق
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            نحن في الأمين لاند سكيب متخصصون في تقديم خدمات اللاندسكيب المبتكرة
            التي تضفي جمالًا وأناقة على أي مساحة. نقدم حلولًا متكاملة لتصميم
            وتنفيذ حدائق الفلل، الأماكن العامة، والملاعب، بالإضافة إلى توفير
            نباتات الزينة، الزهور، وأشجار الفاكهة. كما نهتم بصيانة الحدائق
            وتطوير شبكات الري لضمان مظهر مثالي يدوم طويلاً. رؤيتنا هي تحويل
            مساحاتك إلى واحات تنبض بالحياة، لأننا نؤمن بأن الطبيعة هي سر الإلهام
            والجمال.
          </p>
          <Link
            to="/about"
            className="mt-6 bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition shadow-md text-lg"
          >
            اعرف أكثر
          </Link>
        </div>

       
        <div className="relative flex justify-center">
          
          <div className="w-70 h-70 rounded-full overflow-hidden border-4 border-green-200 shadow-lg">
            <img
              src={aboutImage}
              alt="Plants"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            className="absolute w-[300px] h-[300px] flex items-center justify-center rounded-full border-4 border-green-200"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
       
            <div className="absolute w-full h-full flex items-center justify-center rounded-full ">
              
              <div className="absolute top-0 bg-white shadow-lg p-5 rounded-full flex flex-col items-center w-28 h-28 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                <Leaf className="text-green-600 w-8 h-8 drop-shadow-lg" />
                <p className="text-xs text-gray-700 mt-2 font-medium">
                  خبرة رائدة
                </p>
              </div>

              
              <div className="absolute bottom-0 left-0 bg-white shadow-lg p-5 rounded-full flex flex-col items-center w-28 h-28 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                <Paintbrush className="text-green-600 w-8 h-8 drop-shadow-lg" />
                <p className="text-xs text-gray-700 mt-2 font-medium">
                  تصاميم مبتكرة
                </p>
              </div>

             
              <div className="absolute bottom-0 right-0 bg-white shadow-lg p-5 rounded-full flex flex-col items-center w-28 h-28 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                <Users className="text-green-600 w-8 h-8 drop-shadow-lg" />
                <p className="text-xs text-gray-700 mt-2 font-medium">
                  بيئة محفزة
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
