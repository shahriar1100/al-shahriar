import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="w-full bg-[#03020c] border-t border-purple-900/30 text-white py-10 sm:py-14 font-sans relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name / Logo */}
        <div
          onClick={() => handleScroll("about")}
          className="inline-block cursor-pointer text-xl sm:text-2xl font-bold tracking-wider hover:opacity-90 transition-opacity"
        >
          <span className="text-[#8245ec] font-mono">&lt;</span>
          <span className="text-white">Al</span>
          <span className="text-[#8245ec] font-mono">/</span>
          <span className="text-white">Shahriar</span>
          <span className="text-[#8245ec] font-mono">&gt;</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-purple-400 text-xs sm:text-sm font-medium transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-5 mt-6 text-gray-400">
          <a
            href="https://github.com/shahriar1100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl hover:text-purple-400 hover:scale-125 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alshahriarr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:text-purple-400 hover:scale-125 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:contact@alshahriar.com"
            aria-label="Email"
            className="text-xl hover:text-purple-400 hover:scale-125 transition-all"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-500 mt-6 tracking-wide">
          © {new Date().getFullYear()} AL SHAHRIAR. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
