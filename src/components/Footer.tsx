import { IoLogoGithub, IoLogoLinkedin, IoLogoDribbble, IoLogoBehance, IoMail } from "react-icons/io5/index.js";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="hidden">Footer</h2>

      <div className="flex justify-center md:justify-between items-center flex-col md:flex-row">

        <img className="" src="" alt="Randy Phalla" />

        <ul className="mt-5 mb-5 md:mt-0 md:mb-0 flex justify-center md:justify-evenly items-center md:items-start flex-col md:flex-row">

          <li className="ml-2 mr-2 w-fit">
            <a href="https://github.com/randyphalla" target="_blank" aria-label="Redirect to Github">
              <IoLogoGithub />
            </a>
          </li>

          <li className="ml-2 mr-2 w-fit">
            <a href="https://www.linkedin.com/in/randyphalla/" target="_blank" aria-label="Redirect to Linkedin">
              <IoLogoLinkedin />
            </a>
          </li>

          <li className="ml-2 mr-2 w-fit">
            <a href="https://dribbble.com/randyphalla" target="_blank" aria-label="Redirect to Dribbble">
              <IoLogoDribbble />
            </a>
          </li>

          <li className="ml-2 mr-2 w-fit">
            <a href="https://www.behance.net/randyphalla" target="_blank" aria-label="Redirect to Behance">
              <IoLogoBehance />
            </a>
          </li>

          <li className="ml-2 mr-2 w-fit">
            <a href="#" aria-label="Open email">
              <IoMail />
            </a>
          </li>

        </ul>

        <div className="">
          <p className="text-sm">Designed and Built by <span className="font-bold">Randy Phalla</span></p>
          <p className="text-sm">Built with <a className="font-bold" href="https://astro.build/" target="_blank" aria-label="Redirect to Astro">Astro</a>, <a className="font-bold" href="https://tailwindcss.com/" target="_blank" aria-label="Redirect to Tailwind">Tailwind</a>, and <a className="font-bold" href="https://reactjs.org/" target="_blank" aria-label="Redirect to React">React</a></p>
        </div>

      </div>

      <div className="mt-5 text-left">
        <p className="text-sm">&copy;2022 Randy Phalla</p>
      </div>

    </footer>
  )
}

export default Footer;