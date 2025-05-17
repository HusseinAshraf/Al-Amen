const StepCard = ({ step, index }) => (
  <div
    className={`relative text-center p-6 rounded-xl bg-white shadow-md transition-all duration-300 border-t-4 border-green-600
      ${index % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-6"}
    `}
    dir="rtl"
  >
    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
      <div className="bg-green-700 text-white text-sm px-4 py-1 rounded-md shadow-md font-bold">
        {step.id}
      </div>
    </div>
    {/* شيل الأيقونة نهائياً */}
    <h3 className="text-green-800 font-bold text-lg mb-2">{step.title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
  </div>
);

export default StepCard;
