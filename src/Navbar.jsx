import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-900 text-white fixed top-0 w-full z-10 shadow-lg font-mono transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a
          href="#about"
          className="text-3xl font-extrabold tracking-wide neon-text transition duration-300 hover:scale-105 drop-shadow-neon"
        >
          Akhil Kailas
        </a>
        <ul className="hidden md:flex space-x-8">
          {["About Me", "Education", "Skills", "Certificates", "Projects", "Contact Me"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className="hover:text-pink-400 transition duration-300 text-lg drop-shadow-neon"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            className="text-white hover:text-pink-400 focus:outline-none drop-shadow-neon"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" role="img">
              <path d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        id="nav-content"
      >
        <ul className="px-6 pt-4 pb-4 space-y-4 bg-gradient-to-r from-blue-800 via-purple-700 to-pink-800 border-t border-pink-600">
          {["About Me", "Education", "Skills", "Certificates", "Projects", "Contact Me"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className="block text-white hover:text-pink-400 transition duration-300 drop-shadow-neon"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

/* Tailwind CSS Custom Styles */
<style jsx>{`
  .neon-text {
    text-shadow: 0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080;
  }
  .drop-shadow-neon {
    text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14;
  }
`}</style>
