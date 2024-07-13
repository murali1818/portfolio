import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-3 left-3 right-3 bg-gray-100 dark:bg-black bg-opacity-70 text-black dark:text-white shadow-md z-50 rounded-md dark:bg-opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
            <img className="h-12 w-12" src={isDarkMode ? "./images/logo-dark.png": "./images/logo.png"} alt="Logo" />
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <ScrollLink to="home" smooth={true} duration={500} className="menu-link">Home</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} className="menu-link">About</ScrollLink>
              <ScrollLink to="skills" smooth={true} duration={500} className="menu-link">Skills</ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500} className="menu-link">Projects</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="menu-link">Contact</ScrollLink>
              
              <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-md">
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              </button>
            </div>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black dark:text-gray-100 focus:outline-none font-medium">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
            <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-md">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden p-1">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ScrollLink to="home" smooth={true} duration={500} className="menu-link-1" onClick={closeMenu}>Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="menu-link-1" onClick={closeMenu}>About</ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="menu-link-1" onClick={closeMenu}>Skills</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="menu-link-1" onClick={closeMenu}>Projects</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="menu-link-1" onClick={closeMenu}>Contact</ScrollLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
