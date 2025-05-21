import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function TitleWithLeaves({ title }) {
  return (
   <>
   

    <div className="relative flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-green-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h2>

      
      <div className="absolute -bottom-1 flex gap-2">
        {[0, 0.2, 0.4].map((delay, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <Leaf className="text-green-500 w-6 h-6" />
          </motion.div>
        ))}
      </div>
    </div>
   </>
  );
}
