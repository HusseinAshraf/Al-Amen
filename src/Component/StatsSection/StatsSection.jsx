import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaAward, FaUsers, FaLeaf, FaUserTie } from "react-icons/fa";
import { Helmet } from "react-helmet"; 
const StatsSection = () => {
  const stats = [
    {
      number: 10,
      label: "مكافآت وجوائز",
      icon: <FaAward className="text-yellow-300 text-6xl" aria-hidden="true" />,
    },
    {
      number: 35,
      label: "فريق متخصص",
      icon: <FaUserTie className="text-blue-300 text-6xl" aria-hidden="true" />,
    },
    {
      number: 216,
      label: "عملاء راضون",
      icon: <FaUsers className="text-green-300 text-6xl" aria-hidden="true" />,
    },
    {
      number: 90,
      label: "حدائق مكتملة",
      icon: <FaLeaf className="text-lime-300 text-6xl" aria-hidden="true" />,
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <>
      <Helmet>
        <title>أرقامنا وإنجازاتنا | الأمين لاند سكيب</title>
        <meta
          name="description"
          content="تعرف على إنجازات الأمين لاند سكيب، من الجوائز إلى عدد الحدائق المكتملة والعملاء الراضين. نعمل باحترافية لنحقق الأفضل دائمًا."
        />
        <meta
          name="keywords"
          content="مكافآت, جوائز, فريق متخصص, عملاء راضون, حدائق مكتملة, تنسيق حدائق, الأمين لاند سكيب"
        />
        <meta name="author" content="الأمين لاند سكيب" />
        <meta property="og:title" content="أرقامنا وإنجازاتنا | الأمين لاند سكيب" />
        <meta
          property="og:description"
          content="نحن فخورون بتحقيق العديد من الإنجازات في مجال تنسيق الحدائق."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/hussein74/Al%20Amen/stats-cover.jpg"
        />
        <meta
          property="og:url"
          content="https://example.com/stats"
        />
      </Helmet>

      <section
        ref={ref}
        className="bg-gradient-to-b from-green-800 to-green-900 text-white py-16 text-center"
        aria-labelledby="stats-title"
      >
        <h2 id="stats-title" className="text-3xl md:text-4xl font-bold mb-8">
          أرقامنا وإنجازاتنا
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2"
              aria-label={stat.label}
            >
              <div>{stat.icon}</div>
              <h3 className="text-4xl font-extrabold">
                {inView && <CountUp start={0} end={stat.number} duration={2.5} />}
              </h3>
              <p className="text-sm font-medium opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StatsSection;
