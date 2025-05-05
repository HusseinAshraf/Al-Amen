import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaAward, FaUsers, FaLeaf, FaUserTie } from "react-icons/fa";

import BackGround from "../../UI/BackGround/BackGround";
import { Helmet } from "react-helmet";

const StatsSection = () => {
  const stats = [
    {
      number: 10,
      label: "مكافآت وجوائز",
      icon: <FaAward className="text-yellow-300 text-6xl" />,
    },
    {
      number: 35,
      label: "فريق متخصص",
      icon: <FaUserTie className="text-blue-300 text-6xl" />,
    },
    {
      number: 216,
      label: "عملاء راضون",
      icon: <FaUsers className="text-green-300 text-6xl" />,
    },
    {
      number: 90,
      label: "حدائق مكتملة",
      icon: <FaLeaf className="text-lime-300 text-6xl" />,
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <>
      <Helmet>
        <title>أرقامنا وإنجازاتنا - الأمين لاند سكيب</title>
        <meta
          name="description"
          content="تعرف على إنجازاتنا، من المكافآت والجوائز إلى عدد العملاء الراضين والحدائق المكتملة. نحن نعمل بكل احترافية لتحقيق أفضل النتائج."
        />
        <meta
          name="keywords"
          content="مكافآت, جوائز, فريق متخصص, عملاء راضون, حدائق مكتملة, تنسيق حدائق"
        />
        <meta property="og:title" content="أرقامنا وإنجازاتنا | شركتنا لتنسيق الحدائق" />
        <meta
          property="og:description"
          content="نحن فخورون بتحقيق العديد من الإنجازات في مجال تنسيق الحدائق. لدينا فريق متخصص وعدد كبير من العملاء الراضين."
        />
        <meta property="og:image" content="رابط_الصورة_المعروضة_لأرقامنا_وإنجازاتنا" />
        <meta property="og:url" content="رابط_موقعك_الالكتروني" />
      </Helmet>

      <section
        ref={ref}
        className="bg-gradient-to-b from-green-800 to-green-900 text-white py-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">أرقامنا وإنجازاتنا</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div>{stat.icon}</div>
              <h3 className="text-4xl font-extrabold">
                {inView && <CountUp start={0} end={stat.number} duration={3} />}
              </h3>
              <strong className="text-sm font-medium opacity-85">{stat.label}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StatsSection;
