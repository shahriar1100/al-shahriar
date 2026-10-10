import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 font-sans"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:gap-8 lg:gap-16 md:flex-row">
        {/* Left Side: Content */}
        <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start">
          {/* Greeting */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-400 mb-2 tracking-wide">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4">
            Al Shahriar
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-6 flex flex-wrap justify-center md:justify-start items-center gap-1">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Front End Developer",
                "WordPress Developer",
                "Elementor Expert",
                "Plugin Developer",
              ]}
              speed={80}
              eraseSpeed={50}
              typingDelay={400}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec] font-bold">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl mb-8">
            I am a passionate Front End and WordPress Developer with over 2 years of
            experience in crafting fast, responsive, and pixel-perfect web interfaces.
            I specialize in React, modern JavaScript, Tailwind CSS, and custom WordPress
            plugin development—including booking systems, credential verification engines, and
            custom Elementor designs.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(130,69,236,0.5)]"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
              }}
            >
              GET IN TOUCH
            </a>
            <a
              href="#work"
              className="px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-gray-200 border-2 border-purple-500/50 rounded-full transition-all duration-300 hover:bg-purple-600/20 hover:border-purple-400 hover:text-white"
            >
              VIEW PROJECTS
            </a>
          </div>
        </div>

        {/* Right Side: Profile Photo */}
        <div className="w-full md:w-2/5 flex justify-center items-center">
          <Tilt
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border-4 border-purple-600/80 shadow-[0_0_35px_rgba(130,69,236,0.4)] overflow-hidden shrink-0"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={800}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Al Shahriar"
              className="w-full h-full object-cover rounded-full"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
