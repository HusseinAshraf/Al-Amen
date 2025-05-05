import React from "react";
import { Helmet } from "react-helmet-async"; // استيراد react-helmet-async

const timeline = [
  {
    year: "2015",
    title: "البداية الطموحة",
    description:
      "انطلقنا عام 2018 بتأسيس شركة تهدف لتوفير خدمات مبتكرة في تصميم وتنفيذ المساحات الخضراء.",
    position: "left",
  },
  {
    year: "2018",
    title: "أول إنجاز كبير",
    description:
      "تم تنفيذ أول مشروع كبير لتصميم حدائق الفلل مما عزز من مكانتنا في السوق.",
    position: "right",
  },
  {
    year: "2020",
    title: "تنوع الخدمات",
    description:
      "أضفنا خدمات جديدة مثل صيانة الحدائق وتصميم شبكات الري لتنمية احتياجات عملائنا بشكل كامل.",
    position: "left",
  },
  {
    year: "2024",
    title: "الابتكار والاستدامة",
    description:
      "اعتمدنا تقنيات ري ذكية وصديقة للبيئة لتعزيز استدامة مشاريعنا.",
    position: "right",
  },
];

function History() {
  return (
    <>
      <Helmet>
        <title>محطات بارزة في مسيرة شركة الأمين لاند سكيب</title>
        <meta
          name="description"
          content="تعرف على أبرز محطات نجاح شركة الأمين لاند سكيب، بدءًا من التأسيس إلى الإنجازات الكبرى في مجال تصميم وتنفيذ الحدائق."
        />
        <meta
          name="keywords"
          content="شركة الأمين لاند سكيب, تصميم حدائق, تنفيذ المساحات الخضراء, تاريخ الشركة, محطات النجاح, ابتكار, استدامة"
        />
        <meta name="author" content="الأمين لاند سكيب" />
        <meta
          property="og:title"
          content="محطات بارزة في مسيرة شركة الأمين لاند سكيب"
        />
        <meta
          property="og:description"
          content="تعرف على أبرز محطات نجاح شركة الأمين لاند سكيب، بدءًا من التأسيس إلى الإنجازات الكبرى في مجال تصميم وتنفيذ الحدائق."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/background.jpg"
        />
      </Helmet>

      <section dir="rtl" className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-green-600 mb-2">رحلة نجاحنا في أرقام</p>
          <h2 className="text-3xl font-bold mb-16">محطات بارزة في مسيرتنا</h2>

          <div className="relative">
            {/* الخط العمودي */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-500 z-0"></div>

            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-lg font-semibold rounded-full px-5 py-2 shadow-lg z-10">
              البداية
            </div>

            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="mb-20 flex flex-col md:flex-row items-center justify-between w-full relative z-10"
              >
                {item.position === "left" ? (
                  <>
                    <div className="md:w-5/12 text-right">
                      <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-600">
                        <h4 className="text-md font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center mx-6">
                      <span className="text-md text-gray-700 mb-1 mr-24">
                        {item.year}
                      </span>
                      <div className="w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-md"></div>
                    </div>

                    <div className="md:w-5/12 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-5/12 hidden md:block"></div>

                    <div className="flex flex-col items-center mx-6">
                      <span className="text-md text-gray-700 mb-1 ml-24">
                        {item.year}
                      </span>
                      <div className="w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-md"></div>
                    </div>

                    <div className="md:w-5/12 text-right">
                      <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-600">
                        <h4 className="text-md font-bold mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default History;
