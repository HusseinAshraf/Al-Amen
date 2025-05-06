import React, { useState } from "react";
import { FaTools, FaWater, FaWrench, FaTruck, FaLeaf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import BackGround from "../../UI/BackGround/BackGround";
import { Helmet } from "react-helmet";

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
      images: ["https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B9%D8%B4%D8%A8-%D8%B5%D9%86%D8%A7%D8%B9%D9%8A.jpg?updatedAt=1745446721590",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%86%D8%AC%D9%8A%D9%84%D8%A9%20%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A.jpg?updatedAt=1745446722979",
        "https://ik.imagekit.io/hussein74/Al%20Amen/project4.jpg?updatedAt=1745446697841",
        "https://ik.imagekit.io/hussein74/Al%20Amen/OsamaBenZayed.jpg?updatedAt=1745446692188"

      ],
      category: "تنسيق الحدائق",
    },
    {
      icon: <FaWater />,
      title: "الشلالات الصناعية",
      description: "تصميم وتركيب الشلالات بكل أنواعها.",
      fullDescription:
        "نقدم خدمة تركيب شلالات صناعية في حدائق القصور والفلل، والحدائق العامة، وداخل المنازل وخارجها لتزيينها وزيادة قيمتها وإضافة لمسة جمالية عليها. ونوفر باقة متنوعة من أنواعها ومن أهمها ( الشلالات الكلاسيكية، والشلالات الجدارية، والشلالات الموسيقية، والشلالات الزخرفية، وغيرها) ونستخدم العديد من الخامات المختلفة في صناعة الشلال مثل ( الأحجار، والبورسلين، والسيراميك، والرخام وغيرها)، ويتم اختيار نوع الشلال وشكله والمادة المُستخدمة في صنعه بناءً على رغبة واختيار العميل. وتقدم شركة الامين لاند سكيب لتنسيق الحدائق أقوى عروضها وأفضل أسعار الشلالات، فقد يظن البعض أن تصميم وتركيب الشلالات الصناعية يحتاج إلى مساحات كبيرة وأموال كثيرة، ولكن هذا الاعتقاد خاطئ؛ حيث يمكن تركيب الشلالات في أي مكان داخل المنازل وخارجها، وفي أي مساحة متوفرة، فتقدم الشركة عدة أحجام مختلفة منه ( صغير – متوسط – كبير) حتى يتناسب مع مختلف المساحات، وفي حالة عدم ملاءمة لمساحة لتركيب الشلال يتم تصميم الشلال المعلّق أو الجداري، وهو الذي يُركب على الجدران ولا يحتاج سوى حوض صغير يصٌّب به مياهه.",
      images: ["https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D9%84%D8%A7%D9%84%D8%A7%D8%AA.jpg?updatedAt=1745446716766",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A743.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA5.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA1.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA2.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA3.jpg"
      ],
      category: "شلالات",
    },
    {
      icon: <FaWrench />,
      title: "البرجولات والمظلات",
      description: "تركيب برجولات وسواتر عالية الجودة.",
      fullDescription:
        "تعد خدمة تركيب المظلات والسواتر والبرجولات من أهم أعمال شركتنا الأساسية، ونُقدمها بأشكال وبأحجام مختلفة وتتناسب للعديد من الأغراض؛ حيث نوفر المظلات بمختلف أنواعها وأشكالها مثل (مظلات سيارات ومظلات قصور ومظلات مدارس ومظلات مسابح ومظلات مساجد ومظلات حدائق ومظلات مواقف سيارات ومظلات متحركة ومظلات الشد الإنشائي)، ويتم تصنيعها من خامات مختلفة وفقًا لرأي العميل مثل (المعدن، الحديد، والخشب، والبلاستيك، والقماش، وتوفر العديد من أنواع السواتر المختلفة من أهمها (سواتر حديد وسواتر بلاستيك وسواتر شرائح حديد وسواتر مجدول حديد وسواتر شرائح بلاستيك وسواتر مجدول بلاستيك وسواتر شنكو وسواتر قماش وسواتر المنيوم وسواتر خشبية)، إلى جانب العديد من أنواع البرجولات المختلفة مثل (برجولات خشبية وبرجولات حديد وبرجولات بلاستيك وبرجولات قماش وبرجولات لكسان) وغيرها، وتقوم بتركيبها جميعًا وفق الأساليب الحديثة والطرق المبتكرة بأقصى سرعة وكفاءة ودقة وفي أقل وقت ممكن.",
      images: ["https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%B1%D8%AC%D9%88%D9%84%D8%A7%D8%AA.jpg?updatedAt=1745446709223",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A72%20.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A73.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A74.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A77.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A71%20.jpg",
      ],
      category: "مظلات وبرجولات",
    },
    {
      icon: <FaTruck />,
      title: "شبكات الري",
      description: "شبكات ري حديثة بالتنقيط والرش.",
      fullDescription:
        "نوفر خدمة شبكات الري لحدائق المنازل والقصور والفلل، والحدائق العامة، وتقدم جميع أساسيات السباكة الزراعية، وجميع معدات الري المختلفة، وشبكات الري بالتنقيط، وشبكات الري بالرش، والتي يتم الاختيار من بينها وفقًا لطبيعة الأرض ونوع النباتات المزروعة، وتعتمد في عملها على الأساليب المبتكرة والحديثة من أجل تصميم شبكة ري مثالية قادرة على ري النباتات بكفاءة وبطرقة صحيحة، ولا يقتصر دورها على تركيب شبكات الري فقط، وإنما توفر فريق متخصص بصيانة هذه الشبكات عند تعرضها للتلف، كما توفر دويات شهرية وربع سنوية ونصف سنوية للاطمئنان على نظام الري، وتقوم بتركيب شبكات الري على أيدي كبار المهندسين والفنيين وفقًا لأصول الصناعة والطرق الجديدة في التركيب.",
      images: [
        "https://ik.imagekit.io/hussein74/Al%20Amen/111212.png",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A8%D9%83%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B1%D9%8A.jpg?updatedAt=1745446720365",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A3%D9%86%D8%B8%D9%85%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A7%D9%86%D8%B8%D9%85%D8%A9%20%D8%B1%D9%8A.jpeg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/1.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B1%D9%8A-%D9%85%D8%BA%D9%84%D9%82.jpg"
      ],
      category: "الري",
    },
    {
      icon: <FaTools />,
      title: "الملاعب",
      description: "تصميم وصيانة ملاعب رياضية.",
      fullDescription:
        "نقدم خدمة تركيب وتصميم وإنشاء وصيانة الملاعب على أعلى مستوى حرصًا منا على رضا وإرضاء العميل؛ حيث نقدم الخامات الممتازة والمُصنعة طبقًا لمواصفات الجودة العالمية، والمُصرح بالاستخدام الآمن لها خوفًا على صحة الأفراد من التعرض لأي مواد مشعة ناتجة عن هذه المواد، ونعتمد على الأساليب الرائعة والأفكار الجديدة في تصميم الملاعب وتنفيذها، كما نُضيف عليها كل ما هو جديد، ونهتم بآراء عملائنا في المقام الأول، ونسعى إلى تحقيق رغباتهم بالشكل المرجو، وتعتمد شركة الامين لاند سكيب على المواد التقنية والمستحدثات التكنولوجية الرائعة سواء كان في عمليات حفر الأرض أو التسوية أو تثبيت النجيل وغيرها. نُقدّم أقوى كادر فني متخصص يتسم بالخبرة الطويلة، والمهارة الفائقة في هذا المجال، ونهتم بتوفير الكثير من الجهد والوقت والمال المبذول في تصميم الملاعب، فلا يهمنا الكسب المادي فحسب، بل نسعى جاهدين لتكوين ثقة وعلاقة وطيدة بيننا وبين عملائنا من خلال تجهيز وتركيب ملاعب رائعة",
      images: ["https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%207.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%201.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%202.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%203.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%204.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%206.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%208.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%209.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A8%2010.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D9%84%D8%A7%D8%B9%D8%A85.jpg", "https://ik.imagekit.io/hussein74/Al%20Amen/sport2.jpg?updatedAt=1745446702545"
      ],
      category: "ملاعب",
    },
    {
      icon: <FaLeaf />,
      title: "الديكورات الزراعية",
      description: "تصاميم حدائق ديكورية باستخدام نباتات وأحجار طبيعية.",
      fullDescription:
        "نقوم بعمل تصميم وتركيب أجمل الديكورات الزراعية للحدائق والمنازل بأعلى جودة وأرخص أسعار الديكورات الزراعية في المملكة العربية السعودية. لدينا تشكيلة كبيرة من تصاميم الديكورات الزراعية سواء داخل المنزل أو لحديقة المنزل بإستخدام النباتات والأحجار الطبيعية والملونة.  كما تقدم شركة أبشر لتنسيق الحدائق كافة الخدمات المتعلقة بتنظيم وتنسيق وديكورات الحدائق عامة وديكورات حدائق منزلية بصفة خاصة. وتقوم الشركة أيضاً بتصميم وتنفيذ كافة أنواع الممرات بالحديقة سواء الحجرية أو الزجاجية أو الحصى الملون أو الأحجار أو الرخام وغيرها من الأنواع. كل ذلك وأكثر يتم من خلال فريق عمل مجهز ومدرب من أفضل الفنيين والمهندسين الزراعيين ذوي الخبرة والمدربين للتعامل مع أفضل التقنيات وأحدث المعدات في مجال الديكورات الزراعية.",
      images: ["https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9.jpg?updatedAt=1745446720627",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%B4%D8%A7%D9%84%D8%A7%D8%AA1.jpg?updatedAt=1746549679149",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A8%D8%A7%D8%B1%D8%AC%D9%88%D9%84%D8%A72%20.jpg?updatedAt=1746549357624",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8.jpg?updatedAt=1745446710369",
        "https://ik.imagekit.io/hussein74/Al%20Amen/image1.jpg?updatedAt=1745446687674"
      ],
      category: "ديكورات",
    },
    {
      icon: <FaTruck />,
      title: "توريد خامات لاند سكيب",
      description: "توريد خامات معتمدة من كبرى الشركات.",
      fullDescription:
        " تتميز شركة الأمين بتوفير جميع خامات لاند سكيب من  مواسير و رشاشات و خراطيم واكواع  وماكينات قص و غيرها من خامات اللاند سكيب  التي تتميز بجوده  عالية وذلك لأننا الموزع الرسمي لي اكبر شركات نظم ري حديث في مصر مثل شركة هنتر و شيرا و الوادي و الشامي و المصرية و ناسيكو",
      images: [
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D8%A7%D9%83%D9%8A%D9%86%D8%A9%20%D9%82%D8%B5.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AD%D9%85%D8%A7%D9%85%D8%A7%D8%AA%20%D8%B3%D8%A8%D8%A7%D8%AD%D8%A9.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D8%A8%D9%8A%D8%AF%D8%A7%D8%AA.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A7%D9%86%D8%AA%D9%84%D9%88%D9%83.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AD%D9%85%D8%A7%D9%85%D8%A7%D8%AA%20%D8%B3%D8%A8%D8%A7%D8%AD%D8%A9%203.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%AD%D9%85%D8%A7%D9%85%D8%A7%D8%AA%20%D8%B3%D8%A8%D8%A7%D8%AD%D8%A92.jpg"
        , "https://ik.imagekit.io/hussein74/Al%20Amen/33.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/444.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/55.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/66.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/77.jpg",
        "https://ik.imagekit.io/hussein74/Al%20Amen/99.jpg"
      ],
      category: "لاندسكيب",
    },
  ];

  const categories = ["الكل", ...new Set(servicesData.map((s) => s.category))];

  const filteredServices =
    selectedCategory === "الكل"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <>
      <BackGround>
        <Helmet>
          {/* عنوان الصفحة */}
          <title>خدماتنا - الأمين لاند سكيب</title>

          {/* وصف الصفحة */}
          <meta name="description" content="تعرف على خدماتنا المتنوعة في تنسيق الحدائق والشلالات الصناعية والري والملاعب. خدمات احترافية لضمان أفضل تجربة لعملائنا." />

          {/* كلمات رئيسية */}
          <meta name="keywords" content="تنسيق حدائق, شلالات صناعية, ري, ديكورات زراعية, ملاعب, لاند سكيب" />

          {/* Open Graph metadata */}
          <meta property="og:title" content="خدماتنا | شركتنا لتنسيق الحدائق" />
          <meta property="og:description" content="نحن نقدم خدمات شاملة في مجال تنسيق الحدائق وتصميم الشلالات والري. اكتشف كل ما نقدمه لعملائنا." />
          <meta property="og:image" content="رابط_الصورة_المعروضة_لخدماتنا" />
          <meta property="og:url" content="رابط_موقعك_الالكتروني" />
        </Helmet>
        <section id="services" className="py-20 px-4 sm:px-6 md:px-16" dir="rtl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 pt-7">
              <TitleWithLeaves title="خدماتنا" />
            </div>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition ${selectedCategory === category
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
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-56 object-fill bg-white"
                  />
                  <div className="p-4 sm:p-6 text-center space-y-3">
                    <div className="flex justify-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-700 flex items-center justify-center rounded-full shadow-inner transition group-hover:scale-110 group-hover:rotate-6 group-hover:bg-green-600 group-hover:text-white text-2xl sm:text-3xl">
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
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 pt-20"
              onClick={() => setSelectedService(null)}
            >
              <div
                className="bg-white w-full max-w-md sm:max-w-xl lg:max-w-3xl rounded-2xl shadow-xl p-4 sm:p-6 relative overflow-y-auto max-h-[80vh] space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 left-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                  onClick={() => setSelectedService(null)}
                >
                  &times;
                </button>
                {selectedService.images ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full rounded-xl"
                  >
                    {selectedService.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`slide-${idx}`}
                          className="w-full h-72 object-fill bg-white rounded-xl"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : selectedService.image ? (
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-72 object-fill bg-white rounded-xl"
                  />
                ) : null}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-green-800 mb-2">{selectedService.title}</h2>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>


      </BackGround>
    </>
  )
}

export default Services;
