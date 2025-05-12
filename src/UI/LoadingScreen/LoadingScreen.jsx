import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-green-900 text-white z-[100]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center relative z-10"
            role="status"
            aria-live="polite"
          >
            <img
              src="https://ik.imagekit.io/hussein74/Al%20Amen/logo.png?updatedAt=1745446702466"
              alt="شعار الأمين لاندسكيب"
              className="w-32 h-32 mb-4 animate-pulse"
            />
            <strong className="text-lg font-semibold">....... جارِ التحميل</strong>
          </motion.div>

          <div className="absolute inset-0 opacity-20 z-0">
            <img
              src="https://ik.imagekit.io/hussein74/Al%20Amen/leaf-pattern.jpg?updatedAt=1745446720640"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
