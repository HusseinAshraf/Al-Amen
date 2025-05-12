const InfoCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white shadow-lg rounded-xl p-6 text-right border-t-4 border-green-600">
        <div className="flex items-center mb-4">
            <Icon className="text-green-600 text-2xl ml-2" aria-hidden="true" />
            <h3 className="text-2xl font-semibold text-green-700">{title}</h3>
        </div>
        <p className="text-gray-700 whitespace-pre-line" role="presentation">
            {description}
        </p>
    </div>
);

export default InfoCard;
