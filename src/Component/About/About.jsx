import {
  FaRegHandshake,
  FaPaintBrush,
  FaCogs,
  FaHandsHelping,
} from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import BackGround from "../../UI/BackGround/BackGround";

const steps = [
  {
    id: "01",
    icon: FaRegHandshake,
    title: "الاستشارة والتخطيط",
    description:
      "نبدأ رحلتنا معك بفهم رؤيتك واحتياجاتك الخاصة للمساحة الخضراء. نقوم بزيارة الموقع، ونناقش الأفكار والمقترحات لوضع خطة تصميم شاملة تناسب تطلعاتك واحتياجاتك.",
  },
  {
    id: "02",
    icon: FaPaintBrush,
    title: "التصميم الإبداعي",
    description:
      "نعمل على تصميم المساحة بطريقة مبتكرة تجمع بين الجمال والوظائف العملية. نستخدم أحدث التقنيات وأفضل الأدوات لإنشاء تصاميم مميزة تلائم طبيعة المكان وتعكس شخصيتك الفريدة.",
  },
  {
    id: "03",
    icon: FaCogs,
    title: "التنفيذ الاحترافي",
    description:
      "يتم تنفيذ المشروع على أيدي فريق متخصص ذو خبرة عالية. نهتم بكل التفاصيل، من تجهيز التربة وزراعة النباتات إلى تركيب شبكات الري الحديثة، مع الالتزام بالجودة والمواعيد.",
  },
  {
    id: "04",
    icon: FaHandsHelping,
    title: "الصيانة والمتابعة",
    description:
      "نحرص على استمرارية جمال المساحة من خلال خدمات صيانة دورية تشمل تقليم النباتات، إزالة الأعشاب الضارة، وفحص أنظمة الري. نبقى معك لضمان أن تظل مساحتك الخضراء دائمًا بأفضل حال.",
  },
];

const About = () => {
  return (
    <>
      <BackGround>
        <section
          className="min-h-screen py-20 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center text-gray-900 w-full"
          dir="rtl"
        >
          {/* عنوان رئيسي */}
          <div className="max-w-5xl mx-auto text-center pt-10 mb-10">
            <TitleWithLeaves title="من نحن" />
          </div>

          {/* فقرة تعريف */}
          <div className="mb-12">
            <p className="text-lg pt-5 leading-relaxed mb-6">
              تعتبر شركة{" "}
              <span className="font-bold text-green-700">الأمين لاند سكيب</span>{" "}
              واحدة من أبرز الشركات في تطوير اللاندسكيب في مصر. تأسست الشركة
              بهدف تحويل الأراضي البيضاء إلى مجتمعات متكاملة حديثة تلبي احتياجات
              المجتمع.
            </p>
          </div>

          {/* البطاقات التعريفية */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 sm:px-8 lg:px-12">
            {[
              {
                icon: FaRegHandshake,
                title: "رؤيتنا",
                description:
                  "نسعى لتحقيق التميز في تطوير اللاندسكيب من خلال مشاريع مبتكرة ومستدامة تلبي توقعات العملاء.",
              },
              {
                icon: FaPaintBrush,
                title: "إنجازاتنا",
                description:
                  "تنفيذ مشاريع سكنية فاخرة بتصاميم عصرية.\nإنشاء مجمعات تجارية وترفيهية متكاملة.\nدمج مفهوم الاستدامة في جميع المشاريع.",
              },
              {
                icon: FaHandsHelping,
                title: "التزامنا",
                description:
                  "نحرص على استخدام التكنولوجيا الخضراء والممارسات البيئية الصديقة لتحقيق الاستدامة وضمان بيئة متكاملة.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 text-right border-t-4 border-green-600"
              >
                <div className="flex items-center mb-4">
                  <item.icon className="text-green-600 text-2xl ml-2" />
                  <h3 className="text-2xl font-semibold text-green-700">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* خطوات العمل الجديدة */}
          <div className="mt-32 w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold text-green-700 mb-16">
              خطوات العمل في الامين لاند سكيب
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-7xl relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative text-center p-6 rounded-xl bg-white shadow-md transition-all duration-300 border-t-4 border-green-600
                    ${index % 2 === 0 ? "translate-y-6" : "-translate-y-6"}
                  `}
                >
                  {/* رقم الخطوة */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-700 text-white text-sm px-4 py-1 rounded-md shadow-md font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* الأيقونة */}
                  <step.icon className="text-green-600 text-3xl mb-4 mt-6" />

                  {/* العنوان */}
                  <h3 className="text-green-800 font-bold text-lg mb-2">
                    {step.title}
                  </h3>

                  {/* النص */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </BackGround>
    </>
  );
};

export default About;
