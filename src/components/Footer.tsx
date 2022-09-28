import { IoLogoGithub, IoLogoLinkedin, IoLogoDribbble, IoLogoBehance, IoMail } from "react-icons/io5/index.js";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="hidden">Footer</h2>

      <div className="flex justify-center md:justify-between items-center flex-col md:flex-row">

        <img className="w-16" src="public/randyphalla-icon.png" alt="Randy Phalla" />

        <ul className="mt-5 mb-5 md:mt-0 md:mb-0 flex justify-center md:justify-evenly items-center md:items-start flex-col md:flex-row">

          <li className="mt-2 mb-2 md:mt-0 md: mb-0 ml-2 mr-2 w-fit">
            <a href="https://github.com/randyphalla" target="_blank" aria-label="Redirect to Github">
              <IoLogoGithub className="text-4xl md:text-2xl hover:text-gray-600" />
            </a>
          </li>

          <li className="mt-2 mb-2 md:mt-0 md: mb-0 ml-2 mr-2 w-fit">
            <a href="https://www.linkedin.com/in/randyphalla/" target="_blank" aria-label="Redirect to Linkedin">
              <IoLogoLinkedin className="text-4xl md:text-2xl hover:text-gray-600" />
            </a>
          </li>

          <li className="mt-2 mb-2 md:mt-0 md: mb-0 ml-2 mr-2 w-fit">
            <a href="https://dribbble.com/randyphalla" target="_blank" aria-label="Redirect to Dribbble">
              <IoLogoDribbble className="text-4xl md:text-2xl hhover:text-gray-600" />
            </a>
          </li>

          <li className="mt-2 mb-2 md:mt-0 md: mb-0 ml-2 mr-2 w-fit">
            <a href="https://www.behance.net/randyphalla" target="_blank" aria-label="Redirect to Behance">
              <IoLogoBehance className="text-4xl md:text-2xl hover:text-gray-600" />
            </a>
          </li>

          <li className="mt-2 mb-2 md:mt-0 md: mb-0 ml-2 mr-2 w-fit">
            <a href="#" aria-label="Open email">
              <IoMail className="text-4xl md:text-2xl hover:text-gray-600" />
            </a>
          </li>

        </ul>

        <div className="">
          <p className="text-sm">Designed and Built by <span className="font-bold">Randy Phalla</span></p>
          <p className="text-sm">Built with <a className="font-bold hover:text-gray-600" href="https://astro.build/" target="_blank" aria-label="Redirect to Astro">Astro</a>, <a className="font-bold hover:text-gray-600" href="https://tailwindcss.com/" target="_blank" aria-label="Redirect to Tailwind">Tailwind</a>, and <a className="font-bold hover:text-gray-600" href="https://reactjs.org/" target="_blank" aria-label="Redirect to React">React</a></p>
        </div>

      </div>

      <div className="mt-5 text-left">
        <p className="text-sm">&copy;2022 Randy Phalla</p>
      </div>

    </footer>
  )
}

export default Footer;