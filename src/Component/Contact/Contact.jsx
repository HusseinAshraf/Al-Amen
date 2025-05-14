import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";

function Contact() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: "amein2011@yahoo.com"
    };

    emailjs.send(
      "service_a8zjfwm",
      "template_uey9ud9",
      templateParams,
      "XTyipkAa6MqkpnVAe"
    )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "تم الإرسال",
          text: "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.",
          confirmButtonText: "حسناً",
          confirmButtonColor: "#16a34a", // Tailwind green-600
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "عذرًا، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
          confirmButtonText: "إغلاق",
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


      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto text-center pt-24">
          <TitleWithLeaves title="تواصل معنا" />
        </div>

        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* معلومات الاتصال */}
            <div className="bg-white rounded-lg border-t-4 border-green-800 shadow-lg p-6 order-2 md:order-1">
              <h2 className="text-2xl font-bold text-green-800 mb-6 text-right">معلومات الاتصال</h2>
              <p className="text-green-950 mb-4 text-right leading-relaxed w-full">
                نحن شركة متخصصة في الزراعة واللاندسكيب، نقدم حلولًا مستدامة ومبتكرة
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6 text-green-600" />,
                    title: "عنواننا",
                    value: "الجيزة- اكتوبر- الحي المتميز- سنتر الهدايا الدور الاول"
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-green-600" />,
                    title: "رقم الهاتف",
                    value: "01001243084 - 01114423163"
                  },
                  {
                    icon: <Mail className="h-6 w-6 text-green-600" />,
                    title: "البريد الإلكتروني",
                    value: "amein2011@yahoo.com"
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-green-600" />,
                    title: "ساعات العمل",
                    value: (
                      <>
                        <p>الأحد - الخميس: 9 ص - 5 م</p>
                        <p>الجمعة - السبت: 10 ص - 2 م</p>
                      </>
                    )
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-end space-x-4 space-x-reverse">
                    <div className="text-right">
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg overflow-hidden shadow-md bg-gray-200 w-full h-64 flex items-center justify-center">
                <iframe
                  className="w-full h-full border-0 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.7542061559698!2d30.97733048488625!3d29.986493081903365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzExLjQiTiAzMMKwNTgnMzAuNSJF!5e0!3m2!1sar!2seg!4v1742208081314!5m2!1sar!2seg"
                  allowFullScreen=""
                  title="الجيزة- اكتوبر- الحي المتميز- سنتر الهدايا الدور الاول"
                  loading="lazy"
                  aria-label="خريطة موقع الشركة على جوجل مابس"
                ></iframe>
              </div>
            </div>


            <div className="bg-white rounded-lg border-t-4 border-green-800 shadow-lg p-6 order-1 md:order-2">
              <h2 className="text-2xl font-bold text-green-800 mb-6 text-right">أرسل رسالتك</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "name", type: "text", label: "الاسم", required: true },
                    { id: "email", type: "email", label: "البريد الإلكتروني", required: true }
                  ].map(({ id, type, label, required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-medium text-gray-700 text-right mb-1">{label}</label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        value={formData[id]}
                        onChange={handleChange}
                        required={required}
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-right focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-right mb-1">رقم الهاتف</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-right focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 text-right mb-1">الموضوع</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 text-right focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-right mb-1">الرسالة</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-right focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md flex items-center space-x-2 space-x-reverse transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span>جاري الإرسال</span>
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>إرسال الرسالة</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">الأسئلة الشائعة</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-right mb-2">ما هي خدمات اللاند سكيب التي تقدمونها؟</h3>
                <p className="text-gray-600 text-right">نقدم مجموعة واسعة من خدمات اللاند سكيب بما في ذلك تصميم وتنفيذ الحدائق، وأنظمة الري الآلي، وتنسيق الحدائق المنزلية والتجارية، والعناية بالمساحات الخضراء.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-right mb-2">كيف يمكنني الحصول على عرض سعر لمشروعي؟</h3>
                <p className="text-gray-600 text-right">يمكنك التواصل معنا عبر نموذج الاتصال أو الاتصال بنا مباشرة. سنقوم بترتيب زيارة لمعاينة الموقع وتقديم عرض سعر مفصل حسب احتياجاتك.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-right mb-2">هل تقدمون خدمات الصيانة الدورية للحدائق؟</h3>
                <p className="text-gray-600 text-right">نعم، نقدم خدمات الصيانة الدورية للحدائق والمساحات الخضراء بعقود شهرية أو سنوية تشمل الري والتسميد والتقليم والعناية المستمرة.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-right mb-2">ما هي مناطق تغطية خدماتكم؟</h3>
                <p className="text-gray-600 text-right">نقدم خدماتنا في جميع محافظات مصر الكبرى مع التركيز على القاهرة الكبرى والإسكندرية والساحل الشمالي. كما يمكننا العمل في مشاريع خارج هذه المناطق حسب الاتفاق.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
