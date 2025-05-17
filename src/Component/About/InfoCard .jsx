import { useTranslation } from "react-i18next";

const InfoCard = ({ icon: Icon, title, description }) => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === "ar";

    return (
        <div
            className={`bg-white shadow-lg rounded-xl p-6 border-t-4 border-green-600 ${isRTL ? "text-right" : "text-left"
                }`}
            dir={isRTL ? "rtl" : "ltr"}
        >
            <div
                className={`flex items-center mb-4 ${isRTL ? "flex-row" : "items-start"
                    }`}
            >
                <Icon
                    className={`text-green-600 text-2xl ${isRTL ? "ml-2" : "mr-2"
                        }`}
                    aria-hidden="true"
                />
                <h3 className="text-2xl font-semibold text-green-700">{title}</h3>
            </div>
            <p className="text-gray-700 whitespace-pre-line" role="presentation">
                {description}
            </p>
        </div>
    );
};

export default InfoCard;
