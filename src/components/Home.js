import { Button } from "react-bootstrap";
 function Home() {

  return (
    <div className="home-container"
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
        className="linkedin-pic"
        src={require("../images/linkedin-pic.png")}
        alt="Brodie Kime, business headshot"
      />
    </div>
  );
}

export default Home;
