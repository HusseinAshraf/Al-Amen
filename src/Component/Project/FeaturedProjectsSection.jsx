import React, { memo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Helmet } from "react-helmet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link, useNavigate } from "react-router-dom";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const projects = [
    {
        title: "كمبوند مينا جادرن سيتي",
        description: "إنشاءات كمبوند مينا جادرن سيتي في 6 أكتوبر.",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/mennaGarden.jpg?updatedAt=1745446690125",
        position: [29.9765, 30.9458],
    },
    {
        title: "نادي 6 أكتوبر",
        description: "إنشاءات نادي 6 أكتوبر.",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%86%D8%A7%D8%AF%D9%8A%206%20%D8%A7%D9%83%D8%AA%D9%88%D8%A8%D8%B1.jpeg?updatedAt=1745449239902",
        position: [29.976, 30.913],
    },
    {
        title: "المنتج الصحي للطب النفسي",
        description: "المنتج الصحي للتجمع الأول.",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%B9%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A.jpg?updatedAt=1745446713077",
        position: [30.0485, 31.4913],
    },
    {
        title: "مدخل مدينة الشروق",
        description: "مدخل مدينة الشروق على طريق الإسماعيلية.",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D8%AF%D8%AE%D9%84%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D9%82.jpg?updatedAt=1745449539025",
        position: [30.2116, 31.6228],
    },
    {
        title: "مصنع لذة السادات",
        description: "إنشاءات مصنع لذة السادات في المنوفية.",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/project5.jpg?updatedAt=1745446697696",
        position: [30.3561, 30.5296],
    },
    {
        title: "صيانه قرية مرمر",
        description: "صيانة قرية مرمر في الساحل الشمالي.",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/Mrmr.jpg?updatedAt=1745446696101",
        position: [31.035, 28.414],
    },
    {
        title: "صيانه قرية برنسيس",
        description: "صيانة قرية برنسيس في 6 أكتوبر - زايد.",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/Berenses.jpg?updatedAt=1745446686033",
        position: [29.975, 30.927],
    },
    {
        title: "صيانه وإنشاءات قرية سيلسيا",
        description: "صيانة وإنشاءات قرية سيلسيا في مرسى مطروح.",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/SeseliaMatrouh.jpg?updatedAt=1745446699371",
        position: [31.3525, 27.2453],
    },
    {
        title: "تطوير طريق رايه القابضة",
        description: "تطوير طريق شركة رايه في 6 أكتوبر.",
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/Raya6-optimized.webp",
        position: [29.9702, 30.9178],
    },
];

const ProjectsMapSection = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
            <Helmet>
                <title>مشاريعنا على الخريطة | شركة الأمين</title>
                <meta
                    name="description"
                    content="اكتشف مواقع مشاريع شركة الأمين في أنحاء الجمهورية على خريطة تفاعلية تشمل الإنشاءات والصيانة في مختلف المناطق."
                />
                <link rel="canonical" href="https://your-domain.com/projects-map" />
            </Helmet>

            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-700 text-center mb-4">
                    مشاريعنا على الخريطة
                </h2>
                <p className="text-center text-gray-700 mb-6 text-sm sm:text-base">
                    اكتشف مواقع أبرز مشاريعنا على خريطة تفاعلية في أنحاء الجمهورية
                </p>

                <div className="z-0 h-[400px] sm:h-[500px] w-full rounded-xl overflow-hidden shadow-lg mb-6">
                    <MapContainer
                        center={[30.0444, 31.2357]}
                        zoom={6}
                        scrollWheelZoom={true}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                        />
                        {projects.map((project, index) => (
                            <Marker key={index} position={project.position}>
                                <Popup>
                                    <div className="text-right">
                                        <h3 className="font-bold text-green-700 text-sm mb-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-gray-600">{project.description}</p>
                                        <img
                                            src={project.image}
                                            loading="lazy"
                                            alt={`صورة من مشروع ${project.title}`}
                                            className="mt-2 w-full h-20 object-cover rounded"
                                        />
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <div className="flex justify-center">
                    <Link
                        to="/project"
                        className="px-6 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition text-sm sm:text-base"
                        aria-label="عرض كل المشاريع"
                    >
                        عرض كل المشاريع
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default memo(ProjectsMapSection);
