import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import { Helmet } from "react-helmet"; 

function Contact() {
  return (
    <>
      <Helmet>
        <title>اتصل بنا - الأمين لاند سكيب</title>
        <meta
          name="description"
          content="تواصل مع شركة الأمين لاند سكيب للحصول على استشارات مجانية في مجال اللاندسكيب والزراعة. نحن هنا لخدمتك وتقديم أفضل الحلول لتجميل مساحاتك."
        />
        <meta
          name="keywords"
          content="اتصل بنا, شركة الأمين لاند سكيب, خدمات لاندسكيب, استشارات لاندسكيب, تنسيق حدائق, زراعة, صيانة حدائق"
        />
        <meta name="author" content="الأمين لاند سكيب" />
        <meta property="og:title" content="اتصل بنا - الأمين لاند سكيب" />
        <meta
          property="og:description"
          content="تواصل مع فريقنا للحصول على استشارات مخصصة في مجال اللاندسكيب وتصميم الحدائق."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/contact-us.jpg?updatedAt=1745447747249"
        />
      </Helmet>

      <section className="bg-gray-100 py-10" dir="rtl">
        <div className="container mx-auto p-6">
          <div className="max-w-5xl mx-auto text-center pt-10 ">
            <TitleWithLeaves title="اتصل بنا" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 pt-6">
            <form className="bg-white p-8 shadow-xl rounded-xl border-t-4 border-green-600 space-y-6">
              <div>
                <label className="block text-gray-700 text-right font-semibold mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-right font-semibold mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-right font-semibold mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  placeholder="+20 123 456 7890"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-right font-semibold mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  rows="4"
                  placeholder="اكتب رسالتك هنا..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300 font-semibold shadow-md"
              >
                إرسال الرسالة
              </button>
            </form>

            <div className="bg-white p-6 shadow-lg rounded-lg border-t-4 border-green-600 flex flex-col items-center">
              <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
                <iframe
                  className="w-full h-full border-0 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.7542061559698!2d30.97733048488625!3d29.986493081903365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzExLjQiTiAzMMKwNTgnMzAuNSJF!5e0!3m2!1sar!2seg!4v1742208081314!5m2!1sar!2seg"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <h2 className="text-2xl font-bold text-green-700 mb-4 text-right w-full">
                معلومات الشركة
              </h2>
              <p className="text-gray-600 mb-4 text-right leading-relaxed w-full">
                نحن شركة متخصصة في الزراعة واللاندسكيب، نقدم حلولًا مستدامة
                ومبتكرة.
              </p>

              <div className="w-full flex flex-col gap-3 items-start ">
                <div className="flex items-center justify-end">
                  <FaMapMarkerAlt className="text-green-700 text-lg" />
                  <span className="text-gray-700 font-medium mr-2">
                    الجيزة- اكتوبر- الحي المتميز- سنتر الهدايا الدور الاول
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <FaPhone className="text-green-700 text-lg" />
                  <span className="text-gray-700 font-medium mr-2">
                    01001243084 - 01114423163
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <FaEnvelope className="text-green-700 text-lg" />
                  <span className="text-gray-700 font-medium mr-2">
                    amein2011@yahoo.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
