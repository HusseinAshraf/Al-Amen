import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaAward, FaUsers, FaLeaf, FaUserTie } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      number: 10,
      label: "مكافآت وجوائز",
      icon: <FaAward className="text-yellow-400 text-6xl" />,
    },
    {
      number: 35,
      label: "فريق متخصص",
      icon: <FaUserTie className="text-blue-400 text-6xl" />,
    },
    {
      number: 216,
      label: "عملاء راضون",
      icon: <FaUsers className="text-green-400 text-6xl" />,
    },
    {
      number: 90,
      label: "حدائق مكتملة",
      icon: <FaLeaf className="text-lime-400 text-6xl" />,
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref} className="bg-green-900 text-white py-16 relative">
      <div className="absolute inset-0 bg-green-900 opacity-60"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8">أرقامنا وإنجازاتنا المبهرة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white text-green-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-5xl font-bold">
                {inView && <CountUp start={0} end={stat.number} duration={3} />}
              </h3>
              <p className="text-lg mt-2 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
