import { Button } from "react-bootstrap";
 function Home() {

  return (

      <div className="home-container">
      <img
        className="linkedin-pic"
        src={require("../images/linkedin-pic.png")}
        alt="Brodie Kime, business headshot"
      />
        <h1>
          <div className="brodie-kime">
           Brodie Kime
          </div>
          <div id="full-stack">Full-Stack Web Developer</div>
        </h1>
        <Button
          className="resume-download"
          href={require("../Brodie-Kime-Resume.pdf")}
          download
        >
          RESUME
        </Button>
      </div>

  );
}

export default Home;
