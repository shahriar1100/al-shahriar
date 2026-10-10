import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="work"
      className="w-full py-16 sm:py-24 font-sans relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            PROJECTS
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my recent WordPress plugins, UI/UX designs, and front-end web applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="border border-white/10 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(130,69,236,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 sm:p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-52 object-cover rounded-xl bg-gray-950"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags & Click CTA */}
              <div className="p-5 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-purple-950/40 text-purple-300 border border-purple-500/30 text-xs font-semibold rounded-lg px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs text-gray-500 self-center">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
                <div className="text-xs font-semibold text-purple-400 flex items-center justify-end hover:text-purple-300">
                  View Details &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Modal Container */}
      {selectedProject && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0f0b24] border border-purple-500/30 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative my-auto"
          >
            {/* Modal Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white text-xl flex items-center justify-center hover:bg-purple-600 transition"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col">
              <div className="w-full bg-black/40">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-64 sm:max-h-80 object-cover rounded-t-2xl"
                />
              </div>

              <div className="p-5 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* All Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-950/50 text-purple-300 border border-purple-500/40 text-xs font-semibold rounded-lg px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-gray-800 hover:bg-gray-700 text-gray-200 py-3 rounded-xl text-sm sm:text-base font-bold text-center border border-gray-600 transition"
                  >
                    View Code / GitHub
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white py-3 rounded-xl text-sm sm:text-base font-bold text-center shadow-lg transition"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
