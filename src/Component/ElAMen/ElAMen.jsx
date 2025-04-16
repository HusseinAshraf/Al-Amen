import React from "react";
import { Link } from "react-router-dom";

function ElAmen() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-12 bg-gradient-to-br from-green-100 via-white to-green-50">
      {/* الفيديو */}
      <div className="w-full">
        <div className="overflow-hidden rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <iframe
            className="w-full h-64 md:h-96 rounded-xl"
            src="https://www.youtube.com/embed/D2PZUB_lDCk?autoplay=1"
            title="YouTube video"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>

      {/* النص والمحتوى */}
      <div className="text-green-900" dir="rtl">
        <h2 className="text-4xl font-extrabold mb-6 leading-snug text-green-800">
          شركة الأمين لاند سكيب
          <br />
          <span className="text-green-600 text-2xl font-semibold">
            خبراء الهاردسكيب والسوفت سكيب
          </span>
        </h2>

        <p className="text-lg leading-loose text-green-700 mb-6">
          مع{" "}
          <span className="font-semibold text-green-800">الأمين لاند سكيب</span>
          ، استمتع بجمال الطبيعة! نحن متخصصون في إنشاء وتجديد الحدائق والمساحات
          الخضراء للفيلات، النوادي، الفنادق، والكمبوندات. نقدم خدمات تصميم ثلاثي
          الأبعاد، تنفيذ شبكات الري، تركيب الحوائط الزراعية، وصيانة دورية
          للمساحات الخضراء.
        </p>

        <Link
          to="/contact"
          className="mt-8 px-8 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 hover:scale-105 transition duration-300 transform active:scale-95"
        >
          تواصل معنا
        </Link>
      </div>
    </section>
  );
}

export default ElAmen;
