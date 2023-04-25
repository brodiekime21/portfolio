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
      <div>
        <img
          className="project-pics"
          src={require("../images/samplewav.png")}
          alt="SampleWav logo"
        />
      </div>
      <div>
        <h2>BestFest</h2>
        <img
          className="project-pics"
          src={require("../images/bestfest.png")}
          alt="BestFest logo"
        />
      </div>
      <div>
        <h2>Save The Rave</h2>
        <img
          className="project-pics"
          src={require("../images/save-the-rave.png")}
          alt="BestFest logo"
        />
        <img
          className="project-pics"
          src={require("../images/gameplay.png")}
          alt="Screenshot of the gameplay of the Save The Rave game"
        />
      </div>
    </div>
  );
}

export default Projects;
