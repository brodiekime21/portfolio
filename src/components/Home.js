import { Button } from "react-bootstrap";

function Home() {
  return (
    <div id="Intro">
      <div className="">
        <h1 className="">
          <div>Hello</div>{" "}
          <div>
            I'm <span>Brodie</span>
          </div>{" "}
          <div>Full-Stack Web Developer</div>
        </h1>
        <Button
          className="resume-download"
          href={require("../Brodie-Kime-Resume.pdf")}
          download
        >
          Resume
        </Button>
        <img
          className="black-and-white-pic"
          src={require("../images/black-and-white-pic.png")}
          alt="Brodie Kime, black and white"
        />
      </div>
    </div>
  );
}

export default Home;
