import React from "react";
import { motion } from "framer-motion";
import { FaLandmark, FaTree, FaTint, FaBug } from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";

function Features() {
  const featuresData = [
    {
      icon: FaLandmark,
      title: "تصميم المناظر الطبيعية",
      description: "تصميم وتنفيذ المناظر الطبيعية بأحدث الطرق والتقنيات.",
    },
    {
      icon: FaTree,
      title: "زراعة النباتات",
      description: "زراعة جميع أنواع النباتات الطبيعية والصناعية.",
    },
    {
      icon: FaTint,
      title: "تنظيم الحدائق",
      description: "تنظيم وترتيب الحدائق بأحدث الطرق والتقنيات.",
    },
    {
      icon: FaBug,
      title: "مبيدات الصحة العامة",
      description: "تقديم خدمات مكافحة الحشرات والقوارض بأحدث الطرق والتقنيات.",
    },
    {
      icon: FaTree,
      title: "صيانة الحدائق",
      description: "توفير خدمات صيانة ورعاية الحدائق للحفاظ على جودتها.",
    },
    {
      icon: FaTint,
      title: "أنظمة الري الحديثة",
      description: "تصميم وتركيب أنظمة ري متطورة لترشيد استهلاك المياه.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
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
