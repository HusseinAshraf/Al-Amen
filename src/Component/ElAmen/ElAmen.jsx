import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function ElAmen() {
  return (
    <>
      <Helmet>

        <meta
          name="description"
          content="شركة الأمين لاند سكيب تقدم خدمات تصميم وتنفيذ الحدائق والمساحات الخضراء، بما في ذلك الري، الحوائط الزراعية، والصيانة الدورية. تواصل معنا لتحويل مساحاتك."
        />
        <meta
          name="keywords"
          content="شركة الأمين لاند سكيب, تصميم حدائق, تنفيذ ري, صيانة حدائق, حوائط زراعية, سوفت سكيب, هارد سكيب, مساحات خضراء"
        />
        <meta name="author" content="الأمين لاند سكيب" />
        <meta
          property="og:title"
          content="شركة الأمين لاند سكيب - خبراء الهاردسكيب والسوفت سكيب"
        />
        <meta
          property="og:description"
          content="استمتع بجمال الطبيعة مع شركة الأمين لاند سكيب. نحن متخصصون في تصميم الحدائق والمساحات الخضراء وتنفيذ شبكات الري وصيانة الأماكن العامة."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/amen-landscape.jpg?updatedAt=1745447747249"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/el-amen" />
      </Helmet>

      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-12 bg-gradient-to-br from-green-100 via-white to-green-50"
        aria-labelledby="elamen-title"
      >
        {/* الفيديو */}
        <div className="w-full">
          <div className="overflow-hidden rounded-3xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
            <iframe
              className="w-full h-64 md:h-96 rounded-xl"
              src="https://www.youtube.com/embed/n84AqxOodKg?autoplay=1&mute=1"
              title="فيديو تعريفي عن شركة الأمين لاند سكيب"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* المحتوى النصي */}
        <div className="text-green-900" dir="rtl">
          <h2
            id="elamen-title"
            className="text-4xl font-extrabold mb-6 leading-snug text-green-800"
          >
            شركة الأمين لاند سكيب
            <br />
            <span className="text-green-600 text-2xl font-semibold block mt-2">
              خبراء الهاردسكيب والسوفت سكيب
            </span>
          </h2>

          <p className="text-lg leading-loose text-green-700 mb-6">
            مع{" "}
            <strong className="text-green-800 font-semibold">
              الأمين لاند سكيب
            </strong>{" "}
            ، استمتع بجمال الطبيعة! نحن متخصصون في إنشاء وتجديد الحدائق
            والمساحات الخضراء للفيلات، النوادي، الفنادق، والكمبوندات. نقدم خدمات
            تصميم ثلاثي الأبعاد، تنفيذ شبكات الري، تركيب الحوائط الزراعية،
            وصيانة دورية للمساحات الخضراء.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block px-8 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 hover:scale-105 transition duration-300 transform active:scale-95"
          >
            تواصل معنا
          </Link>
        </div>
      </section>
    </>
  );
}

export default ElAmen;
