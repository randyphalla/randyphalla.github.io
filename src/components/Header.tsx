import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {

  });

  return (
    <>
      <header className="border-b-1 border-solid border-gray-100">
        <h2 className="hidden">Header</h2>

        {/* max-w-screen-xl mx-auto border-1 border-solid border-gray-900 */}
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-4 transition-all">
          <img className="w-16" src="public/randyphalla-icon.png" alt="Randy Phalla" />
          <nav className="hidden md:block">
            <ul className="flex justify-between items-center">
              <li className="pr-4">
                <a className="flex justify-center items-center h-16 font-light text-base" href="#">Home</a>
              </li>
              <li className="pr-4">
                <a className="flex justify-center items-center h-16 font-light text-base" href="#aboutMe" aria-label="Scroll to about section">About</a>
              </li>
              <li className="pr-4">
                <a className="flex justify-center items-center h-16 font-light text-base" href="#skills" aria-label="Scroll to skills section">Skills</a>
              </li>
              <li className="pr-4">
                <a className="flex justify-center items-center h-16 font-light text-base" href="#work" aria-label="Scroll to work Experiences section">Work Experiences</a>
              </li>
              <li className="pr-4">
                <a className="flex justify-center items-center h-16 font-light text-base" href="#education" aria-label="Scroll to education section">Education</a>
              </li>
              <li className="">
                <a className="flex justify-center items-center h-16 font-light text-base" href="#projects" aria-label="Scroll to projects section">Projects</a>
              </li>
            </ul>
          </nav>
        </div>

      </header>
      <div className="hidden">asdasdasd</div>
    </>
  )
};

export default Header;
