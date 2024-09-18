import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="#about" className="text-3xl font-extrabold tracking-wide hover:text-gray-200 transition duration-300">Akhil Kailas</a>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="hover:text-gray-200 transition duration-300 ease-in-out text-lg">About Me</a></li>
          <li><a href="#education" className="hover:text-gray-200 transition duration-300 ease-in-out text-lg">Education</a></li>
          <li><a href="#skills" className="hover:text-gray-200 transition duration-300 ease-in-out text-lg">Skills</a></li>
          <li><a href="#certificates" className="hover:text-gray-200 transition duration-300 ease-in-out text-lg">Certificates</a></li>
          <li><a href="#projects" className="hover:text-gray-200 transition duration-300 ease-in-out text-lg">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-200 transition duration-300 ease-in-out text-lg">Contact Me</a></li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="nav-content">
          <ul className="px-6 pt-4 pb-4 space-y-2 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
            <li><a href="#about" className="block text-white hover:text-gray-200 transition duration-300">About Me</a></li>
            <li><a href="#education" className="block text-white hover:text-gray-200 transition duration-300">Education</a></li>
            <li><a href="#skills" className="block text-white hover:text-gray-200 transition duration-300">Skills</a></li>
            <li><a href="#certificates" className="block text-white hover:text-gray-200 transition duration-300">Certificates</a></li>
            <li><a href="#projects" className="block text-white hover:text-gray-200 transition duration-300">Projects</a></li>
            <li><a href="#contact" className="block text-white hover:text-gray-200 transition duration-300">Contact Me</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
