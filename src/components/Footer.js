function Footer() {
  return (
    <div id="footer">
      <div>
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
        <a
          href="https://github.com/brodiekime21"
          activeClassName="text-white"
          className="personal-links"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icons"
            src={require("../images/email-icon.png")}
            alt="GitHub icon"
          />
          Email
        </a>
      </div>
    <h2>&copy;  2023, Built and designed by Brodie Kime</h2>
    </div>
  );
}

export default Footer;
