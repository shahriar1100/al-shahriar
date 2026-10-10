import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-16 sm:py-24 font-sans bg-skills-gradient clip-path-custom-2 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            EXPERIENCE
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and contributions in various roles
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative w-full">
          {/* Vertical line: left-aligned on mobile, centered on md+ */}
          <div className="absolute left-5 sm:left-7 md:left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent h-full"></div>

          {/* Experience Entries */}
          <div className="space-y-10 sm:space-y-12">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={experience.id}
                  className="relative flex items-center w-full"
                >
                  {/* Timeline Icon Circle */}
                  <div className="absolute left-5 sm:left-7 md:left-1/2 transform -translate-x-1/2 bg-[#0b0821] border-2 sm:border-4 border-[#8245ec] w-10 h-10 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-20 shadow-[0_0_15px_rgba(130,69,236,0.5)]">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`w-full pl-12 sm:pl-16 md:pl-0 ${
                      isEven
                        ? "md:w-[calc(50%-2.5rem)] md:mr-auto"
                        : "md:w-[calc(50%-2.5rem)] md:ml-auto"
                    }`}
                  >
                    <div className="p-5 sm:p-7 rounded-2xl border border-white/10 bg-gray-900/90 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.2)] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(130,69,236,0.35)] transition-all duration-300">
                      {/* Company & Role Header */}
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl overflow-hidden p-1 shrink-0 border border-purple-500/30">
                          <img
                            src={experience.img}
                            alt={experience.company}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                            {experience.role}
                          </h3>
                          <h4 className="text-xs sm:text-sm font-medium text-purple-300 truncate">
                            {experience.company}
                          </h4>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {experience.date}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {experience.desc}
                      </p>

                      {/* Skills Tags */}
                      <div className="mt-4 pt-3 border-t border-gray-800">
                        <h5 className="text-xs font-semibold text-gray-400 mb-2">
                          Technologies:
                        </h5>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {experience.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="bg-purple-950/40 text-purple-200 border border-purple-500/30 px-2.5 py-1 text-xs rounded-lg font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
