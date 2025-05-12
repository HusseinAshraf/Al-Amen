import React from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaUsers, FaCog, FaClipboardCheck } from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import BackGround from "../../UI/BackGround/BackGround";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

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

  const location = useLocation();
  const isFeaturesPage = location.pathname === "/features";

  return (
    <>
      {isFeaturesPage && (
        <Helmet>
          <html lang="ar" />
          <title>مميزاتنا - الأمين لاند سكيب</title>
          <meta
            name="description"
            content="اكتشف مميزات شركة الأمين لاند سكيب في تصميم وتنفيذ وصيانة الحدائق. نقدم أفضل الأسعار، فريق متخصص، تصميمات مرئية، وأكثر من 1000 مشروع ناجح."
          />
          <meta
            name="keywords"
            content="مميزاتنا, تنسيق حدائق, تصميم حدائق, صيانة حدائق, أسعار تنسيق حدائق, مشروع ناجح, محاكاة تصميم, فريق محترف"
          />
          <meta name="author" content="الأمين لاند سكيب" />
          <meta
            property="og:title"
            content="مميزاتنا - شركة الأمين لاند سكيب"
          />
          <meta
            property="og:description"
            content="تعرف على مميزاتنا في تقديم خدمات تصميم وصيانة الحدائق والمشاريع الناجحة لدينا."
          />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/hussein74/Al%20Amen/features-image.jpg?updatedAt=1745447747249"
          />
        </Helmet>
      )}

      <BackGround>
        <section
          id="features"
          aria-label="مميزات شركة الأمين لاند سكيب"
          className="py-20 px-4 sm:px-8 lg:px-12"
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
                  {/* تأثير خلفي عند التحويم */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-green-200/10 to-transparent rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                  {/* الأيقونة */}
                  <div
                    className="relative z-10 w-16 h-16 mx-auto mb-6 bg-green-100 text-green-700 flex items-center justify-center rounded-full shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-green-600 group-hover:text-white"
                    aria-hidden="true"
                  >
                    <feature.icon className="text-2xl" />
                  </div>

                  {/* العنوان */}
                  <h3 className="relative z-10 text-xl font-bold text-green-800 mb-3 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>

                  {/* الوصف */}
                  <p className="relative z-10 text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </BackGround>
    </>
  );
}

export default Features;
