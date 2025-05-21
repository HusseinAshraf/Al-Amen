import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroSlider() {
    const { t, i18n } = useTranslation();
    const [current, setCurrent] = useState(0);
    const [hasSwitched, setHasSwitched] = useState(false);

    const slidesData = [
        "https://ik.imagekit.io/hussein74/Al%20Amen/slider1.jpg?tr=w-1920,q-80",
        "https://ik.imagekit.io/hussein74/Al%20Amen/slider2.jpg?tr=w-1920,q-80",
        "https://ik.imagekit.io/hussein74/Al%20Amen/slider3.jpg?tr=w-1920,q-80",
        "https://ik.imagekit.io/hussein74/Al%20Amen/garden-1680802_1280.jpg?tr=w-1920,q-80",
        "https://ik.imagekit.io/hussein74/Al%20Amen/bench-6919896_1280.jpg?tr=w-1920,q-80",
    ];

    const slidesText = useMemo(
        () => t("slides", { returnObjects: true }),
        [t, i18n.language]
    );

    const nextSlide = () => {
        setCurrent((prev) => {
            const next = (prev + 1) % slidesText.length;
            if (next !== 0) setHasSwitched(true);
            return next;
        });
    };

    const prevSlide = () => {
        setCurrent((prev) => {
            const next = (prev - 1 + slidesText.length) % slidesText.length;
            if (next !== 0) setHasSwitched(true);
            return next;
        });
    };

    useEffect(() => {
        let interval;

        const handleVisibility = () => {
            if (document.visibilityState === "visible") {
                interval = setInterval(nextSlide, 5000);
            } else {
                clearInterval(interval);
            }
        };

        document.addEventListener("visibilitychange", handleVisibility);
        handleVisibility();

        return () => {
            clearInterval(interval);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return (
        <section
            className="relative h-screen w-full overflow-hidden"
            aria-label={t("aria.sliderLabel")}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
            <motion.img
                key={slidesText[current].alt}
                src={slidesData[current]}
                alt={slidesText[current].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading={current === 0 ? "eager" : "lazy"}
                fetchpriority={current === 0 ? "high" : "low"}
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-6 sm:px-12 text-center">
                <motion.h1
                    key={slidesText[current].text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold max-w-4xl leading-tight"
                    aria-live="polite"
                >
                    {slidesText[current].text}
                </motion.h1>
            </div>

            <div className="hidden absolute inset-0 md:flex items-center justify-between px-2 sm:px-4">
                <button
                    onClick={prevSlide}
                    aria-label={t("aria.previousSlide")}
                    className="text-white p-2 bg-black/30 rounded-full hover:bg-black/50 transition focus:outline-none focus:ring-2 focus:ring-white"
                >
                    {i18n.language === "ar" ? (
                        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    ) : (
                        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    )}
                </button>
                <button
                    onClick={nextSlide}
                    aria-label={t("aria.nextSlide")}
                    className="text-white p-2 bg-black/30 rounded-full hover:bg-black/50 transition focus:outline-none focus:ring-2 focus:ring-white"
                >
                    {i18n.language === "ar" ? (
                        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    ) : (
                        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                    )}
                </button>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {slidesText.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrent(index);
                            if (index !== 0) setHasSwitched(true);
                        }}
                        aria-label={t("aria.goToSlide", { number: index + 1 })}
                        className={`w-4 h-4 rounded-full transition-colors ${index === current
                            ? "bg-yellow-400"
                            : "bg-white/50 hover:bg-yellow-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
