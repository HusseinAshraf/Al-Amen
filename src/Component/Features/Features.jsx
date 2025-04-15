import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaUsers, FaCog, FaClipboardCheck } from "react-icons/fa"; // استبدال الأيقونات
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";

function Features() {
  const featuresData = [
    {
      icon: FaDollarSign,
      title: "أفضل أسعار تنسيق حدائق في مصر",
      description:
        "تضمن شركة الأمين لاند سكيب لتنسيق الحدائق أفضل العروض و الأسعار في جمهورية مصر العربية على جميع خدمات تنسيق وتصميم وصيانة الحدائق.",
    },
    {
      icon: FaUsers,
      title: "خدمات تنسيق حدائق عالية الجودة",
      description:
        "لدينا فريق متكامل من المهندسون الزراعيون والفنيين والعمال المتخصصين بخبرة 10 أعوام في تنسيق الحدائق وتصميمها بشكل احترافي.",
    },
    {
      icon: FaCog,
      title: "اختبار تصميمات الحدائق قبل التركيب",
      description:
        "تقوم شركة الأمين لاند سكيب لتنسيق الحدائق باختبار أي ديكور لأي حديقة قبل التركيب لتكوين وجهة نظر شاملة عن الديكور المناسب لحديقتك وتنسيقها.",
    },
    {
      icon: FaClipboardCheck,
      title: "أكثر من 1000 مشروع تم انجازه بنجاح",
      description:
        "قامت شركة الأمين لاند سكيب لتنسيق الحدائق بتنفيذ أكثر من 1000 مشروع في السعودية تتراوح بين تنسيق وتصميم وصيانة الحدائق وتوريد كافة الخامات المتعلقة بذلك.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-6 sm:px-8 lg:px-12 w-full overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-5xl mx-auto text-center pt-10">
          <TitleWithLeaves title="مميزاتنا" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 pt-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-3 text-center border-t-4 border-green-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4 flex justify-center">
                <feature.icon className="text-5xl text-green-700" />
              </div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
