import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaUsers, FaCog, FaClipboardCheck } from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";

function Features() {
  const featuresData = [
    {
      icon: FaDollarSign,
      title: "أفضل أسعار تنسيق حدائق في مصر",
      description:
        "نقدّم أفضل العروض والخدمات بأسعار تنافسية على مستوى الجمهورية لتنسيق وتصميم وصيانة الحدائق.",
    },
    {
      icon: FaUsers,
      title: "فريق محترف بخبرة 10 سنوات",
      description:
        "مهندسون وفنيون متخصصون في تنسيق الحدائق، نضمن لك نتائج احترافية ترضي ذوقك.",
    },
    {
      icon: FaCog,
      title: "محاكاة للتصميم قبل التنفيذ",
      description:
        "نعرض لك تصورًا مرئيًا لتصميم الحديقة قبل البدء لضمان تطابق التنفيذ مع الرؤية.",
    },
    {
      icon: FaClipboardCheck,
      title: "أكثر من 1000 مشروع ناجح",
      description:
        "نفذنا مئات المشاريع داخل مصر وخارجها في تصميم وصيانة وتوريد مستلزمات الحدائق.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-green-50 to-white"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 pt-7">
          <TitleWithLeaves title="مميزاتنا" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-8 rounded-2xl border-t-4 border-green-600 transition-all duration-300 group hover:shadow-[0_8px_24px_rgba(34,197,94,0.25)] hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              
              <div className="absolute -inset-1 bg-gradient-to-br from-green-200/10 to-transparent rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              {/* أيقونة داخل دائرة متحركة */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-green-100 text-green-700 flex items-center justify-center rounded-full shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-green-600 group-hover:text-white">
                <feature.icon className="text-2xl" />
              </div>

              <h3 className="relative z-10 text-xl font-bold text-green-800 mb-3 group-hover:text-green-700 transition-colors">
                {feature.title}
              </h3>

              <p className="relative z-10 text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
