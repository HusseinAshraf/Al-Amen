import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  // حالة النموذج
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // حالة الإرسال
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: ""
  });

  // تحديث بيانات النموذج عند تغيير الحقول
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // معالجة تقديم النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // تكوين معلمات EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
      to_email: "amein2011@yahoo.com"
    };

    // استخدام EmailJS لإرسال البريد الإلكتروني
    emailjs.send(
      "service_a8zjfwm", // قم بتغيير هذا
      "template_uey9ud9", // قم بتغيير هذا
      templateParams,
      "XTyipkAa6MqkpnVAe" // قم بتغيير هذا
    )
      .then((response) => {
        setSubmitStatus({
          success: true,
          error: false,
          message: "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا."
        });
        // إعادة تعيين النموذج
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      })
      .catch((err) => {
        setSubmitStatus({
          success: false,
          error: true,
          message: "عذرًا، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى."
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {isContactPage && (
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
      )}

      <section className="bg-gray-100 py-10" dir="rtl">
        <div className="container mx-auto p-6">
          <div className="max-w-5xl mx-auto text-center pt-10">
            <TitleWithLeaves title="اتصل بنا" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 pt-6">
            <form
              className="bg-white p-8 shadow-xl rounded-xl border-t-4 border-green-600 space-y-6"
              onSubmit={handleSubmit}
              aria-labelledby="contact-form"
            >
              {submitStatus.success && (
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-right"
                  role="alert"
                  aria-live="assertive"
                >
                  {submitStatus.message}
                </div>
              )}

              {submitStatus.error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-right"
                  role="alert"
                  aria-live="assertive"
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label
                  className="block text-gray-700 text-right font-semibold mb-2"
                  htmlFor="name"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  placeholder="أدخل اسمك الكامل"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-right font-semibold mb-2"
                  htmlFor="email"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  placeholder="example@email.com"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-right font-semibold mb-2"
                  htmlFor="phone"
                >
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  placeholder="+20 123 456 7890"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-right font-semibold mb-2"
                  htmlFor="message"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  rows="4"
                  placeholder="اكتب رسالتك هنا..."
                  required
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300 font-semibold shadow-md ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
                aria-live="assertive"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
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
              نحن شركة متخصصة في الزراعة واللاندسكيب، نقدم حلولًا مستدامة ومبتكرة.
            </p>

            <div className="w-full flex flex-col gap-3 items-start">
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
    </section >
    </>
  );
}

export default Contact;
