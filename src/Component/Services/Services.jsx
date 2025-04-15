import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaWater, FaWrench, FaTruck, FaLeaf } from "react-icons/fa";
import img1 from "../../assets/image/عشب-صناعي.jpg";
import img2 from "../../assets/image/شلالات.jpg";
import img3 from "../../assets/image/برجولات.jpg";
import img4 from "../../assets/image/شبكات الري.jpg";
import img5 from "../../assets/image/sport2.jpg";
import img6 from "../../assets/image/ديكورات-زراعية.jpg";
import img7 from "../../assets/image/تطوير.jpg";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import BackGround from "../../UI/BackGround/BackGround";

function Services() {
  const servicesData = [
    {
      icon: <FaLeaf className="text-5xl text-green-700" />,
      title: "تصميم وتنسيق الحدائق",
      description:
        "نحن نقدم خدمات تصميم وتنسيق حدائق الفلل والمنازل والحدائق العامة والملاعب، باستخدام أفضل المواد والأساليب الحديثة. يشمل عملنا تنسيق العشب الصناعي والطبيعي، تصميم النوافير والشلالات، تركيب المظلات والسواتر، وتنفيذ ديكورات زراعية لخلق بيئة خضراء ومريحة.",
      image: img1,
    },
    {
      icon: <FaWater className="text-5xl text-green-700" />,
      title: "خدمة الشلالات الصناعية",
      description:
        "نقوم بتركيب شلالات صناعية في حدائق المنازل، والقصور، والحدائق العامة، والملاعب. نوفّر أنواع مختلفة مثل الشلالات الكلاسيكية والجدارية، وكذلك الشلالات الموسيقية والزخرفية. يتم اختيار النوع والشكل والخامة حسب رغبة العميل، من خلال مواد مثل الأحجار، البورسلين، السيراميك، والرخام. يمكن تركيب الشلالات بأحجام مختلفة لتناسب المساحات الصغيرة والكبيرة.",
      image: img2,
    },
    {
      icon: <FaWrench className="text-5xl text-green-700" />,
      title: "خدمة البرجولات والمظلات والسواتر",
      description:
        "نقدم خدمة تركيب المظلات، السواتر، والبرجولات بمختلف الأشكال والأحجام. تشمل خدماتنا تركيب مظلات لسيارات، حدائق، مسابح، قصور، مدارس، مساجد، وغيرها. نقوم أيضًا بتوفير سواتر حديدية وبلاستيكية وسواتر من القماش والخشب، بالإضافة إلى برجولات خشبية، حديدية، بلاستيكية، وقماشية. كل ذلك يتم باستخدام أفضل المواد وبأعلى المعايير الحديثة.",
      image: img3,
    },
    {
      icon: <FaTruck className="text-5xl text-green-700" />,
      title: "خدمة شبكات الري",
      description:
        "نوفر خدمات تركيب وصيانة شبكات الري الحديثة باستخدام شبكات الري بالتنقيط أو بالرش. نقدم حلول ري متكاملة لحدائق المنازل، القصور، الفلل، والملاعب. نقوم بتصميم أنظمة ري حسب طبيعة الأرض والنباتات، مع صيانة دورية لضمان استدامة النظام. كما نقدم استشارات هندسية لتحديد أفضل الخيارات لنظام الري المتوافق مع متطلبات كل عميل.",
      image: img4,
    },
    {
      icon: <FaTools className="text-5xl text-green-700" />,
      title: "تركيب وصيانة الملاعب",
      description:
        "نقوم بتصميم، تركيب، وصيانة الملاعب الرياضية وفقًا لأعلى المعايير العالمية. نحن نستخدم مواد متميزة لضمان جودة الملاعب مثل الملاعب العشبية الصناعية والملاعب متعددة الأغراض. نهتم بتركيب وتطوير الملاعب في الأندية الرياضية، الجامعات، المدارس، والمشاريع الخاصة. خدماتنا تشمل أيضًا الصيانة المستمرة لضمان سلامة الملاعب وجودتها.",
      image: img5,
    },
    {
      icon: <FaLeaf className="text-5xl text-green-700" />,
      title: "خدمة الديكورات الزراعية",
      description:
        "نقوم بعمل تصميم وتركيب أجمل الديكورات الزراعية للحدائق والمنازل بأعلى جودة وأرخص أسعار الديكورات الزراعية في المملكة العربية السعودية. لدينا تشكيلة كبيرة من تصاميم الديكورات الزراعية سواء داخل المنزل أو لحديقة المنزل بإستخدام النباتات والأحجار الطبيعية والملونة. كما نقدم تصميم وتنفيذ جميع أنواع الممرات بالحديقة مثل الحجرية والزجاجية والحصى الملون، مع فريق عمل من أفضل المهندسين والفنيين باستخدام أحدث التقنيات والمعدات.",
      image: img6,
    },
    {
      icon: <FaTruck className="text-5xl text-green-700" />,
      title: "توريد وتركيب خامات لاند سكيب",
      description:
        "تتميز شركة الأمين بتوفير جميع خامات اللاند سكيب من مواسير، رشاشات، خراطيم، وأكواع وغيرها من الخامات عالية الجودة، وذلك لأننا الموزع الرسمي لأكبر شركات نظم الري الحديث في مصر مثل شركة هنتر، شيرا، الوادي، الشامي، المصرية، وناسيكو. نحن نضمن للعملاء خامات أصلية بأسعار منافسة وخدمة تركيب احترافية بأيدي مهندسين وفنيين متخصصين.",
      image: img7,
    },
  ];

  return (
    <BackGround>
      <section id="services" className="py-20" dir="rtl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center pt-10">
            <TitleWithLeaves title="خدماتنا" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 text-center border-t-4 border-green-600"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </BackGround>
  );
}

export default Services;
