import React from "react";

function Hero() {
  return (
    <section id="home">
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-green-800 bg-blend-overlay"
          style={{ backgroundImage: `url(https://ik.imagekit.io/hussein74/Al%20Amen/background.jpg?updatedAt=1745448053754)` }}
        ></div>

        <div className="relative z-10 bg-white bg-opacity-95 p-6 sm:p-10 rounded-xl shadow-2xl max-w-3xl w-full flex flex-col sm:flex-row items-center sm:items-start border-t-4 border-green-600">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-600 shadow-xl mb-4 md:mb-0">
            <img
              src="https://ik.imagekit.io/hussein74/Al%20Amen/owner.jpg?updatedAt=1745446694807"
              alt="المؤسس"
              className="w-full object-cover transform hover:scale-105 transition duration-300"
            />
          </div>

          <div className="text-center sm:text-right sm:ml-6 max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-green-900">
              م. أمين حسين
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-gray-400  px-4 py-1 rounded-md inline-block mb-2">
              مؤسس الشركة
            </p>
            <p className="text-gray-800 leading-relaxed text-base sm:text-lg font-medium">
              نحن في الأمين لاند سكيب نقدم لك كل ما تحتاجه من خدمات اللاند سكيب
              و   كل ما يخص الهارد سكيب والسوفت سكيب واللاند سكيب تحت سقف واحد
              و متخصصون في أعمال الزراعة واللاند سكيب بفرق عمل محترفة من المهندسين
              والفنيين ذوي الخبرة العالية. نعمل على تقديم حلول مبتكرة تلبي احتياجات
              عملائنا، سواء كانت حدائق خاصة، مساحات عامة، أو مشاريع تجارية.
              
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
