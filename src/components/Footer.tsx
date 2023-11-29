import * as React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoDribbble, IoLogoBehance, IoMail } from "react-icons/io5/index.js";

const Footer = () => {
    const scrollToSection = (id: string) => {
    const scrollElement = globalThis.document.getElementById(id);
    scrollElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  };

  return (
    <footer className="border-t-1 border-solid border-gray-100 dark:border-gray-50/[.10] dark:bg-gray-900">
      <h2 className="hidden">Footer</h2>
      <div className="max-w-screen-xl mx-auto py-10 px-4">
        <div className="flex md:grid justify-center md:justify-between items-center flex-col md:flex-row md:grid-cols-3">
          <a
            className="flex transition-opacity hover:opacity-50"
            href="/"
            onClick={() => scrollToSection('header')}
            aria-label="Redirect to home"
          >
            <img
              className="w-10 md:w-16 transition-all"
              src="/randyphalla-icon.png"
              alt="Randy Phalla"
            />
          </a>
          <ul className="mt-5 mb-5 md:mt-0 md:mb-0 flex justify-center md:justify-start items-center md:items-start flex-col md:flex-row">
            <li className="mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit">
              <a href="https://github.com/randyphalla" target="_blank" aria-label="Redirect to Github">
                <IoLogoGithub className="text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" />
              </a>
            </li>
            <li className="mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit">
              <a href="https://www.linkedin.com/in/randyphalla/" target="_blank" aria-label="Redirect to Linkedin">
                <IoLogoLinkedin className="text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" />
              </a>
            </li>
            <li className="mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit">
              <a href="https://dribbble.com/randyphalla" target="_blank" aria-label="Redirect to Dribbble">
                <IoLogoDribbble className="text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" />
              </a>
            </li>
            <li className="mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit">
              <a href="https://www.behance.net/randyphalla" target="_blank" aria-label="Redirect to Behance">
                <IoLogoBehance className="text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" />
              </a>
            </li>
            <li className="mt-2 mb-2 md:mt-0 md: ml-2 mr-2 w-fit">
              <a href="mailto: randyphalla@gmail.com" aria-label="Open email">
                <IoMail className="text-4xl md:text-2xl dark:text-white hover:text-gray-600 transition-all" />
              </a>
            </li>
          </ul>
          <div className="">
            <p className="text-sm md:text-base dark:text-white">Designed and Built by <span className="font-bold">Randy Phalla</span></p>
            <p className="text-sm md:text-base dark:text-white">Built with <a className="font-bold hover:text-gray-600" href="https://astro.build/" target="_blank" aria-label="Redirect to Astro">Astro</a>, <a className="font-bold hover:text-gray-600" href="https://tailwindcss.com/" target="_blank" aria-label="Redirect to Tailwind">Tailwind</a>, and <a className="font-bold hover:text-gray-600" href="https://reactjs.org/" target="_blank" aria-label="Redirect to React">React</a></p>
          </div>
        </div>
        <div className="mt-7 text-center md:text-left">
          <p className="text-sm md:text-base dark:text-white">&copy;2023 Randy Phalla</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;