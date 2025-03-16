import { motion } from "framer-motion";
import { FaEye, FaTrophy, FaHandsHelping } from "react-icons/fa";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import BackGround from "../../UI/BackGround/BackGround";

const About = () => {
  return (
    <>
      <BackGround>
        <section
          className="min-h-screen py-20 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center text-gray-900 w-full"
          dir="rtl"
        >
          <div className="max-w-5xl mx-auto text-center pt-10 mb-10 ">
            <TitleWithLeaves title="من نحن" />
          </div>

          <motion.p
            className="text-lg mb-10 pt-5 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            تعتبر شركة{" "}
            <span className="font-bold text-green-700">الأمين لاند سكيب</span>{" "}
            واحدة من أبرز الشركات في تطوير اللاندسكيب في مصر. تأسست الشركة بهدف
            تحويل الأراضي البيضاء إلى مجتمعات متكاملة حديثة تلبي احتياجات
            المجتمع.
          </motion.p>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 sm:px-8 lg:px-12">
            {[
              {
                icon: FaEye,
                title: "رؤيتنا",
                description:
                  "نسعى لتحقيق التميز في تطوير اللاندسكيب من خلال مشاريع مبتكرة ومستدامة تلبي توقعات العملاء.",
              },
              {
                icon: FaTrophy,
                title: "إنجازاتنا",
                description:
                  "تنفيذ مشاريع سكنية فاخرة بتصاميم عصرية.\nإنشاء مجمعات تجارية وترفيهية متكاملة.\nدمج مفهوم الاستدامة في جميع المشاريع.",
              },
              {
                icon: FaHandsHelping,
                title: "التزامنا",
                description:
                  "نحرص على استخدام التكنولوجيا الخضراء والممارسات البيئية الصديقة لتحقيق الاستدامة وضمان بيئة متكاملة.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 text-right border-t-4 border-green-600"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <item.icon className="text-green-600 text-2xl ml-2" />
                  <h3 className="text-2xl font-semibold text-green-700">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </BackGround>
    </>
  );
};

export default About;
