import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

function Contact() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const { t, i18n } = useTranslation(); // Get translation and i18n instance
  const isRTL = i18n.dir() === "rtl"; // Determine if current language is RTL

  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  // Dynamic validation schema based on current language
  const validationSchema = Yup.object({
    name: Yup.string().required(t("contact.validation.nameRequired")),
    email: Yup.string()
      .email(t("contact.validation.emailInvalid"))
      .required(t("contact.validation.emailRequired")),
    phone: Yup.string()
      .matches(/^\+?[0-9\s\-]{7,15}$/, t("contact.validation.phoneInvalid"))
      .required(t("contact.validation.phoneRequired")),
    subject: Yup.string().required(t("contact.validation.subjectRequired")),
    message: Yup.string().required(t("contact.validation.messageRequired")),
  });

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitting(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      phone_number: values.phone,
      subject: values.subject,
      message: values.message,
      to_email: "amein2011@yahoo.com",
    };

    emailjs
      .send(
        "service_a8zjfwm",
        "template_uey9ud9",
        templateParams,
        "XTyipkAa6MqkpnVAe"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: t("contact.form.successTitle"),
          text: t("contact.form.successMessage"),
          confirmButtonText: t("common.ok"),
          confirmButtonColor: "#16a34a", // Tailwind green-600
        });
        resetForm();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: t("contact.form.errorTitle"),
          text: t("contact.form.errorMessage"),
          confirmButtonText: t("common.close"),
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
          <title>{t("contact.meta.title")}</title>
          <meta
            name="description"
            content={t("contact.meta.description")}
          />
          <meta
            name="keywords"
            content={t("contact.meta.keywords")}
          />
          <meta name="author" content={t("common.companyName")} />
          <meta property="og:title" content={t("contact.meta.title")} />
          <meta
            property="og:description"
            content={t("contact.meta.ogDescription")}
          />
          <meta
            property="og:image"
            content="https://ik.imagekit.io/hussein74/Al%20Amen/contact-us.jpg?updatedAt=1745447747249"
          />
        </Helmet>
      )}

      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto text-center pt-24">
          <TitleWithLeaves title={t("contact.title")} />
        </div>

        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className={`bg-white rounded-lg border-t-4 border-green-800 shadow-lg p-6 order-2 ${isRTL ? 'md:order-1' : 'md:order-2'}`}>
              <h2 className={`text-2xl font-bold text-green-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t("contact.info.title")}
              </h2>
              <p className={`text-green-950 mb-4 leading-relaxed w-full ${isRTL ? 'text-right' : 'text-left'}`}>
                {t("contact.info.description")}
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6 text-green-600" />,
                    title: t("contact.info.address.title"),
                    value: t("contact.info.address.value"),
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-green-600" />,
                    title: t("contact.info.phone.title"),
                    value: t("contact.info.phone.value"),
                  },
                  {
                    icon: <Mail className="h-6 w-6 text-green-600" />,
                    title: t("contact.info.email.title"),
                    value: t("contact.info.email.value"),
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-green-600" />,
                    title: t("contact.info.hours.title"),
                    value: (
                      <>
                        <p>{t("contact.info.hours.weekdays")}</p>
                        <p>{t("contact.info.hours.weekend")}</p>
                      </>
                    ),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center ${isRTL ? 'justify-start space-x-4 ' : 'justify-start space-x-4'}`}
                  >
                    
                     
                        <div className="bg-green-100 p-3 rounded-full">{item.icon}</div>
                        <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                          <h3 className="font-semibold text-gray-800">{item.title}</h3>
                          <p className="text-gray-600">{item.value}</p>
                        </div>
                      
                   
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg overflow-hidden shadow-md bg-gray-200 w-full h-64 flex items-center justify-center">
                <iframe
                  className="w-full h-full border-0 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.7542061559698!2d30.97733048488625!3d29.986493081903365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU5JzExLjQiTiAzMMKwNTgnMzAuNSJF!5e0!3m2!1sar!2seg!4v1742208081314!5m2!1sar!2seg"
                  allowFullScreen=""
                  title={t("contact.map.title")}
                  loading="lazy"
                  aria-label={t("contact.map.ariaLabel")}
                ></iframe>
              </div>
            </div>

            {/* Contact Form with Formik */}
            <div className={`bg-white rounded-lg border-t-4 border-green-800 shadow-lg p-6 order-1 ${isRTL ? 'md:order-2' : 'md:order-1'}`}>
              <h2 className={`text-2xl font-bold text-green-800 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t("contact.form.title")}
              </h2>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                          {t("contact.form.name")}
                        </label>
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          dir={isRTL ? "rtl" : "ltr"}
                          className={`w-full border rounded-md py-2 px-3 ${isRTL ? 'text-right' : 'text-left'} focus:outline-none focus:ring-2 ${errors.name && touched.name
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-green-500"
                            }`}
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className={`text-red-600 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                          {t("contact.form.email")}
                        </label>
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          dir={isRTL ? "rtl" : "ltr"}
                          className={`w-full border rounded-md py-2 px-3 ${isRTL ? 'text-right' : 'text-left'} focus:outline-none focus:ring-2 ${errors.email && touched.email
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-green-500"
                            }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className={`text-red-600 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                          {t("contact.form.phone")}
                        </label>
                        <Field
                          id="phone"
                          name="phone"
                          type="tel"
                          dir={isRTL ? "rtl" : "ltr"}
                          className={`w-full border rounded-md py-2 px-3 ${isRTL ? 'text-right' : 'text-left'} focus:outline-none focus:ring-2 ${errors.phone && touched.phone
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-green-500"
                            }`}
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className={`text-red-600 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
                        >
                          {t("contact.form.subject")}
                        </label>
                        <Field
                          id="subject"
                          name="subject"
                          type="text"
                          dir={isRTL ? "rtl" : "ltr"}
                          className={`w-full border rounded-md py-2 px-3 ${isRTL ? 'text-right' : 'text-left'} focus:outline-none focus:ring-2 ${errors.subject && touched.subject
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-green-500"
                            }`}
                        />
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className={`text-red-600 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium text-gray-700 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
                      >
                        {t("contact.form.message")}
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows="5"
                        dir={isRTL ? "rtl" : "ltr"}
                        className={`w-full border rounded-md py-2 px-3 ${isRTL ? 'text-right' : 'text-left'} focus:outline-none focus:ring-2 ${errors.message && touched.message
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-green-500"
                          }`}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className={`text-red-600 text-sm mt-1 ${isRTL ? 'text-right' : 'text-left'}`}
                      />
                    </div>

                    <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md flex items-center justify-center gap-2 disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin h-5 w-5" />
                            {t("contact.form.sending")}
                          </>
                        ) : (
                          <>
                            {isRTL ? (
                              <>
                                {t("contact.form.send")} <Send className="h-5 w-5" />
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5" /> {t("contact.form.send")}
                              </>
                            )}
                          </>
                        )}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">{t("contact.faq.title")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className={`font-bold text-lg mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{t("contact.faq.q1.question")}</h3>
                <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>{t("contact.faq.q1.answer")}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className={`font-bold text-lg mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{t("contact.faq.q2.question")}</h3>
                <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>{t("contact.faq.q2.answer")}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className={`font-bold text-lg mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{t("contact.faq.q3.question")}</h3>
                <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>{t("contact.faq.q3.answer")}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className={`font-bold text-lg mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{t("contact.faq.q4.question")}</h3>
                <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>{t("contact.faq.q4.answer")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;