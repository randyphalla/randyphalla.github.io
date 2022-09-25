const Header = () => {
  return (
    <header className="">
      <h2 className="hidden">Header</h2>
      <div className="max-w-5xl mx-auto pt-4 pb-4 px-4 ">
        <div>
          <img className="" src="" alt="Randy Phalla" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#aboutMe">About</a>
            </li>
            <li>
              <a href="#work">Work Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;