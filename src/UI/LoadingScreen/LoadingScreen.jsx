import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-900 text-white z-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <img
          src="https://ik.imagekit.io/hussein74/Al%20Amen/logo.png?updatedAt=1745446702466"
          alt="AL Amen Landscaping Logo"
          className="w-32 h-32 mb-4 animate-pulse"
        />
        <strong className="text-lg font-semibold">....... جارِ التحميل</strong>
      </motion.div>
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://ik.imagekit.io/hussein74/Al%20Amen/leaf-pattern.jpg?updatedAt=1745446720640"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
