// components/HeroSlider.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/slider1.jpg?tr=w-1920,q-80",
        text: "الأمين لاندسكيب – نصنع الجمال في كل ركن خارجي",
        alt: "منظر خارجي مصمم بعناية يعكس الجمال الطبيعي",
    },
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/slider2.jpg?tr=w-1920,q-80",
        text: "هاردسكيب متقن يعكس ذوقك ويلائم كل بيئة",
        alt: "تصميم هاردسكيب أنيق لمنطقة خارجية",
    },
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/slider3.jpg?tr=w-1920,q-80",
        text: "زراعة احترافية تمنح مساحتك حياة متجددة",
        alt: "مساحات خضراء مزروعة بشكل احترافي",
    },
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/garden-1680802_1280.jpg?tr=w-1920,q-80",
        text: "حلول متكاملة لتنسيق الحدائق والمداخل والواجهات",
        alt: "حديقة منزلية منسقة بشكل متكامل",
    },
    {
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/bench-6919896_1280.jpg?tr=w-1920,q-80",
        text: "ابتكار في التصميم... التزام في التنفيذ",
        alt: "مقعد خشبي في حديقة مصممة بشكل مبتكر",
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
        <div className="relative h-screen w-full overflow-hidden" aria-label="شريط صور متحرك">
            {/* Image Slide */}
            <AnimatePresence>
                <motion.img
                    key={slides[current].image}
                    src={slides[current].image}
                    alt={slides[current].alt}
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
                    aria-live="polite"
                >
                    {slides[current].text}
                </motion.h1>
            </div>

            {/* Controls */}
            <div className="hidden absolute inset-0 md:flex items-center justify-between px-2 sm:px-4">
                <button
                    onClick={prevSlide}
                    aria-label="الشريحة السابقة"
                    className="text-white p-2 bg-black/30 rounded-full hover:bg-black/50 transition focus:outline-none focus:ring-2 focus:ring-white"
                >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="الشريحة التالية"
                    className="text-white p-2 bg-black/30 rounded-full hover:bg-black/50 transition focus:outline-none focus:ring-2 focus:ring-white"
                >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                </button>
            </div>
        </div>
    );
}
