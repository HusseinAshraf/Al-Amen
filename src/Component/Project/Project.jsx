import React from "react";
import { motion } from "framer-motion";
// import villaVideo from "../../assets/video/فيلا الفطيم.mp4";
import Tellal from "../../assets/image/telal.jpg";
import deglla from "../../assets/image/deglla.jpg";
import mennaGarden from "../../assets/image/mennaGarden.jpg";
import MenaRezdans from "../../assets/image/MenaRezdans.jpg";
import OsamaBenZayed from "../../assets/image/OsamaBenZayed.jpg";
import Berenses from "../../assets/image/Berenses.jpg";
import grandcity from "../../assets/image/grandcity.jpg";
import Mrmr from "../../assets/image/Mrmr.jpg";
import SeseliaMatrouh from "../../assets/image/SeseliaMatrouh.jpg";
import Zayed2000 from "../../assets/image/Zayed2000.jpg";
import project3 from "../../assets/image/project 3.jpg";
import project4 from "../../assets/image/project4.jpg";
import project5 from "../../assets/image/project5.jpg";
import project6 from "../../assets/image/project6.jpg";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import { Link } from "react-router-dom";

const projects = [
  // {
  //   title: "فيلا الفطيم",
  //   description:
  //     "إنشاء اللاندسكيب، وتوريد المعدات والأدوات الزراعية وتوريد الزرع والصيانة حتى الآن بمساحة ضخمة.",
  //   video: villaVideo,
  // },

  {
    title: "تلال الفسطاط الجديدة",
    description:
      " إنشاءات كمبوند تلال الفسطاط الجديدة بمساحة 100 ألف م² في الفسطاط الجديدة.",
    image: Tellal,
  },

  {
    title: "صيانه كمبوند دجلة",
    description: "صيانة كمبوند دجلة بمساحة 175 ألف م² في 6 أكتوبر.",
    image: deglla,
  },
  {
    title: "صيانه كمبوند ستون ريزيدنس",
    description:
      "صيانة كمبوند ستون ريزيدنس بمساحة 100 ألف م² في القطامية – التجمع الثالث.",
    image: project6,
  },
  {
    title: "كمبوند مينا جادرن سيتي",
    description: "إنشاءات كمبوند مينا جادرن سيتي في 6 أكتوبر.",
    image: mennaGarden,
  },
  {
    title: "نادي 6 أكتوبر",
    description: "إنشاءات نادي 6 أكتوبر.",
    image: project4,
  },
  {
    title: "المنتج الصحي للطب النفسي",
    description: "المنتج الصحي للطب النفسي في التجمع الأول – القاهرة الجديدة.",
    image: project5,
  },
  {
    title: "كمبوند مينا ريزيدانس",
    description:
      "إنشاءات كمبوند مينا ريزيدانس في التجمع الخامس – القاهرة الجديدة.",
    image: MenaRezdans,
  },
  {
    title: "جراند سيتي",
    description: "إنشاءات جراند سيتي على طريق الواحات – 6 أكتوبر.",
    image: grandcity,
  },
  {
    title: "مدخل مدينة الشروق",
    description: "إنشاءات مدخل مدينة الشروق على طريق الإسماعيلية.",
    image: project4,
  },
  {
    title: "صيانه قرية مرمر",
    description: "صيانة قرية مرمر بمساحة 135 ألف م² في الساحل الشمالي.",
    image: Mrmr,
  },
  {
    title: "صيانه قرية برنسيس",
    description: "صيانة قرية برنسيس بمساحة 80 ألف م² في 6 أكتوبر - زايد.",
    image: Berenses,
  },
  {
    title: "صيانه وانشاءات قرية سيلسيا",
    description: "صيانة وإنشاءات قرية سيلسيا بمساحة 100 ألف م² في مرسى مطروح.",
    image: SeseliaMatrouh,
  },
  {
    title: "مدرسة الحي العاشر (أسامة بن زايد)",
    description: "إنشاءات مدرسة الحي العاشر (أسامة بن زايد) في 6 أكتوبر.",
    image: OsamaBenZayed,
  },
  {
    title: "تطوير طريق شركة رايه القابضة",
    description: "تطوير طريق شركة رايه القابضة في 6 أكتوبر.",
    image: project5,
  },
  {
    title: "مصنع لذة السادات",
    description: "إنشاءات مصنع لذة السادات في المنوفية.",
    image: project6,
  },
  {
    title: "مدرسة كونتينتال",
    description: "إنشاءات مدرسة كونتينتال في الإسكندرية.",
    image: project3,
  },
  {
    title: "مصنع فاكسيرا المصل واللقاح",
    description: "إنشاءات مصنع فاكسيرا المصل واللقاح في 6 أكتوبر.",
    image: project4,
  },
  {
    title: "قرية تلال الجزيرة",
    description: "إنشاءات قرية تلال الجزيرة في 6 أكتوبر - زايد.",
    image: project5,
  },
  {
    title: "ريزيدنس وتوين هاوس زايد",
    description: "إنشاءات ريزيدنس وتوين هاوس زايد في 6 أكتوبر.",
    image: project6,
  },
  {
    title: "قصر الكوراندوم",
    description: "إنشاءات قصر الكوراندوم في 6 أكتوبر.",
    image: project3,
  },
  {
    title: "مستشفي سويس ميديكال",
    description: "إنشاءات مستشفي سويس ميديكال في الشروق – القاهرة الجديدة.",
    image: project4,
  },
  {
    title: "مدارس القاهرة للغات",
    description: "إنشاءات مدارس القاهرة للغات في 6 أكتوبر.",
    image: project5,
  },
  {
    title: "مدرسة الوليد",
    description: "إنشاءات مدرسة الوليد في الجيزة.",
    image: project6,
  },
  {
    title: "مستشفي بهمان",
    description: "إنشاءات مستشفي بهمان في حلوان.",
    image: project3,
  },
  {
    title: "شركة تلي تيك",
    description: "إنشاءات شركة تلي تيك في القرية الذكية.",
    image: project4,
  },
  {
    title: "مدارس سيتي",
    description: "إنشاءات مدارس سيتي في 6 أكتوبر.",
    image: project5,
  },
  {
    title: "مصنع جنرال موتورز",
    description: "إنشاءات مصنع جنرال موتورز في 6 أكتوبر.",
    image: project6,
  },
  {
    title: "ميراج جولف سيتي",
    description: "إنشاءات ميراج جولف سيتي في 6 أكتوبر.",
    image: project3,
  },
  {
    title: "نادي الجمهورية",
    description: "إنشاءات نادي الجمهورية في شبين المنوفية.",
    image: project4,
  },
  {
    title: "نادي الخيل",
    description: "إنشاءات نادي الخيل في مصر الجديدة.",
    image: project5,
  },
  {
    title: "جولف مكادي",
    description: "إنشاءات جولف مكادي في الغردقة.",
    image: project6,
  },
  {
    title: "صيانه كمبوند زايد 2000",
    description: "صيانة كمبوند زايد 2000 بمساحة 135 ألف م² في 6 أكتوبر.",
    image: Zayed2000,
  },
];

const Project = ({ limit }) => {
  const projectsToShow = limit ? projects.slice(0, limit) : projects;
  return (
    <>
      <section id="project" className="py-16 text-center" dir="rtl">
        <div className="max-w-5xl mx-auto text-center pt-10 ">
          <TitleWithLeaves title=" أعمالنا" />
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 border-t-4 border-green-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {project.video ? (
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  src={project.video}
                  className="w-full h-40 object-cover rounded-xl"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
              )}
              <h3 className="text-xl font-semibold text-green-800 mt-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </motion.div>
          ))}
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
    </>
  );
};

export default Project;
