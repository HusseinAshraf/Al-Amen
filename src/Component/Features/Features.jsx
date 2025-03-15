import React from "react";
import { motion } from "framer-motion";
import { FaLandmark, FaTree, FaTint, FaBug } from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";

function Features() {
  const featuresData = [
    {
      icon: <FaLandmark className="text-5xl text-green-700" />,
      title: "تصميم المناظر الطبيعية",
      description: "تصميم وتنفيذ المناظر الطبيعية بأحدث الطرق والتقنيات.",
    },
    {
      icon: <FaTree className="text-5xl text-green-700" />,
      title: "زراعة النباتات",
      description: "زراعة جميع أنواع النباتات الطبيعية والصناعية.",
    },
    {
      icon: <FaTint className="text-5xl text-green-700" />,
      title: "تنظيم الحدائق",
      description: "تنظيم وترتيب الحدائق بأحدث الطرق والتقنيات.",
    },
    {
      icon: <FaBug className="text-5xl text-green-700" />,
      title: "مبيدات الصحة العامة",
      description: "تقديم خدمات مكافحة الحشرات والقوارض بأحدث الطرق والتقنيات.",
    },
    {
      icon: <FaTree className="text-5xl text-green-700" />,
      title: "زراعة النباتات",
      description: "زراعة جميع أنواع النباتات الطبيعية والصناعية.",
    },
    {
      icon: <FaTint className="text-5xl text-green-700" />,
      title: "تنظيم الحدائق",
      description: "تنظيم وترتيب الحدائق بأحدث الطرق والتقنيات.",
    },
  ];

  return (
   <>
    <section
      id="features"
      className="py-20 bg-gray-100"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center pt-10 ">
        <TitleWithLeaves title="مميزاتنا " />
        </div>

        {/* بطاقات الميزات */}
        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 text-center border-t-4 border-green-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
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
   
   </>
  );
}

export default Features;
