import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Dialog } from "@headlessui/react";
import { FaWhatsapp, FaLeaf, FaCogs, FaWater } from "react-icons/fa";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="تعرف على م. أمين حسين، مؤسس شركة الأمين لاند سكيب. نحن نقدم خدمات اللاند سكيب والهارد سكيب والسوفت سكيب بفرق محترفة."
        />
        <meta
          name="keywords"
          content="مؤسس, شركة الأمين لاند سكيب, أمين حسين, اللاند سكيب, الهارد سكيب, السوفت سكيب, الزراعة, تنسيق الحدائق"
        />
        <meta name="author" content="الأمين لاند سكيب" />
        <meta
          property="og:title"
          content="مؤسس شركة الأمين لاند سكيب - م. أمين حسين"
        />
        <meta
          property="og:description"
          content="تعرف على م. أمين حسين، مؤسس شركة الأمين لاند سكيب. نحن نقدم خدمات اللاند سكيب والهارد سكيب والسوفت سكيب بفرق محترفة."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/owner.jpg?updatedAt=1745446694807"
        />
      </Helmet>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 bg-gradient-to-b from-green-800/60 via-green-700/40 to-green-600/30"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/hussein74/Al%20Amen/background.jpg?updatedAt=1746409770041')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 border-t-4 border-green-700">

          {/* صورة المؤسس + المعلومات */}
          <div className="flex flex-col items-center text-center md:text-center md:justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-600 shadow-lg mb-4">
              <img
                src="https://ik.imagekit.io/hussein74/Al%20Amen/owner.jpg?updatedAt=1745446694807"
                alt="المؤسس"
                className="w-full  object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <h2 className="text-3xl font-extrabold text-green-800 mb-1">
              م. أمين حسين
            </h2>
            <span className="text-green-700 text-base font-semibold bg-green-100 px-4 py-1 rounded-full shadow-sm mb-4">
              مؤسس الشركة
            </span>
            <div className="flex justify-center gap-4 text-green-600 text-2xl">
              <FaLeaf title="سوفت سكيب" />
              <FaCogs title="هارد سكيب" />
              <FaWater title="أنظمة ري" />
            </div>
          </div>

          {/* النص */}
          <div className="text-center md:text-right flex-1 flex flex-col justify-center">
            <p className="text-gray-800 leading-loose text-lg font-medium mb-6">
              مرحبًا بكم في شركة الأمين لاند سكيب! نقدم خدمات متكاملة في اللاند سكيب، الهارد سكيب، والسوفت سكيب بفريق محترف ورؤية متطورة، لنحوّل أفكاركم إلى واقع أخضر نابض بالحياة.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-2 px-6 py-3 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition cursor-pointer"
            >
              اعرف المزيد عن المؤسس
            </button>
          </div>
        </div>
      </section>


      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* الخلفية المعتمة */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300" aria-hidden="true" />

        {/* الحاوية الخارجية */}
        <div className="fixed inset-0 flex items-center justify-center p-4" dir="rtl" >
          {/* حاوية الدخول المتحركة */}
          <div className="transition-all duration-300 ease-out scale-95 opacity-0 animate-fadeInScale">
            <Dialog.Panel className="relative rounded-3xl shadow-2xl max-w-3xl w-full bg-white/70 backdrop-blur-xl p-8 border border-white/30">

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 left-4 bg-white text-green-700 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-green-100 transition cursor-pointer"
                aria-label="إغلاق"
              >
                &times;
              </button>

              {/* العنوان + الصورة */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-600 shadow">
                  <img
                    src="https://ik.imagekit.io/hussein74/Al%20Amen/owner.jpg?updatedAt=1745446694807"
                    alt="المؤسس"
                    className="w-full  object-cover"
                  />
                </div>

                <div className="text-right">
                  <Dialog.Title className="text-3xl font-bold text-green-800 mb-2">
                    المهندس أمين حسين
                  </Dialog.Title>
                  <span className="text-green-700 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                    مؤسس شركة الأمين لاند سكيب
                  </span>
                </div>
              </div>

              {/* المحتوى النصي */}
              <Dialog.Description className="text-gray-800 text-lg leading-relaxed space-y-4">
                <p>
                  بخبرة تتجاوز 15 عامًا في مجال اللاندسكيب، قاد المهندس أمين العديد من المشاريع الكبرى التي جمعت بين الإبداع والدقة في التنفيذ.
                </p>
                <ul className="list-disc pr-5 space-y-2 text-base text-green-800">
                  <li>خبرة في تصميم وتنفيذ الحدائق والمساحات الخضراء.</li>
                  <li>إشراف مباشر على أعمال الهارد سكيب وأنظمة الري.</li>
                  <li>رؤية متكاملة لتطوير البيئة الخارجية للمنازل والمؤسسات.</li>
                </ul>
              </Dialog.Description>

              {/* زر واتساب */}
              <div className="mt-8 text-center">
                <a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white text-lg rounded-full shadow-md hover:bg-green-700 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  تواصل مع المؤسس عبر واتساب
                </a>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>

    </>
  );
}

export default Hero;
