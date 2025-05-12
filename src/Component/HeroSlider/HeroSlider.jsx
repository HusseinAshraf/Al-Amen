// components/HeroSlider.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/slider1.jpg?tr=w-1920,q-80",
        text: "الأمين لاندسكيب – نصنع الجمال في كل ركن خارجي",
    },
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/slider2.jpg?tr=w-1920,q-80",
        text: "هاردسكيب متقن يعكس ذوقك ويلائم كل بيئة",
    },
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/slider3.jpg?tr=w-1920,q-80",
        text: "زراعة احترافية تمنح مساحتك حياة متجددة",
    },
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/garden-1680802_1280.jpg?tr=w-1920,q-80",
        text: "حلول متكاملة لتنسيق الحدائق والمداخل والواجهات",
    },
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/bench-6919896_1280.jpg?tr=w-1920,q-80",
        text: "ابتكار في التصميم... التزام في التنفيذ",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Image Slide */}
            <AnimatePresence>
                <motion.img
                    key={slides[current].image}
                    src={slides[current].image}
                    alt="Background Slide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            </AnimatePresence>

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4 text-center">
                <motion.h1
                    key={slides[current].text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl"
                >
                    {slides[current].text}
                </motion.h1>
            </div>

            
            <div className="hidden  absolute inset-0 md:flex items-center justify-between px-2 sm:px-4">
                <button
                    onClick={prevSlide}
                    aria-label="السابق"
                    className="text-white p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
                >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="التالي"
                    className="text-white p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
                >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </button>
            </div>
        </div>
    );
}
