import React, { memo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Helmet } from "react-helmet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
        titleKey: "projectsFeatured.0.title",
        descriptionKey: "projectsFeatured.0.description",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/mennaGarden.jpg?updatedAt=1745446690125",
        position: [29.9765, 30.9458],
    },
    {
        titleKey: "projectsFeatured.1.title",
        descriptionKey: "projectsFeatured.1.description",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%86%D8%A7%D8%AF%D9%8A%206%20%D8%A7%D9%83%D8%AA%D9%88%D8%A8%D8%B1.jpeg?updatedAt=1745449239902",
        position: [29.976, 30.913],
    },
    {
        titleKey: "projectsFeatured.2.title",
        descriptionKey: "projectsFeatured.2.description",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%B9%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A.jpg?updatedAt=1745446713077",
        position: [30.0485, 31.4913],
    },
    {
        titleKey: "projectsFeatured.3.title",
        descriptionKey: "projectsFeatured.3.description",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/%D9%85%D8%AF%D8%AE%D9%84%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D9%88%D9%82.jpg?updatedAt=1745449539025",
        position: [30.2116, 31.6228],
    },
    {
        titleKey: "projectsFeatured.4.title",
        descriptionKey: "projectsFeatured.4.description",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/project5.jpg?updatedAt=1745446697696",
        position: [30.3561, 30.5296],
    },
    {
        titleKey: "projectsFeatured.5.title",
        descriptionKey: "projectsFeatured.5.description",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/Mrmr.jpg?updatedAt=1745446696101",
        position: [31.035, 28.414],
    },
    {
        titleKey: "projectsFeatured.6.title",
        descriptionKey: "projectsFeatured.6.description",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/Berenses.jpg?updatedAt=1745446686033",
        position: [29.975, 30.927],
    },
    {
        titleKey: "projectsFeatured.7.title",
        descriptionKey: "projectsFeatured.7.description",
        image:
            "https://ik.imagekit.io/hussein74/Al%20Amen/SeseliaMatrouh.jpg?updatedAt=1745446699371",
        position: [31.3525, 27.2453],
    },
    {
        titleKey: "projectsFeatured.8.title",
        descriptionKey: "projectsFeatured.8.description",
        image: "https://ik.imagekit.io/hussein74/Al%20Amen/Raya6-optimized.webp",
        position: [29.9702, 30.9178],
    },
];

const ProjectsMapSection = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <section
            className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
            dir={i18n.dir()}
        >
            <Helmet>
                <meta name="description" content={t("projectsMap.meta.description")} />
                <link rel="canonical" href="https://your-domain.com/projects-map" />
            </Helmet>

            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-700 text-center mb-4">
                    {t("projectsMap.title")}
                </h2>
                <p className="text-center text-gray-700 mb-6 text-sm sm:text-base">
                    {t("projectsMap.subtitle")}
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
                                            {t(project.titleKey)}
                                        </h3>
                                        <p className="text-xs text-gray-600">
                                            {t(project.descriptionKey)}
                                        </p>
                                        <img
                                            src={project.image}
                                            loading="lazy"
                                            alt={t("projectsMap.imageAlt", { project: t(project.titleKey) })}
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
                        aria-label={t("projectsMap.viewAllBtn")}
                    >
                        {t("projectsMap.viewAllBtn")}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default memo(ProjectsMapSection);
