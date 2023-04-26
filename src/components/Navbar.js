import { useEffect, useState } from 'react';

function Navbar({ scrollPosition }) {
  const [showColumnLayout, setShowColumnLayout] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    setShowColumnLayout(scrollPosition >= 200);
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className={showColumnLayout ? 'column-layout' : ''}>
      <a href={"#home"} className="logo flex items-center mr-6">
        <img
          id="logo"
          src={require("../images/navbar-logo.png")}
          alt="Brodie Kime logo, the greater than symbol then B K then a forward slash followed by a less than symbol."
        />
      </a>

      <button
        id="hamburger-menu"
        className={`hamburger ${showColumnLayout ? '' : 'hidden'}`}
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      <div id="navbar-right" className={`${(isMenuOpen && showColumnLayout) ? 'open' : (showColumnLayout ? 'hidden' : '')}`}>
        <div id="main-links">
          <a
            href={"#home"}
            exact
            activeClassName="text-white"
            className="nav-links"
          >
            Home
          </a>
          <a href={"#about"} activeClassName="text-white" className="nav-links">
            About
          </a>
          <a
            href={"#projects"}
            activeClassName="text-white"
            className="nav-links"
          >
            Projects
          </a>
          <a
            href={"#contact"}
            activeClassName="text-white"
            className="nav-links"
          >
            Contact
          </a>
        </div>
        <div id="linkedin-github-navbar">
          <a
            href="https://www.linkedin.com/in/brodie-kime/"
            activeClassName="text-white"
            className="personal-links"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icons"
              src={require("../images/linkedin-icon.png")}
              alt="LinkedIn icon"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/brodiekime21"
            activeClassName="text-white"
            className="personal-links"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icons"
              src={require("../images/github-icon.png")}
              alt="GitHub icon"
            />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
