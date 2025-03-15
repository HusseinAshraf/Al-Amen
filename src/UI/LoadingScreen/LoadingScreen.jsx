import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/image/logo.png";
import background from "../../assets/image/leaf-pattern.jpg";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-900 text-white z-[100]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center"
      >
        <img
          src={logo}
          alt="AL Amen Landscaping Logo"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-4 animate-pulse"
        />
        <p className="text-base sm:text-lg md:text-xl font-semibold">
          ....... جارِ التحميل
        </p>
      </motion.div>
      <div className="absolute inset-0 opacity-20 z-[-1]">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
