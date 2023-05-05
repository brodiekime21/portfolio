import { Button } from "react-bootstrap";
 function Home() {

  return (
    <div className="home-container"
    >
      <div className="text-container">
      <img
        className="linkedin-pic"
        src={require("../images/linkedin-pic.png")}
        alt="Brodie Kime, business headshot"
      />
        <h1>
          <div>
           Brodie Kime
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
    </div>
  );
}

export default Home;
