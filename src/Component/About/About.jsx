import React from "react";
import { useTranslation } from "react-i18next";
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

const About = () => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir();

  const infoCards = [
    {
      icon: FaRegHandshake,
      title: t("about.infoCards.vision.title"),
      description: t("about.infoCards.vision.description"),
    },
    {
      icon: FaPaintBrush,
      title: t("about.infoCards.achievements.title"),
      description: t("about.infoCards.achievements.description"),
    },
    {
      icon: FaHandsHelping,
      title: t("about.infoCards.commitment.title"),
      description: t("about.infoCards.commitment.description"),
    },
  ];

  const steps = t("about.workSteps.steps", { returnObjects: true });

  return (
    <>
      <BackGround>
        <Helmet>
          <title>{t("about.title")}</title>
          <meta name="description" content={t("about.metaDescription")} />
          <meta name="keywords" content={t("about.metaKeywords")} />
          <meta name="author" content={t("about.metaAuthor")} />
          <meta property="og:title" content={t("about.metaOgTitle")} />
          <meta property="og:description" content={t("about.metaOgDescription")} />
        </Helmet>

        <section
          className="min-h-screen py-20 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center text-gray-900 w-full"
          dir={direction}
        >
          <div className="max-w-5xl mx-auto text-center pt-10 mb-10">
            <TitleWithLeaves title={t("about.sectionTitle")} />
          </div>

          <div className="mb-12 max-w-3xl text-center">
            <p className="text-lg pt-5 leading-relaxed mb-6">
              {t("about.intro", { company: t("about.company") })}
            </p>
          </div>

          {/* بطاقات الرؤية والإنجازات */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 sm:px-8 lg:px-12">
            {infoCards.map((card, index) => (
              <InfoCard key={index} {...card}  />
            ))}
          </div>

          {/* خطوات العمل */}
          <div className="mt-32 w-full flex flex-col items-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-12 md:mb-16 text-center">
              {t("about.workSteps.title")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 w-full max-w-7xl relative">
              {steps.map((step, index) => (
                <StepCard key={index} step={step} index={index} />
              ))}
            </div>

            <div className="mt-16">
              <Link
                to="/hero"
                aria-label={t("about.workSteps.learnMore")}
                className="px-8 py-3 bg-green-700 text-white text-xl rounded-full shadow-md hover:bg-green-800 transition"
              >
                {t("about.workSteps.learnMore")}
              </Link>
            </div>
          </div>
        </section>
      </BackGround>
    </>
  );
};

export default About;
