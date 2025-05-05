import React, { useState } from "react";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    title: "تلال الفسطاط الجديدة",
    description:
      "إنشاءات كمبوند تلال الفسطاط الجديدة بمساحة 100 ألف م² في الفسطاط الجديدة.",
    fullDescription:
      "انشاءات كمبوند تلال الفسطاط الجديدة بمساحة 100 ألف م² في الفسطاط الجديدة. يشمل المشروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/telal.jpg?updatedAt=1745446710351",
    category: "إنشاءات",
  },
  {
    title: "كمبوند مينا جادرن سيتي",
    description: "إنشاءات كمبوند مينا جادرن سيتي في 6 أكتوبر.",
    fullDescription:
      "إنشاءات كمبوند مينا جادرن سيتي في 6 أكتوبر. يشمل المشروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/mennaGarden.jpg?updatedAt=1745446690125",
    category: "إنشاءات",
  },
  {
    title: "نادي 6 أكتوبر",
    description: "إنشاءات نادي 6 أكتوبر.",
    fullDescription:
      "إنشاءات نادي 6 أكتوبر. يشمل المشروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%86%D8%A7%D8%AF%D9%8A%206%20%D8%A7%D9%83%D8%AA%D9%88%D8%A8%D8%B1.jpeg?updatedAt=1745449239902",
    category: "إنشاءات",
  },
  {
    title: "المنتج الصحي للطب النفسي",
    description: "المنتج الصحي للطب النفسي في التجمع الأول – القاهرة الجديدة.",
    fullDescription:
      "المنتج الصحي للطب النفسي في التجمع الأول – القاهرة الجديدة. يشمل المشروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%B9%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A.jpg?updatedAt=1745446713077",
    category: "إنشاءات",
  },
  {
    title: "كمبوند مينا ريزيدانس",
    description:
      "إنشاءات كمبوند مينا ريزيدانس في التجمع الخامس – القاهرة الجديدة.",
    fullDescription:
      "إنشاءات كمبوند مينا ريزيدانس في التجمع الخامس – القاهرة الجديدة. يشمل المشروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/MenaRezdans.jpg?updatedAt=1745446694930",
    category: "إنشاءات",
  },
  {
    title: "جراند سيتي",
    description: "إنشاءات جراند سيتي على طريق الواحات – 6 أكتوبر.",
    fullDescription:
      "إنشاءات جراند سيتي على طريق الواحات – 6 أكتوبر. يشمل المشروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/grandcity.jpg?updatedAt=1745446686024",
    category: "إنشاءات",
  },
  {
    title: "مدخل مدينة الشروق",
    description: "إنشاءات مدخل مدينة الشروق على طريق الإسماعيلية.",
    fullDescription:
      "إنشاءات مدخل مدينة الشروق على طريق الإسماعيلية. يشمل المشروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D8%AF%D8%AE%D9%84%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D9%82.jpg?updatedAt=1745449539025",
    category: "إنشاءات",
  },
  {
    title: "صيانه قرية مرمر",
    description: "صيانة قرية مرمر بمساحة 135 ألف م² في الساحل الشمالي.",
    fullDescription:
      "صيانة قرية مرمر بمساحة 135 ألف م² في الساحل الشمالي. يشمل المشروع صيانة جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/Mrmr.jpg?updatedAt=1745446696101",
    category: "صيانة",
  },
  {
    title: "صيانه قرية برنسيس",
    description: "صيانة قرية برنسيس بمساحة 80 ألف م² في 6 أكتوبر - زايد.",
    fullDescription:
      "صيانة قرية برنسيس بمساحة 80 ألف م² في 6 أكتوبر - زايد. يشمل المشروع صيانة جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/Berenses.jpg?updatedAt=1745446686033",
    category: "صيانة",
  },
  {
    title: "صيانه وإنشاءات قرية سيلسيا",
    description: "صيانة وإنشاءات قرية سيلسيا بمساحة 100 ألف م² في مرسى مطروح.",
    fullDescription:
      "صيانة وإنشاءات قرية سيلسيا بمساحة 100 ألف م² في مرسى مطروح. يشمل المشروع صيانة جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/SeseliaMatrouh.jpg?updatedAt=1745446699371",
    category: "صيانة",
  },
  {
    title: "مدرسة الحي العاشر (أسامة بن زايد)",
    description: "إنشاءات مدرسة الحي العاشر (أسامة بن زايد) في 6 أكتوبر.",
    fullDescription:
      "إنشاءات مدرسة الحي العاشر (أسامة بن زايد) في 6 أكتوبر. يشمل المشروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/OsamaBenZayed.jpg?updatedAt=1745446692188",
    category: "إنشاءات",
  },
  {
    title: "تطوير طريق شركة رايه القابضة",
    description: "تطوير طريق شركة رايه القابضة في 6 أكتوبر.",
    fullDescription:
      "تطوير طريق شركة رايه القابضة في 6 أكتوبر. يشمل المشروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/Raya6-optimized.webp",
    category: "تطوير",
  },
  {
    title: "مصنع لذة السادات",
    description: "إنشاءات مصنع لذة السادات في المنوفية.",
    fullDescription:
      "إنشاءات مصنع لذة السادات في المنوفية. يشمل المشذروع تصميم وتنفيذ جميع المرافق العامة، المساحات الخضراء، والطرق الداخلية.",
    image: "https://ik.imagekit.io/hussein74/Al%20Amen/project5.jpg?updatedAt=1745446697696",
    category: "إنشاءات",
  },
];

const Project = ({ limit }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = [
    "الكل",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "الكل"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const projectsToShow = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <section
      id="projects"
      className="py-16 text-center bg-gradient-to-b from-green-50 to-white"
      dir="rtl"
    >
      <Helmet>
        <title>أعمالنا - الأمين لاند سكيب</title>
        <meta
          name="description"
          content="اكتشف أعمالنا في مشاريع الإنشاءات والصيانة. تصفح أحدث مشاريعنا واكتشف تفاصيلها."
        />
        <meta
          name="keywords"
          content="مشاريع, إنشاءات, صيانة, أعمالنا, مشاريع بناء"
        />
        <link rel="canonical" href="https://www.yoursite.com/projects" />
      </Helmet>

      <div className="max-w-5xl mx-auto text-center pt-10">
        <TitleWithLeaves title="أعمالنا" />
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-10 pt-5">
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

      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
        {projectsToShow.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 border-t-4 border-green-600"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              title={project.title}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h3 className="text-xl font-semibold text-green-800 mt-4">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 pt-20"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white w-full max-w-md sm:max-w-xl lg:max-w-2xl rounded-2xl shadow-xl p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 left-3 text-gray-500 hover:text-red-600 text-xl"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-52 sm:h-60 md:h-72 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
                {selectedProject.fullDescription || selectedProject.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {limit && projects.length > limit && (
        <div className="mt-10">
          <Link
            to="/project"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors duration-300"
          >
            عرض المزيد
          </Link>
        </div>
      )}
    </section>
  );
};

export default Project;
