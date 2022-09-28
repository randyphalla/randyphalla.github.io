const Header = () => {
  return (
    <header className="">
      <h2 className="hidden">Header</h2>
      <div className="max-w-5xl mx-auto pt-4 pb-4 px-4">
        <div>
          <img className="w-16" src="public/randyphalla-icon.png" alt="Randy Phalla" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#aboutMe" aria-label="Scroll to about section">About</a>
            </li>
            <li>
              <a href="#skills" aria-label="Scroll to skills section">Skills</a>
            </li>
            <li>
              <a href="#work" aria-label="Scroll to work Experiences section">Work Experiences</a>
            </li>
            <li>
              <a href="#education" aria-label="Scroll to education section">Education</a>
            </li>
            <li>
              <a href="#projects" aria-label="Scroll to projects section">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;