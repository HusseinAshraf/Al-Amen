import { Link } from "react-router-dom";
import { PhoneCall, Leaf, Flower2, TreePalm } from "lucide-react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function ContactSection() {
    const { t, i18n } = useTranslation();
    const isContactPage = location.pathname === "/contact";
    const isRTL = i18n.dir() === "rtl";

    return (
        <>
            {isContactPage && (
                <Helmet>
                    <title>{t("contact.meta.title")}</title>
                    <meta name="description" content={t("contact.meta.description")} />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href="https://example.com/contact" />
                </Helmet>
            )}

            <section
                className="relative bg-cover bg-center bg-no-repeat py-24 px-6"
                style={{
                    backgroundImage:
                        "url('https://ik.imagekit.io/hussein74/Al%20Amen/scott-webb-1ddol8rgUH8-unsplash.jpg')",
                }}
                dir={i18n.dir()}
                aria-labelledby="contact-section-header"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-white/10 backdrop-blur-[30%]"></div>

                <div
                    className={`relative max-w-5xl mx-auto space-y-8 ${isRTL ? "text-right md:text-right" : "text-left md:text-left"
                        }`}
                >
                    <h2
                        id="contact-section-header"
                        className="text-4xl sm:text-5xl font-extrabold text-green-800 leading-tight drop-shadow-lg"
                        tabIndex="0"
                    >
                        {t("contactSection.title")}
                    </h2>

                    <p
                        className="text-gray-700 text-lg leading-relaxed drop-shadow-md"
                        tabIndex="0"
                    >
                        {t("contactSection.description")}
                    </p>

                    <div
                        className={`flex flex-wrap justify-center md:justify-start gap-6 text-green-700 `}
                        role="list"
                    >
                        <div className="flex items-center gap-2 drop-shadow-sm" role="listitem">
                            <Leaf className="w-6 h-6" />
                            {t("contactSection.services.planting")}
                        </div>
                        <div className="flex items-center gap-2 drop-shadow-sm" role="listitem">
                            <Flower2 className="w-6 h-6" />
                            {t("contactSection.services.modernGardens")}
                        </div>
                        <div className="flex items-center gap-2 drop-shadow-sm" role="listitem">
                            <TreePalm className="w-6 h-6" />
                            {t("contactSection.services.outdoorSpaces")}
                        </div>
                    </div>

                    <div>
                        <Link to="/contact">
                            <button
                                className="mt-4 inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-2xl hover:bg-green-800 transition-shadow-lg"
                                aria-label={t("contactSection.buttonAria")}
                            >
                                <PhoneCall className="w-5 h-5" />
                                {t("contactSection.buttonText")}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactSection;
