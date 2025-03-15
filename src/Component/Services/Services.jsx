import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaWater, FaWrench, FaTruck, FaFutbol } from "react-icons/fa";

import picture from "../../assets/image/background.jpg";
import img1 from "../../assets/image/تطوير.jpg";
import img2 from "../../assets/image/تركيب.jpg";
import img3 from "../../assets/image/project5.jpg";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import BackGround from "../../UI/BackGround/BackGround";

function Services() {
  const servicesData = [
    {
      icon: <FaTools className="text-5xl text-green-700" />,
      title: "تطوير",
      description: "نحن نقدم خدمات تطوير متقدمة ومبتكرة.",
      image: img1,
    },
    {
      icon: <FaWater className="text-5xl text-green-700" />,
      title: "ري",
      description: "نوفر أنظمة ري حديثة تضمن كفاءة استخدام المياه.",
      image: img3,
    },
    {
      icon: <FaWrench className="text-5xl text-green-700" />,
      title: "صيانة",
      description: "خدمات الصيانة الدورية للحفاظ على الجودة والفعالية.",
      image: picture,
    },
    {
      icon: <FaTruck className="text-5xl text-green-700" />,
      title: "توريد وتركيب",
      description: "نوفر أفضل الخدمات في توريد وتركيب المعدات.",
      image: img2,
    },
  ];

  const sportsImages = [picture, picture, picture, picture, picture, picture];

  return (
    <>
    <BackGround>
    <section
      id="services"
      className="py-20"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6">
        <TitleWithLeaves title="خدماتنا" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 text-center border-t-4 border-green-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg shadow-md"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white mt-12 p-8 rounded-3xl shadow-lg text-center border-t-4 border-green-600"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-5xl text-green-600 mb-4">
            <FaFutbol />
          </div>
          <h3 className="text-2xl font-semibold text-green-700 mb-3">
            الإنشاءات الرياضية والملاعب
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            نقوم بتنفيذ جميع أنواع الإنشاءات الرياضية والملاعب بداية من مرحلة
            التصميمات حتى التشغيل، مثل ملاعب النجيل الصناعي والملاعب المتعددة
            وملاعب البادل تنس ومضمار الجري واكسسوارات الملاعب. نفذ ملعبك بأفضل
            المعايير الدولية وبأنسب تكلفة وفي أقل وقت. نقوم بتطوير وإنشاء وصيانة
            جميع الملاعب الرياضية في الأندية الرياضية والجامعات والمدارس
            والمؤسسات والمشاريع الخاصة.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {sportsImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`الرياضة ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow-md"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </BackGround>
    
    </>
  );
}

export default Services;
