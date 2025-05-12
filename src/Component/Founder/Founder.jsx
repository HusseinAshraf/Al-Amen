import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { FaWhatsapp, FaLeaf, FaCogs, FaWater, FaQuoteRight } from "react-icons/fa";

import { Helmet } from "react-helmet";


function Founder() {
  const [isOpen, setIsOpen] = useState(false);


  const qualifications = [
    "خبرة واسعة في تصميم وتنفيذ الحدائق والمساحات الخضراء",
    "إشراف مباشر على أعمال الهارد سكيب وأنظمة الري المتطورة",
    "رؤية متكاملة لتطوير البيئة الخارجية للمنازل والمؤسسات",
    "إدارة المشاريع الكبرى بكفاءة وجودة عالية",
    "خبرة في الزراعة المستدامة والحلول البيئية"
  ];

  return (
    <>
      <Helmet>
        <title>صفحة المؤسس | الأمين لاند سكيب</title>
        <meta name="description" content="تعرف على المهندس أمين حسين، المؤسس والرؤية وراء شركة الأمين لاند سكيب." />
        <meta name="keywords" content="المؤسس, أمين حسين, الأمين لاند سكيب, رؤية الشركة, من هو المؤسس" />
        <meta name="author" content="م. أمين حسين" />
        <meta property="og:title" content="المؤسس - م. أمين حسين" />
        <meta property="og:description" content="رحلة المؤسس وبداية شركة الأمين لاند سكيب من رؤية إلى واقع." />
        <meta property="og:image" content="https://ik.imagekit.io/hussein74/Al%20Amen/owner.jpg?updatedAt=1745446694807" />
      </Helmet>


      <div className="relative overflow-hidden">

        <div className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01')`,
            filter: 'brightness(0.4)'
          }}>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/70"></div>
        </div>


        <div className="relative pt-28 pb-20 px-4 md:px-10 lg:px-20 text-center z-10">
          <div className="animate-fade-in-down max-w-5xl mx-auto mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-6">
              <span className="bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                المهندس أمين حسين
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed">
              رحلة من الشغف والإبداع في تحويل المساحات العادية إلى تحف فنية خضراء
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-4 bg-green-500/90 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transform hover:scale-105 transition duration-300 text-lg font-medium"
            >
              تعرف على المؤسس
            </button>
          </div>
        </div>
      </div>


      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-100" dir="rtl">
        <div className="container mx-auto px-4 md:px-10">


          <div className="flex flex-col lg:flex-row items-center gap-10 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden p-6 md:p-10 lg:p-12 border-t-4 border-green-600 shadow-2xl max-w-6xl mx-auto transform hover:shadow-green-200/50 transition duration-300">
            
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden flex-shrink-0 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/30 to-transparent mix-blend-overlay rounded-full z-10"></div>
              <div className="absolute inset-0 border-8 border-green-600/40 rounded-full z-20"></div>
              <img
                src="https://ik.imagekit.io/hussein74/Al%20Amen/owner.jpg?updatedAt=1745446694807"
                alt="المهندس أمين حسين مؤسس شركة الأمين لاند سكيب"
                className="w-full  object-cover object-center transform hover:scale-105 transition duration-700"
              />
            </div>

            {/* معلومات المؤسس */}
            <div className="text-right flex-1 mt-8 lg:mt-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-3">المهندس أمين حسين</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-green-700 text-sm font-medium bg-green-100 px-4 py-1 rounded-full">
                  مؤسس شركة الأمين لاند سكيب
                </span>
                <span className="text-green-700 text-sm font-medium bg-green-100 px-4 py-1 rounded-full">
                  خبرة أكثر من 15 عامًا
                </span>
              </div>

              {/* اقتباس مميز */}
              <div className="relative bg-green-50 p-5 rounded-lg border-r-4 border-green-600 mb-6">
                <FaQuoteRight className="absolute top-3 right-3 text-green-300 text-xl" />
                <p className="text-gray-700 italic pr-8">
                  "رؤيتي هي تحويل كل مساحة خضراء إلى قطعة فنية تعكس روح المكان وتحقق التناغم بين الإنسان والطبيعة."
                </p>
              </div>

              <p className="text-gray-800 leading-relaxed text-lg mb-6">
                يتمتع المهندس أمين بخبرة تفوق 15 عامًا في مجال تنسيق الحدائق وتصميم المساحات الخضراء، وساهم في تنفيذ العديد من المشاريع التي تمزج بين الجمال الطبيعي والدقة الفنية في جميع أنحاء المملكة.
              </p>

              {/* أيقونات التخصص */}
              <div className="flex gap-6 text-green-600 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <FaLeaf className="text-xl" />
                  </div>
                  <span className="text-sm text-gray-700">سوفت سكيب</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <FaCogs className="text-xl" />
                  </div>
                  <span className="text-sm text-gray-700">هارد سكيب</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <FaWater className="text-xl" />
                  </div>
                  <span className="text-sm text-gray-700">أنظمة ري</span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition duration-300 transform hover:scale-105"
              >
                اعرف المزيد عن المؤسس
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 px-4 sm:px-10 bg-green-800 text-white" dir="rtl">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-100">مؤهلات وخبرات <span className="text-green-300">استثنائية</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {qualifications.map((qual, idx) => (
              <div
                key={idx}
                className="bg-green-700/50 text-white backdrop-blur-sm p-6 rounded-lg border-r-4 border-green-400 hover:bg-green-700/70 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-green-300">{idx + 1}</span>
                  </div>
                  <p className="text-lg">{qual}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      

      
      <section className="py-16 px-4 bg-gradient-to-br from-green-800 to-green-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">هل ترغب في استشارة المهندس أمين؟</h2>
          <p className="text-lg text-green-100 mb-8">
            يسعدنا الإجابة على استفساراتكم وتقديم المشورة المتخصصة لمشروعك
          </p>
          <a
            href="https://wa.me/201001243084"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white text-lg rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            تواصل مع المؤسس عبر واتساب
          </a>
        </div>
      </section>

      
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4" dir="rtl">
          <div className="bg-white/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl max-w-3xl w-full p-6 border border-green-200">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4 bg-white text-green-700 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-green-100 transition"
              aria-label="إغلاق"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-green-600 shadow-lg flex-shrink-0">
                <img
                  src="https://ik.imagekit.io/hussein74/Al%20Amen/owner.jpg?updatedAt=1745446694807"
                  alt="المؤسس"
                  className="w-full  object-cover"
                />
              </div>
              <div className="text-center md:text-right flex-1">
                <Dialog.Title className="text-2xl font-bold text-green-800 mb-2">
                  المهندس أمين حسين
                </Dialog.Title>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="text-green-700 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                    مؤسس الشركة
                  </span>
                  <span className="text-green-700 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                    خبير تنسيق حدائق
                  </span>
                </div>
              </div>
            </div>

            {/* المحتوى */}
            <Dialog.Description className="text-gray-800 text-lg leading-relaxed space-y-4">
              <p>
                بخبرة تتجاوز 15 عامًا في مجال اللاندسكيب، قاد المهندس أمين العديد من المشاريع الكبرى التي جمعت بين الإبداع والدقة في التنفيذ. بدأت رحلته مع عالم اللاندسكيب من شغفه الكبير بالطبيعة والمساحات الخضراء.
              </p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">مؤهلات مميزة</h3>
                <ul className="list-disc pr-5 space-y-2 text-base text-green-800">
                  <li>خبرة واسعة في تصميم وتنفيذ الحدائق والمساحات الخضراء</li>
                  <li>إشراف مباشر على أعمال الهارد سكيب وأنظمة الري المتطورة</li>
                  <li>رؤية متكاملة لتطوير البيئة الخارجية للمنازل والمؤسسات</li>
                  <li>خبرة في إدارة المشاريع الكبرى بكفاءة وجودة عالية</li>
                  <li>نهج مستدام في التصميم والتنفيذ مع مراعاة البيئة المحلية</li>
                </ul>
              </div>

              <p>
                يسعى المهندس أمين دائمًا للتطوير والابتكار في مجال اللاندسكيب، مع التركيز على استخدام أحدث التقنيات والأساليب العالمية لتقديم أفضل النتائج للعملاء.
              </p>
            </Dialog.Description>

            <div className="mt-6 text-center">
              <a
                href="https://wa.me/201001243084"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white text-lg rounded-full shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                تواصل مع المؤسس عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </Dialog>



    </>
  );
}

export default Founder;