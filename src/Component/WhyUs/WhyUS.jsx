import React from "react";
import { Leaf, Wrench, Target, Sprout } from "lucide-react";
import Photo from "../../assets/image/whu.webp";

function WhyUS() {
  const features = [
    {
      icon: <Leaf className="text-green-500 w-8 h-8" />,
      title: "ابتكار مستمر",
      desc: "نسعى دائمًا لتقديم حلول جديدة تناسب جميع المساحات.",
    },
    {
      icon: <Wrench className="text-green-500 w-8 h-8" />,
      title: "خدمات متكاملة",
      desc: "من التصميم إلى التنفيذ، نقدم كل ما تحتاجه لحديقتك.",
    },
    {
      icon: <Target className="text-green-500 w-8 h-8" />,
      title: "التزام واحترافية",
      desc: "نلتزم بالمواعيد ونعمل بأعلى معايير الجودة.",
    },
    {
      icon: <Sprout className="text-green-500 w-8 h-8" />,
      title: "رؤية مستقبلية",
      desc: "نواكب أحدث الاتجاهات في اللاندسكيب.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8" dir ="rtl">
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-right space-y-4">
          <h3 className="text-green-600 text-lg font-semibold">لماذا نحن؟</h3>
          <h2 className="text-3xl font-bold text-gray-800">
            خبرة وجمال مستدام
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            نحن في <strong>الامين لاند سكيب</strong> نتميز بخبرة واسعة في مجال
            اللاندسكيب، حيث نقدم تصاميم مبتكرة وحلول مستدامة تلبي احتياجات
            عملائنا. فريقنا المتخصص يضمن لك إنشاء مساحات خضراء مثالية تلائم
            رغباتك.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-sm">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={Photo}
            alt="تصميم شجرة يعكس الجمال المستدام"
            className="w-full rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyUS;
