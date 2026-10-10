import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and update navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/90 backdrop-blur-md shadow-lg border-b border-purple-500/20 py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleMenuItemClick("about")}
          className="text-lg sm:text-xl font-bold cursor-pointer tracking-wider select-none"
        >
          <span className="text-[#8245ec] font-mono">&lt;</span>
          <span className="text-white">Al</span>
          <span className="text-[#8245ec] font-mono">/</span>
          <span className="text-white">Shahriar</span>
          <span className="text-[#8245ec] font-mono">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base font-medium text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition-colors duration-200 hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec] font-semibold" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-300">
          <a
            href="https://github.com/shahriar1100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-[#8245ec] hover:scale-110 transition-transform duration-200"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/alshahriarr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-[#8245ec] hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="text-2xl text-[#8245ec] p-2 focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6">
          <div className="w-full bg-[#0c0824]/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
            <ul className="flex flex-col space-y-4 text-center text-base font-medium text-gray-200">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full py-2 rounded-lg transition-colors duration-200 hover:bg-purple-600/20 hover:text-white ${
                      activeSection === item.id ? "text-[#8245ec] font-bold" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex justify-center space-x-6 pt-5 mt-4 border-t border-gray-800 text-gray-300">
              <a
                href="https://github.com/shahriar1100"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec] text-2xl transition-transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alshahriarr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec] text-2xl transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
