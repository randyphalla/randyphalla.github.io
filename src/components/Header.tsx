import { useState, useEffect } from 'react';
import './Header.style.css';
import { IoMenu } from "react-icons/io5/index.js";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isMobileViewport, setMobileViewport] = useState(false);

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
      <header id="header" className="header border-b-1 border-solid border-gray-50/[.10">
        <h2 className="hidden">Header</h2>
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 transition-all">
          <img className="w-10 md:w-16 transition-all" src="/randyphalla-icon.png" alt="Randy Phalla" />
          <button
            className="header__menu-button p-1 md:hidden border-1 border-solid border-primary hover:bg-primary hover:border-primary"
            aria-label="Open menu"
            onClick={handleMobileMenu}
          >
            <IoMenu className="h-8 w-8 stroke-primary" />
          </button>
          <nav className="header-nav hidden md:block">
            <ul className="header-nav__list flex justify-between items-center">
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider"
                  onClick={() => scrollToSection('header')}
                  role="button"
                  aria-label="Scroll to top of the page"
                >Home</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider"
                  onClick={() => scrollToSection('about')}
                  role="button"
                  aria-label="Scroll to about section"
                >About</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider"
                  onClick={() => scrollToSection('skills')}
                  role="button"
                  aria-label="Scroll to skills section"
                >Skills</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider"
                  onClick={() => scrollToSection('work')}
                  role="button"
                  aria-label="Scroll to work Experiences section"
                >Work Experiences</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider"
                  onClick={() => scrollToSection('education')}
                  role="button"
                  aria-label="Scroll to education section"
                >Education</a>
              </li>
              <li className="header-nav__list-item">
                <a
                  className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider"
                  onClick={() => scrollToSection('portfolio')}
                  role="button"
                  aria-label="Scroll to projects section"
                >Projects</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu fixed inset-0 z-10 bg-gray-900">
          <div className="flex justify-between items-center py-4 px-4 border-b-1 border-solid border-gray-50/[.10]">
            <img className="w-10 md:w-16 transition-all" src="/randyphalla-icon.png" alt="Randy Phalla" />
            <button
              className="mobile-menu-button p-1 md:hidden bg-primary border-1 border-solid border-primary hover:bg-transparent hover:border-white"
              aria-label="Open menu"
              onClick={handleMobileMenu}
            >
              <IoMenu className="h-8 w-8 stroke-white" />
            </button>
          </div>
          <nav className="mobile-menu-nav flex justify-start justify-items-center p-8">
            <ul className="relative flex justify-center justify-items-center flex-col">
              <li className="py-2">
                <a
                  className="text-white text-2xl"
                  onClick={() => scrollToSection('header')}
                  role="button"
                  aria-label="Scroll to top of the page"
                >Home</a>
              </li>
              <li className="py-2">
                <a
                  className="text-white text-2xl"
                  onClick={() => scrollToSection('about')}
                  role="button"
                  aria-label="Scroll to about section"
                >About</a>
              </li>
              <li className="py-2">
                <a
                  className="text-white text-2xl"
                  onClick={() => scrollToSection('skills')}
                  role="button"
                  aria-label="Scroll to skills section"
                >Skills</a>
              </li>
              <li className="py-2">
                <a
                  className="text-white text-2xl"
                  onClick={() => scrollToSection('work')}
                  role="button"
                  aria-label="Scroll to work Experiences section"
                >Work experience</a>
              </li>
              <li className="py-2">
                <a
                  className="text-white text-2xl"
                  onClick={() => scrollToSection('education')}
                  role="button"
                  aria-label="Scroll to education section"
                >Education</a>
              </li>
              <li className="py-2">
                <a
                  className="text-white text-2xl"
                  onClick={() => scrollToSection('portfolio')}
                  role="button"
                  aria-label="Scroll to projects section"
                >Projects</a>
              </li>
            </ul>
          </nav>


          {/* TODO: Make this as a backdrop */}
          <div className="" onClick={handleMobileMenu}></div>

        </div>
      )}
    </>
  )
};

export default Header;
