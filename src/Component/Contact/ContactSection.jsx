import { Link } from "react-router-dom";
import { PhoneCall, Leaf, Flower2, TreePalm } from "lucide-react";
import { Helmet } from "react-helmet";

function ContactSection() {
    const isContactPage = location.pathname === "/contact";
    return (
        <>
           
            {isContactPage && (
                <Helmet>
                    <title>تحويل المساحات الخضراء إلى تحف فنية | خدمات تنسيق الحدائق</title>
                    <meta
                        name="description"
                        content="نقدم خدمات متكاملة في تنسيق الحدائق، الزراعة، والهاردسكيب — من التصميم إلى التنفيذ بأعلى جودة."
                    />
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
                dir="rtl"
                aria-labelledby="contact-section-header"
            >
                {/* طبقة تظليل */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-white/10 backdrop-blur-[30%]"></div>

                {/* المحتوى */}
                <div className="relative max-w-5xl mx-auto text-center md:text-right space-y-8">
                    <h2
                        id="contact-section-header"
                        className="text-4xl sm:text-5xl font-extrabold text-green-800 leading-tight drop-shadow-lg"
                        tabIndex="0"
                    >
                        هل ترغب بتحويل مساحتك الخضراء إلى تحفة فنية؟
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed drop-shadow-md" tabIndex="0">
                        نقدم خدمات متكاملة في تنسيق الحدائق، الزراعة، والهاردسكيب — من التصميم إلى التنفيذ بأعلى جودة.
                    </p>

                    {/* قائمة مختصرة بالخدمات */}
                    <div
                        className="flex flex-wrap justify-center md:justify-start gap-6 text-green-700"
                        role="list"
                    >
                        <div className="flex items-center gap-2 drop-shadow-sm" role="listitem">
                            <Leaf className="w-6 h-6" />
                            زراعة وتنسيق نباتات
                        </div>
                        <div className="flex items-center gap-2 drop-shadow-sm" role="listitem">
                            <Flower2 className="w-6 h-6" />
                            تصميم حدائق عصرية
                        </div>
                        <div className="flex items-center gap-2 drop-shadow-sm" role="listitem">
                            <TreePalm className="w-6 h-6" />
                            إنشاء المساحات الخارجية
                        </div>
                    </div>

                    {/* زر التواصل */}
                    <div>
                        <Link to="/contact">
                            <button
                                className="mt-4 inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-2xl hover:bg-green-800 transition-shadow-lg"
                                aria-label="ابدأ التواصل الآن"
                            >
                                <PhoneCall className="w-5 h-5" />
                                ابدأ التواصل الآن
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactSection;
