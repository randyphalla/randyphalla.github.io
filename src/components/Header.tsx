import { useState, useEffect } from 'react';
// import * as React from "react";
import './Header.style.css';
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const scrollToSection = (id: string) => {
    const scrollElement = globalThis.document.getElementById(id);
    scrollElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });

    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    };
  };

  useEffect(() => {
    addEventListener('resize', (event: UIEvent) => {
      const windowWidth = event.target as Window;
      const windowInnerWidth = windowWidth.innerWidth;

      if (windowInnerWidth > 768) {
        setMobileMenuOpen(false);
      }
    });
  });

  return (
    <>
      {/* Desktop Menu */}
      <header id="header" className="header dark:bg-gray-900 border-b-1 border-solid border-gray-100 dark:border-gray-50/[.10]">
        <h2 className="hidden">Header</h2>
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 transition-all">
          <a
            className="flex transition-opacity hover:opacity-50"
            href="/"
            aria-label="Scroll to the top"
            role="button"
          >
            <img
              className="w-10 md:w-16 transition-all"
              src="/randyphalla-icon.png"
              alt="Randy Phalla"
              loading="lazy"
            />
          </a>
          <button
            className="header__menu-button p-1 md:hidden border-1 border-solid border-primary hover:bg-red-400 hover:border-red-400 dark:hover:bg-primary dark:hover:border-primary transition-all"
            aria-label="Open menu"
            role="button"
            onClick={handleMobileMenu}
          >
            <IoMenu className="h-8 w-8 stroke-primary" />
          </button>
          <nav className="header-nav hidden md:block">
            <ul className="header-nav__list flex justify-between items-center">
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 text-black dark:text-white font-medium text-base tracking-wider"
                  onClick={() => scrollToSection('header')}
                  role="button"
                  tabIndex={0}
                  aria-label="Scroll to top of the page"
                >Home</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 text-black dark:text-white font-medium text-base tracking-wider"
                  onClick={() => scrollToSection('about')}
                  role="button"
                  tabIndex={0}
                  aria-label="Scroll to about section"
                >About</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 text-black dark:text-white font-medium text-base tracking-wider"
                  onClick={() => scrollToSection('skills')}
                  role="button"
                  tabIndex={0}
                  aria-label="Scroll to skills section"
                >Skills</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 text-black dark:text-white font-medium text-base tracking-wider"
                  onClick={() => scrollToSection('work')}
                  role="button"
                  tabIndex={0}
                  aria-label="Scroll to work Experiences section"
                >Work Experiences</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 text-black dark:text-white font-medium text-base tracking-wider"
                  onClick={() => scrollToSection('education')}
                  role="button"
                  tabIndex={0}
                  aria-label="Scroll to education section"
                >Education</a>
              </li>
              <li className="header-nav__list-item">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 text-black dark:text-white font-medium text-base tracking-wider"
                  onClick={() => scrollToSection('portfolio')}
                  role="button"
                  tabIndex={0}
                  aria-label="Scroll to projects section"
                >Projects</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden fixed top-0 inset-x-0 bg-white dark:bg-gray-900 transition-all ${isMobileMenuOpen ? 'opacity-100 z-10': 'opacity-0 -z-10'}`}>
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 border-b-1 border-solid border-border-slate-900/[.10] dark:border-gray-50/[.10]">
          <a
            className="flex transition-opacity hover:opacity-50"
            href="/"
            aria-label="Redirect to home"
          >
            <img
              className="w-10 md:w-16 transition-all"
              src="/randyphalla-icon.png"
              alt="Randy Phalla"
              loading="lazy"
            />
          </a>
          {/* dark:hover:bg-transparent dark:hover:border-white */}
          <button
            className="mobile-menu-button p-1 md:hidden bg-primary border-1 border-solid border-primary hover:bg-red-400 hover:border-red-400 dark:hover:bg-transparent dark:hover:border-white transition-all"
            role="button"
            aria-label="Close menu"
            onClick={handleMobileMenu}
          >
            <IoClose className="h-8 w-8 stroke-white text-white" />
          </button>
        </div>
        <nav className="mobile-menu-nav flex justify-start justify-items-center p-8">
          <ul className="relative flex justify-center justify-items-center flex-col">
            <li className="py-2">
              <button
                className="text-black dark:text-white font-medium text-2xl text-left transition-all hover:text-primary"
                onClick={() => scrollToSection('header')}
                role="button"
                tabIndex={0}
                aria-label="Scroll to top of the page"
              >Home</button>
            </li>
            <li className="py-2">
              <button
                className="text-black dark:text-white font-medium text-2xl text-lefttransition-all hover:text-primary"
                onClick={() => scrollToSection('about')}
                role="button"
                tabIndex={0}
                aria-label="Scroll to about section"
              >About</button>
            </li>
            <li className="py-2">
              <button
                className="text-black dark:text-white font-medium text-2xl text-left transition-all hover:text-primary"
                onClick={() => scrollToSection('skills')}
                role="button"
                tabIndex={0}
                aria-label="Scroll to skills section"
              >Skills</button>
            </li>
            <li className="py-2">
              <button
                className="text-black dark:text-white font-medium text-2xl text-left transition-all hover:text-primary"
                onClick={() => scrollToSection('work')}
                role="button"
                tabIndex={0}
                aria-label="Scroll to work Experiences section"
              >Work experience</button>
            </li>
            <li className="py-2">
              <button
                className="text-black dark:text-white font-medium text-2xl text-left transition-all hover:text-primary"
                onClick={() => scrollToSection('education')}
                role="button"
                aria-label="Scroll to education section"
              >Education</button>
            </li>
            <li className="py-2">
              <button
                className="text-black dark:text-white font-medium text-2xl text-left transition-all hover:text-primary"
                onClick={() => scrollToSection('portfolio')}
                role="button"
                aria-label="Scroll to projects section"
              >Projects</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
};

export default Header;
