import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import plantImage from "../../assets/image/برجولات.jpg";
import girlImage from "../../assets/image/ديكورات-زراعية.jpg";
import { Helmet } from "react-helmet-async"; // استيراد react-helmet-async

const faqs = [
  {
    question: "ما هي أنواع الحدائق التي يمكنكم تصميمها؟",
    answer:
      "نقوم بتصميم الحدائق المنزلية، الفلل، المساحات العامة، والحدائق العمودية.",
  },
  {
    question: "هل تقدمون خدمات صيانة الحدائق؟",
    answer:
      "نعم، نقدم خدمات صيانة دورية تشمل تقليم النباتات، إزالة الأعشاب، وفحص أنظمة الري.",
  },
  {
    question: "هل يمكنني اختيار النباتات التي أرغبها في حديقتي؟",
    answer: "بالطبع! نعمل معك لاختيار النباتات التي تناسب ذوقك والمناخ المحلي.",
  },
  {
    question: "هل تقدمون خدمات تصميم شبكات الري؟",
    answer: "نعم، نقوم بتصميم وتنفيذ شبكات ري ذكية وفعالة.",
  },
  {
    question: "كم من الوقت يستغرق تنفيذ تصميم الحديقة؟",
    answer:
      "يعتمد الوقت على حجم وتعقيد المشروع، لكن عادةً ما يستغرق بين أسبوع إلى ثلاثة أسابيع.",
  },
  {
    question: "هل تقدمون خدمات للمساحات العامة فقط؟",
    answer:
      "نحن نقدم خدمات تصميم الحدائق للمنازل، الفلل، المكاتب، المدارس، وغيرها من المساحات الخاصة والعامة.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>الأسئلة الشائعة - شركة الأمين لاند سكيب</title>
        <meta
          name="description"
          content="استكشف الأسئلة الشائعة حول خدمات تصميم وتنفيذ وصيانة الحدائق، شبكات الري، وتقديم استشارات لاندسكيب من شركة الأمين لاند سكيب."
        />
        <meta
          name="keywords"
          content="الأسئلة الشائعة, تصميم حدائق, صيانة حدائق, شبكات ري, خدمات لاندسكيب, الأمين لاند سكيب"
        />
        <meta name="author" content="الأمين لاند سكيب" />
        <meta
          property="og:title"
          content="الأسئلة الشائعة - شركة الأمين لاند سكيب"
        />
        <meta
          property="og:description"
          content="تعرف على كل ما تحتاج معرفته حول خدمات شركة الأمين لاند سكيب من تصميم وصيانة الحدائق والمساحات الخضراء."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/faq-image.jpg?updatedAt=1745447747249"
        />
      </Helmet>

      <section dir="rtl" className="py-24 px-6  bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* الجزء الأيمن: الأسئلة */}
          <div>
            <h5 className="text-sm text-green-700 mb-2">الأسئلة الشائعة</h5>
            <h2 className="text-3xl font-bold mb-8">كل ما تحتاج معرفته</h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-md shadow-md overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full flex justify-between items-center px-5 py-4 text-right focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-sm font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-4 text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* الجزء الأيسر: صور */}
          <div className="relative flex justify-center items-center h-full">
            <img
              src={girlImage}
              alt="ديكور زراعي"
              className="w-48 md:w-56 rounded-xl shadow-md absolute bottom-0 left-10 z-10"
            />
            <img
              src={plantImage}
              alt="برجولات"
              className="w-72 md:w-80 rounded-xl shadow-lg relative z-20"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
