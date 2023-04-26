import React, { useRef } from "react";
import Slider from "react-slick";
import useIntersectionObserver from "./useIntersectionObserver";

function Projects() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  return (
    <div
      id="projects-slider"
      className={` ${isVisible ? "fade-in" : "fade-out"}`}
      ref={sectionRef}
    >
      <h1>Projects</h1>
      <Slider id="slider-center" {...settings}>
        <div id="samplewav">
          <img
            className="samplewav-logo"
            src={require("../images/samplewav-logo.png")}
            alt="SampleWav logo"
          />
          <div className="code-deployed-website-links">
          <a
            href="https://github.com/brodiekime21/SampleWAV-client"
            activeClassName="text-white"
            className="personal-links"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="code-deployed-website-hyperlinks"
              src={require("../images/github-icon.png")}
              alt="GitHub icon"
            />
            Client Code
          </a>
          <a
            href="https://github.com/brodiekime21/SampleWAV-server"
            activeClassName="text-white"
            className="personal-links"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="code-deployed-website-hyperlinks"
              src={require("../images/github-icon.png")}
              alt="GitHub icon"
            />
            Server Code
          </a>
          <a
            href="https://samplewav.netlify.app/"
            activeClassName="text-white"
            className="personal-links"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="code-deployed-website-hyperlinks"
              src={require("../images/website-icon.png")}
              alt="Website icon"
            />
            Deployed Website
          </a>
          </div>
          <div className="skills">
            <div className="skill">React</div>
            <div className="skill">Javascript</div>
            <div className="skill">Node.js</div>
            <div className="skill">Express.js</div>
            <div className="skill">MongoDB</div>
            <div className="skill">Cloudinary</div>
            <div className="skill">Tailwind CSS</div>
            <div className="skill">CSS</div>
            <div className="skill">HTML</div>
          </div>
          <p className="project-description">
            <em>SampleWav</em> is a website that allows users to upload, browse,
            and download music samples and functions as a social media site
            allowing profiles, followers, comments, and reposts.
          </p>
          <img
            className="project-pics"
            src={require("../images/samplewav.png")}
            alt="SampleWav landing page screenshot"
          />
        </div>
        <div id="best-fest">
          <img
            className="best-fest-logo"
            src={require("../images/best-fest-logo.png")}
            alt="Best Fest logo"
          />
          <div className="code-deployed-website-links">
          <a
            href="https://github.com/brodiekime21/project-2"
            activeClassName="text-white"
            className="personal-links"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="code-deployed-website-hyperlinks"
              src={require("../images/github-icon.png")}
              alt="GitHub icon"
            />
            Code
          </a>
          <a
            href="https://bestfest.fly.dev/"
            activeClassName="text-white"
            className="personal-links"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="code-deployed-website-hyperlinks"
              src={require("../images/website-icon.png")}
              alt="Website icon"
            />
            Deployed Website
          </a>
          </div>
          <div className="skills">
            <div className="skill">Node.js</div>
            <div className="skill">Express.js</div>
            <div className="skill">Handlebars</div>
            <div className="skill">MongoDB</div>
            <div className="skill">CSS</div>
            <div className="skill">HTML</div>
          </div>
          <p className="project-description">
            <em>Best Fest</em> is a website that allows users to sign up, create
            a profile, then rate, review, and comment on music festival
            experiences.
          </p>
          <img
            className="project-pics"
            src={require("../images/best-fest.png")}
            alt="BestFest landing page screenshot"
          />
        </div>
        <div id="save-the-rave">
          <img
            className="save-the-rave-logo"
            src={require("../images/save-the-rave-logo.png")}
            alt="Save The Rave logo"
          />
          <div className="code-deployed-website-links">
          <a
            href="https://github.com/brodiekime21/project-1-the-game"
            activeClassName="text-white"
            className="personal-links"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="code-deployed-website-hyperlinks"
              src={require("../images/github-icon.png")}
              alt="GitHub icon"
            />
            Code
          </a>
          <a
            href="https://brodiekime21.github.io/project-1-the-game/" 
            activeClassName="text-white"
            className="personal-links"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="code-deployed-website-hyperlinks"
              src={require("../images/website-icon.png")}
              alt="Website icon"
            />
            Deployed Website
          </a>
          </div>
          <div className="skills">
            <div className="skill">Javascript</div>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">Canvas</div>
          </div>
          <p className="project-description">
            <em>Save The Rave</em> is a game that challenges players to save a
            rave by collecting music notes while avoiding obstacles. The game
            also features a leaderboard to track high scores.
          </p>
          <img
            className="project-pics"
            src={require("../images/save-the-rave.png")}
            alt="Save The Rave game screenshot"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Projects;
