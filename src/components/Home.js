import { useRef } from "react";
import { Button } from "react-bootstrap";
import useIntersectionObserver from "./useIntersectionObserver"


function Home() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <div className={`home-container ${isVisible ? "fade-in" : "fade-out"}`}
    ref={sectionRef}
    >
      <div className="text-container">
        <h1 className="">
          <div>Hello,</div>{" "}
          <div>
            I'm <span>Brodie</span>
          </div>{" "}
          <div id="full-stack">Full-Stack Web Developer</div>
        </h1>
        <Button
          className="resume-download"
          href={require("../Brodie-Kime-Resume.pdf")}
          download
        >
          Resume
        </Button>
      </div>
      <img
        className="black-and-white-pic"
        src={require("../images/black-and-white-pic.png")}
        alt="Brodie Kime, black and white"
      />
    </div>
  );
}

export default Home;
