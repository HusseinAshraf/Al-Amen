import React, { useState, useEffect } from "react";
import TitleWithLeaves from "../TitleWithLeaves/TitleWithLeaves";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

const Project = ({ limit }) => {
  const { t, i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  // Use category key instead of translated text
  const [selectedCategoryKey, setSelectedCategoryKey] = useState("all");

  // Define category keys that stay consistent regardless of language
  const categoryKeys = {
    all: "all",
    construction: "Construction",
    maintenance: "Maintenance",
    development: "Development"
  };

  // Get translated category names
  const getCategoryName = (key) => {
    if (key === "all") return t('projects.allCategories');
    return key; // For other categories, we're using the English name as the key
  };

  // Get all unique categories from projects
  const projectCategories = [
    ...new Set(t('projects.projectItems', { returnObjects: true }).map((project) => project.category)),
  ];

  // Create categories array with all categories first
  const categories = [
    { key: categoryKeys.all, name: t('projects.allCategories') },
    ...projectCategories.map(category => ({ key: category, name: category }))
  ];

  const projects = t('projects.projectItems', { returnObjects: true });
  const filteredProjects =
    selectedCategoryKey === categoryKeys.all
      ? projects
      : projects.filter((project) => project.category === selectedCategoryKey);

  const projectsToShow = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  const location = useLocation();
  const isProjectPage = location.pathname === "/project";

  // Reset category when language changes
  useEffect(() => {
    setSelectedCategoryKey(categoryKeys.all);
  }, [i18n.language]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <>
      {isProjectPage && (
        <Helmet>
          <title>{t('projects.pageTitle')}</title>
          <meta name="description" content={t('projects.metaDescription')} />
          <meta name="keywords" content={t('projects.metaKeywords')} />
          <link rel="canonical" href="https://www.yoursite.com/projects" />
        </Helmet>
      )}

      <section
        id="projects"
        className="py-16 text-center bg-gradient-to-b from-green-50 to-white"
        dir={t('direction') === 'rtl' ? 'rtl' : 'ltr'}
      >
        <div className="max-w-5xl mx-auto text-center pt-10">
          <TitleWithLeaves title={t('projects.sectionTitle')} />
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10 pt-5">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategoryKey(category.key)}
              className={`px-4 py-2 rounded-full text-sm transition cursor-pointer ${selectedCategoryKey === category.key
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white border border-green-400 text-green-600 hover:bg-green-100"
                }`}
              aria-label={t('projects.ariaLabels.categoryButton', { category: category.name })}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
          {projectsToShow.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 border-t-4 border-green-600"
              onClick={() => setSelectedProject(project)}
              aria-label={t('projects.ariaLabels.projectCard', { title: project.title })}
              role="button"
              tabIndex={0}
            >
              <img
                src={project.image}
                alt={project.title}
                title={project.title}
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl"
              />
              <h3 className="text-xl font-semibold text-green-800 mt-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}

          {selectedProject && (
            <AnimatePresence>
              <motion.div
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 pt-20"
                onClick={() => setSelectedProject(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white w-full max-w-md sm:max-w-xl lg:max-w-3xl rounded-none sm:rounded-2xl shadow-xl p-4 sm:p-6 relative overflow-y-auto max-h-[85vh] space-y-6"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  role="dialog"
                  aria-labelledby="modal-title"
                  aria-hidden={selectedProject ? "false" : "true"}
                >
                  <button
                    className="absolute top-3 left-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
                    onClick={() => setSelectedProject(null)}
                    aria-label={t('projects.ariaLabels.closeModalButton')}
                  >
                    ✕
                  </button>

                  <div className="w-full aspect-video max-h-[60vh] overflow-hidden rounded-xl">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="px-2 sm:px-4 text-center">
                    <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-green-800 mb-3">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {selectedProject.fullDescription || selectedProject.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {limit && projects.length > limit && (
          <div className="mt-10">
            <Link
              to="/project"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors duration-300"
              aria-label={t('projects.ariaLabels.viewMoreButton')}
            >
              {t('projects.viewMore')}
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Project;