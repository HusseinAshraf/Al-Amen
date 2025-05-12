
import {
  FaRegHandshake,
  FaPaintBrush,
  FaCogs,
  FaHandsHelping,
} from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import BackGround from "../../UI/BackGround/BackGround";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import InfoCard from "./InfoCard ";
import StepCard from "./StepCard ";

// بيانات البطاقات التعريفية
const infoCards = [
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
];

// خطوات العمل
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
        <Helmet>
          <title>من نحن - الأمين لاندسكيب</title>
          <meta
            name="description"
            content="تعرف على شركة الأمين لاندسكيب، الشركة الرائدة في تصميم وتنفيذ مشاريع اللاندسكيب، الزراعة، الهارد سكيب، والصيانة المستدامة في مصر."
          />
          <meta
            name="keywords"
            content="الأمين لاندسكيب, لاندسكيب, تصميم حدائق, زراعة, تنسيق حدائق, هارد سكيب, خامات زراعية, شبكات ري, صيانة الحدائق, Landscape Egypt"
          />
          <meta name="author" content="الأمين لاندسكيب" />
          <meta property="og:title" content="من نحن - الأمين لاندسكيب" />
          <meta
            property="og:description"
            content="نحن شركة متخصصة في حلول اللاندسكيب المتكاملة من التصميم إلى التنفيذ والصيانة."
          />
        </Helmet>

        <section
          className="min-h-screen py-20 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center text-gray-900 w-full"
          dir="rtl"
        >
          <div className="max-w-5xl mx-auto text-center pt-10 mb-10">
            <TitleWithLeaves title="من نحن" />
          </div>

          <div className="mb-12">
            <p className="text-lg pt-5 leading-relaxed mb-6">
              تعتبر شركة{" "}
              <span className="font-bold text-green-700">الأمين لاند سكيب</span>{" "}
              واحدة من أبرز الشركات في تطوير اللاندسكيب في مصر. تأسست الشركة
              بهدف تحويل الأراضي البيضاء إلى مجتمعات متكاملة حديثة تلبي احتياجات
              المجتمع.
            </p>
          </div>

          {/* بطاقات الرؤية والإنجازات */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 sm:px-8 lg:px-12">
            {infoCards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>

          {/* خطوات العمل */}
          <div className="mt-32 w-full flex flex-col items-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-12 md:mb-16 text-center">
              خطوات العمل في الأمين لاند سكيب
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 w-full max-w-7xl relative">
              {steps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </div>

            <div className="mt-16">
              <Link
                to="/hero"
                aria-label="تعرف على مؤسس شركة الأمين لاندسكيب"
                className="px-8 py-3 bg-green-700 text-white text-xl rounded-full shadow-md hover:bg-green-800 transition"
              >
                تعرف على المؤسس
              </Link>
            </div>
          </div>
        </section>
      </BackGround>
    </>
  );
};

export default About;
