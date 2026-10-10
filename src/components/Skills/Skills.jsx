import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="w-full py-16 sm:py-24 font-sans bg-skills-gradient clip-path-custom relative"
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          SKILLS
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          A showcase of my technical toolkit, CMS proficiencies, and custom development expertise
        </p>
      </div>

      {/* Skill Categories Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={false}
            className="h-full"
          >
            <div className="h-full bg-gray-900/90 backdrop-blur-md p-5 sm:p-7 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(130,69,236,0.25)] flex flex-col justify-between hover:border-purple-500/50 transition-colors duration-300">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-6 text-center tracking-wide">
                  {category.title}
                </h3>

                {/* Skill Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center space-x-2 bg-purple-950/20 border border-gray-700/70 hover:border-purple-400/60 rounded-xl py-2 px-2.5 transition-all duration-200 hover:scale-105 hover:bg-purple-900/30"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
                      />
                      <span className="text-xs sm:text-sm font-medium text-gray-200 truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
