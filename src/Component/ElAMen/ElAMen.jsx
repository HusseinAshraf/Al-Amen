import React from "react";

function ElAMen() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 items-center bg-gradient-to-r from-green-200 to-green-50  ">
      <div className="w-full">
        <iframe
          className="w-full h-64 md:h-80 rounded-xl shadow-xl"
          src="https://www.youtube.com/embed/D2PZUB_lDCk?autoplay=1"
          title="YouTube video"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>

      <div className="text-green-900" dir="rtl">
        <h2 className="text-3xl font-extrabold text-green-800 mb-4">
          شركة الأمين لاند سكيب: خبراء الهاردسكيب والسوفت سكيب
        </h2>
        <p className="leading-relaxed text-lg text-green-700">
          مع الأمين لاند سكيب، استمتع بجمال الطبيعة! نحن متخصصون في إنشاء وتجديد
          الحدائق واللاندسكيب للفيلات، النوادي، الفنادق، والكمبوندات. نقدم خدمات
          تصميم ثلاثي الأبعاد، تنفيذ شبكات الري، تركيب الحوائط الزراعية، وصيانة
          دورية للحدائق لنحافظ على مساحتك خضراء ومنتعشة دائمًا.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-800 transition">
          تواصل معنا
        </button>
      </div>
    </section>
  );
}

export default ElAMen;
