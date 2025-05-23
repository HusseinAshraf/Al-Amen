import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div
      className="relative h-[450px] flex items-center justify-start text-white"
      style={{
        backgroundImage: `url(https://ik.imagekit.io/hussein74/Al%20Amen/background.jpg?updatedAt=1745448053754)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(20, 40, 80, 0.41)" }}
      ></div>

      
      <motion.div
        className="relative z-10 mb-40 mt-10 ml-20 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="md:ml-96 text-center">
          <motion.h1
            className="text-8xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            الأمين
          </motion.h1>
          <motion.strong
            className="text-md md:text-md mt-3 text-gray-300 font-semibold"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            لأعمال اللاندسكيب
          </motion.strong>
        </div>

        <motion.button
          className="mt-24 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <FaPhoneAlt /> تواصل معنا
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HeroSection;
