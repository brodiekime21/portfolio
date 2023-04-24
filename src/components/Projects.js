import { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

function Projects() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);


    return (
      <h1       
      className={`home-container ${isVisible ? "fade-in" : "fade-out"}`}
      ref={sectionRef}>
      Projects
      </h1>
    );
    
  }
  
  export default Projects;