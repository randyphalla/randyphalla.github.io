// import { useState, useEffect } from 'react';
import './Header.style.css';

const Header = () => {
  // const [] = useState(false);
  // useEffect(() => {});

  return (
    <>
      <header className="border-b-1 border-solid border-gray-100">
        <h2 className="hidden">Header</h2>
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 transition-all">
          <img className="w-16" src="public/randyphalla-icon.png" alt="Randy Phalla" />
          <button className="md:hidden" aria-label="Open menu">Menu</button>
          <nav className="header-nav hidden md:block">
            <ul className="header-nav__list flex justify-between items-center">
              <li className="header-nav__list-item pr-4">
                <a className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider" href="#">Home</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider" href="#aboutMe" aria-label="Scroll to about section">About</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider" href="#skills" aria-label="Scroll to skills section">Skills</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider" href="#work" aria-label="Scroll to work Experiences section">Work Experiences</a>
              </li>
              <li className="header-nav__list-item pr-4">
                <a className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider" href="#education" aria-label="Scroll to education section">Education</a>
              </li>
              <li className="header-nav__list-item">
                <a className="header-nav__list-item-link flex justify-center items-center h-16 font-light text-base tracking-wider" href="#projects" aria-label="Scroll to projects section">Projects</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="mobile-menu hidden">
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Work experience</a>
            </li>
            <li>
              <a>Education</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
};

export default Header;
