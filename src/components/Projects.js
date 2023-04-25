import { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

function Projects() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <div  id="projects-slider" className={` ${isVisible ? "fade-in" : "fade-out"}`} ref={sectionRef}>
      <h1>
        Projects
      </h1>
      <h2>SampleWav</h2>
      <img
          className="project-logos"
          src={require("../images/samplewav-logo.png")}
          alt="SampleWav logo"
        />
      <p>- SampleWav is website that allows users to upload, browse, and download music samples and functions as a social media site allowing profiles, followers, comments, and reposts.</p>
        <p>- React, Javascript, Node.js, Express.js, MongoDB, Cloudinary, Tailwind CSS, CSS & HTML</p>
      <div>
        <img
          className="project-pics"
          src={require("../images/samplewav.png")}
          alt="SampleWav landing page screenshot"
        />
      </div>
      <div id="bestfest">
        
        <img
          className="project-logos"
          src={require("../images/best-fest-logo.png")}
          alt="Best Fest logo"
        />
        <p>- <h2>Best Fest</h2> is website that allows users singup, create a profile, then rate, review, and comment on music festival experiences</p>
        <p>- Node.js, Express.js, Handlebars, MongoDB, CSS & HTML</p>
        <img
          className="project-pics"
          src={require("../images/best-fest.png")}
          alt="BestFest landing page screenshot"
        />
      </div>
      <div>
        
        <img
          className="project-logos"
          src={require("../images/save-the-rave-logo.png")}
          alt="Save The Rave logo"
        />
        <p>- <h2>Save The Rave</h2> is an arcade-style game with music and a fun theme</p>
        <p>- Javascript, HTML, CSS, Canvas</p>
        <img
          className="rave-pics"
          src={require("../images/save-the-rave.png")}
          alt="Save the Rave intro screen"
        />
        <img
          className="rave-pics"
          src={require("../images/gameplay.png")}
          alt="Screenshot of the gameplay of the Save The Rave game"
        />
      </div>
    </div>
  );
}

export default Projects;
