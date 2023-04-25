import { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

function Projects() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <div  className={` ${isVisible ? "fade-in" : "fade-out"}`} ref={sectionRef}>
      <h1>
        Projects
      </h1>
      <h2>SampleWav</h2>
      <p>- A website that allows users to upload, browse, and download music samples and functions as a social media site allowing profiles, followers, comments, and reposts.</p>
        <p>- React, Javascript, Node.js, Express.js, MongoDB, Cloudinary, Tailwind CSS, CSS & HTML</p>
      <div>
        <img
          className="project-pics"
          src={require("../images/samplewav.png")}
          alt="SampleWav logo"
        />
      </div>
      <div>
        <h2>BestFest</h2>
        <p>- A website that allows users to rate, review, and comment on festival experiences</p>
        <p>- Node.js, Express.js, Handlebars, MongoDB, CSS & HTML</p>
        <img
          className="project-pics"
          src={require("../images/bestfest.png")}
          alt="BestFest logo"
        />
      </div>
      <div>
        <h2>Save The Rave</h2>
        <p>- An arcade-style game with music and a fun theme</p>
        <p>- Javascript, HTML, CSS, Canvas</p>
        <img
          className="rave-pics"
          src={require("../images/save-the-rave.png")}
          alt="BestFest logo"
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
