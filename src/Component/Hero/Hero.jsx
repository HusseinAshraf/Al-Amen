import React, { useState, useEffect } from "react";
import founderImage from "../../assets/image/owner.jpg";
import backgroundImage from "../../assets/image/background.jpg";
import LoadingScreen from "../../UI/LoadingScreen/LoadingScreen";

function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = [backgroundImage, founderImage];
    let loadedCount = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          const timer = setTimeout(() => setIsLoading(false), 500);
          return () => clearTimeout(timer);
        }
      };
    });
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <section
        id="home"
        className={`transition-opacity duration-700 ease-in-out ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-8">
          <div
            className="absolute inset-0 bg-cover bg-center bg-green-800 bg-blend-overlay"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>

          <div className="relative z-10 bg-white bg-opacity-95 p-6 sm:p-10 rounded-xl shadow-2xl max-w-3xl w-full flex flex-col sm:flex-row items-center sm:items-start border-t-4 border-green-600">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-600 shadow-xl mb-4 md:mb-0">
              <img
                src={founderImage}
                alt="المؤسس"
                className="w-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            <div className="text-center sm:text-right sm:ml-6 max-w-lg">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-green-900">
                م. أمين حسين
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-white bg-green-700 px-4 py-1 rounded-md inline-block mb-2">
                مؤسس الشركة
              </p>
              <p className="text-gray-800 leading-relaxed text-base sm:text-lg font-medium">
                كل ما يخص الهارد سكيب والسوفت سكيب واللاند سكيب تحت سقف واحد.
              </p>
              <p className="text-gray-700 mt-3 text-sm sm:text-base leading-loose">
                متخصصون في أعمال الزراعة واللاند سكيب بفرق عمل محترفة من
                المهندسين والفنيين.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
