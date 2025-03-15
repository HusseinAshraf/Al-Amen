import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";

function Contact() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto p-6" dir="rtl">
        <TitleWithLeaves title="اتصل بنا" />

        <div className="grid md:grid-cols-2 gap-10 pt-6">
          {/* Form Section */}
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

          {/* Company Info Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg border-t-4 border-green-600 flex flex-col items-center">
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4">
              <iframe
                className="w-full h-full border-0 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27616.45607308616!2d31.235711!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjkiTiAzMcKwMTQnMTYuMiJF!5e0!3m2!1sen!2seg!4v1617880935000!5m2!1sen!2seg"
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

            <div className="flex items-center justify-end w-full mb-3">
              <span className="ml-2 text-gray-700 font-medium">
                القاهرة، مصر
              </span>
              <FaMapMarkerAlt className="text-green-700 ml-2 text-lg" />
            </div>
            <div className="flex items-center justify-end w-full mb-3">
              <span className="ml-2 text-gray-700 font-medium">
                +20 123 456 7890
              </span>
              <FaPhone className="text-green-700 ml-2 text-lg" />
            </div>
            <div className="flex items-center justify-end w-full">
              <span className="ml-2 text-gray-700 font-medium">
                info@landscape-eg.com
              </span>
              <FaEnvelope className="text-green-700 ml-2 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
