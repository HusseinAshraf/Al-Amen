import React, { useState } from "react";
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
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const servicesData = [
    {
      icon: <FaLeaf />,
      title: "تصميم وتنسيق الحدائق",
      description: "تنسيق حدائق المنازل باستخدام أفضل المواد والتصاميم.",
      fullDescription:
        "نقدم خدمة تركيب العشب الصناعي طبيعي على أعلى مستوى لجميع عملائنا؛ حيث نوفر مختلف أنواعه سواء كان عشب  أرضي أو عشب جداري، بجميع ألوانه وكثافاته المتنوعة، والذي يتم الاختيار من بينها وفقًا لرأي العميل مع تعليمات المُهندس المختص بتعيين المكان المُراد تركيب النجيل فيختلف تركيب العشب الصناعي داخل المنازل عن حدائق المنازل والقصور والفلل، عن الحدائق العامة، عن النوادي، حيث يفضل تركيب العشب الجداري والعشب قليل الكثافة داخل المنازل، بينما يتم تركيب العشب  متوسط الكثافة في حدائق المنازل والقصور والفلل، ويستخدم العشب ذات الكثافة الأكبر في النوادي والحدائق العامة حتى يتحمل الضغط عليه، ولا تعتمد الشركة على اسلوب واحد ثابت في تركيبه، وإنما تبتكر كل ما هو جديد وحديث حتى يظهر بشكل لائق وجذاب خاطف للعيون وساحر للقلوب، حيث تقوم بقصه على هيئة أشكال جميلة تتناسب مع ذوق العميل مثل الأشكال المربعة، والدائرية، يجعل من الحديقة لوحة فنية غاية في الجمال، وتعتمد شركة الأمين لاند سكيب في عملها على أفضل الأدوات والأجهزة التكنولوجية الرائعة لقياس المساحات، ودك الأرض وتركيب النجيل بدقة وسرعة فائقة.",
      image: img1,
      category: "تنسيق الحدائق",
    },
    {
      icon: <FaWater />,
      title: "الشلالات الصناعية",
      description: "تصميم وتركيب الشلالات بكل أنواعها.",
      fullDescription:
        "نقدم خدمة تركيب شلالات صناعية في حدائق القصور والفلل، والحدائق العامة، وداخل المنازل وخارجها لتزيينها وزيادة قيمتها وإضافة لمسة جمالية عليها. ونوفر باقة متنوعة من أنواعها ومن أهمها ( الشلالات الكلاسيكية، والشلالات الجدارية، والشلالات الموسيقية، والشلالات الزخرفية، وغيرها) ونستخدم العديد من الخامات المختلفة في صناعة الشلال مثل ( الأحجار، والبورسلين، والسيراميك، والرخام وغيرها)، ويتم اختيار نوع الشلال وشكله والمادة المُستخدمة في صنعه بناءً على رغبة واختيار العميل. وتقدم شركة الامين لاند سكيب لتنسيق الحدائق أقوى عروضها وأفضل أسعار الشلالات، فقد يظن البعض أن تصميم وتركيب الشلالات الصناعية يحتاج إلى مساحات كبيرة وأموال كثيرة، ولكن هذا الاعتقاد خاطئ؛ حيث يمكن تركيب الشلالات في أي مكان داخل المنازل وخارجها، وفي أي مساحة متوفرة، فتقدم الشركة عدة أحجام مختلفة منه ( صغير – متوسط – كبير) حتى يتناسب مع مختلف المساحات، وفي حالة عدم ملاءمة لمساحة لتركيب الشلال يتم تصميم الشلال المعلّق أو الجداري، وهو الذي يُركب على الجدران ولا يحتاج سوى حوض صغير يصٌّب به مياهه.",
      image: img2,
      category: "شلالات",
    },
    {
      icon: <FaWrench />,
      title: "البرجولات والمظلات",
      description: "تركيب برجولات وسواتر عالية الجودة.",
      fullDescription:
        "تعد خدمة تركيب المظلات والسواتر والبرجولات من أهم أعمال شركتنا الأساسية، ونُقدمها بأشكال وبأحجام مختلفة وتتناسب للعديد من الأغراض؛ حيث نوفر المظلات بمختلف أنواعها وأشكالها مثل (مظلات سيارات ومظلات قصور ومظلات مدارس ومظلات مسابح ومظلات مساجد ومظلات حدائق ومظلات مواقف سيارات ومظلات متحركة ومظلات الشد الإنشائي)، ويتم تصنيعها من خامات مختلفة وفقًا لرأي العميل مثل (المعدن، الحديد، والخشب، والبلاستيك، والقماش، وتوفر العديد من أنواع السواتر المختلفة من أهمها (سواتر حديد وسواتر بلاستيك وسواتر شرائح حديد وسواتر مجدول حديد وسواتر شرائح بلاستيك وسواتر مجدول بلاستيك وسواتر شنكو وسواتر قماش وسواتر المنيوم وسواتر خشبية)، إلى جانب العديد من أنواع البرجولات المختلفة مثل (برجولات خشبية وبرجولات حديد وبرجولات بلاستيك وبرجولات قماش وبرجولات لكسان) وغيرها، وتقوم بتركيبها جميعًا وفق الأساليب الحديثة والطرق المبتكرة بأقصى سرعة وكفاءة ودقة وفي أقل وقت ممكن.",
      image: img3,
      category: "مظلات وبرجولات",
    },
    {
      icon: <FaTruck />,
      title: "شبكات الري",
      description: "شبكات ري حديثة بالتنقيط والرش.",
      fullDescription:
        "نوفر خدمة شبكات الري لحدائق المنازل والقصور والفلل، والحدائق العامة، وتقدم جميع أساسيات السباكة الزراعية، وجميع معدات الري المختلفة، وشبكات الري بالتنقيط، وشبكات الري بالرش، والتي يتم الاختيار من بينها وفقًا لطبيعة الأرض ونوع النباتات المزروعة، وتعتمد في عملها على الأساليب المبتكرة والحديثة من أجل تصميم شبكة ري مثالية قادرة على ري النباتات بكفاءة وبطرقة صحيحة، ولا يقتصر دورها على تركيب شبكات الري فقط، وإنما توفر فريق متخصص بصيانة هذه الشبكات عند تعرضها للتلف، كما توفر دويات شهرية وربع سنوية ونصف سنوية للاطمئنان على نظام الري، وتقوم بتركيب شبكات الري على أيدي كبار المهندسين والفنيين وفقًا لأصول الصناعة والطرق الجديدة في التركيب.",
      image: img4,
      category: "الري",
    },
    {
      icon: <FaTools />,
      title: "الملاعب",
      description: "تصميم وصيانة ملاعب رياضية.",
      fullDescription:
        "نقدم خدمة تركيب وتصميم وإنشاء وصيانة الملاعب على أعلى مستوى حرصًا منا على رضا وإرضاء العميل؛ حيث نقدم الخامات الممتازة والمُصنعة طبقًا لمواصفات الجودة العالمية، والمُصرح بالاستخدام الآمن لها خوفًا على صحة الأفراد من التعرض لأي مواد مشعة ناتجة عن هذه المواد، ونعتمد على الأساليب الرائعة والأفكار الجديدة في تصميم الملاعب وتنفيذها، كما نُضيف عليها كل ما هو جديد، ونهتم بآراء عملائنا في المقام الأول، ونسعى إلى تحقيق رغباتهم بالشكل المرجو، وتعتمد شركة الامين لاند سكيب على المواد التقنية والمستحدثات التكنولوجية الرائعة سواء كان في عمليات حفر الأرض أو التسوية أو تثبيت النجيل وغيرها. نُقدّم أقوى كادر فني متخصص يتسم بالخبرة الطويلة، والمهارة الفائقة في هذا المجال، ونهتم بتوفير الكثير من الجهد والوقت والمال المبذول في تصميم الملاعب، فلا يهمنا الكسب المادي فحسب، بل نسعى جاهدين لتكوين ثقة وعلاقة وطيدة بيننا وبين عملائنا من خلال تجهيز وتركيب ملاعب رائعة",
      image: img5,
      category: "ملاعب",
    },
    {
      icon: <FaLeaf />,
      title: "الديكورات الزراعية",
      description: "تصاميم حدائق ديكورية باستخدام نباتات وأحجار طبيعية.",
      fullDescription:
        "نقوم بعمل تصميم وتركيب أجمل الديكورات الزراعية للحدائق والمنازل بأعلى جودة وأرخص أسعار الديكورات الزراعية في المملكة العربية السعودية. لدينا تشكيلة كبيرة من تصاميم الديكورات الزراعية سواء داخل المنزل أو لحديقة المنزل بإستخدام النباتات والأحجار الطبيعية والملونة.  كما تقدم شركة أبشر لتنسيق الحدائق كافة الخدمات المتعلقة بتنظيم وتنسيق وديكورات الحدائق عامة وديكورات حدائق منزلية بصفة خاصة. وتقوم الشركة أيضاً بتصميم وتنفيذ كافة أنواع الممرات بالحديقة سواء الحجرية أو الزجاجية أو الحصى الملون أو الأحجار أو الرخام وغيرها من الأنواع. كل ذلك وأكثر يتم من خلال فريق عمل مجهز ومدرب من أفضل الفنيين والمهندسين الزراعيين ذوي الخبرة والمدربين للتعامل مع أفضل التقنيات وأحدث المعدات في مجال الديكورات الزراعية.",
      image: img6,
      category: "ديكورات",
    },
    {
      icon: <FaTruck />,
      title: "توريد خامات لاند سكيب",
      description: "توريد خامات معتمدة من كبرى الشركات.",
      fullDescription:
        "تتميز شركة الأمين بتوفير جميع خامات لاند سكيب من  مواسير و رشاشات و خراطيم واكواع  وغيرها من خامات اللاند سكيب  التي تتميز بجوده  عالية وذلك لأننا الموزع الرسمي لي اكبر شركات نظم ري حديث في مصر مثل شركة هنتر و شيرا و الوادي و الشامي و المصرية و ناسيكو",
      image: img7,
      category: "لاندسكيب",
    },
  ];

  const categories = ["الكل", ...new Set(servicesData.map((s) => s.category))];

  const filteredServices =
    selectedCategory === "الكل"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <BackGround>
      <section id="services" className="py-20 px-4 sm:px-6 md:px-16" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 pt-7">
            <TitleWithLeaves title="خدماتنا" />
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white border border-green-400 text-green-600 hover:bg-green-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-4 sm:p-6 space-y-3 text-center">
                  <div className="flex justify-center">
                    <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-700 flex items-center justify-center rounded-full shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-green-600 group-hover:text-white text-2xl sm:text-3xl">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-green-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedService && (
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 pt-20 "
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white w-full max-w-md sm:max-w-xl lg:max-w-2xl rounded-2xl shadow-xl p-4 sm:p-6 relative overflow-y-auto max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 left-3 text-gray-500 hover:text-red-600 text-xl"
                onClick={() => setSelectedService(null)}
              >
                ✕
              </button>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-52 sm:h-60 md:h-72 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                {selectedService.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                {selectedService.fullDescription || selectedService.description}
              </p>
            </div>
          </div>
        )}
      </section>
    </BackGround>
  );
}

export default Services;
