import { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

function About() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <div
      className={`home-container boxes-about about-container ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      ref={sectionRef}
    >
      <h1 className="font-bold">About Me</h1>
      <div>
        <p>Experience in</p>
        <p>React</p>
        <p>Javascript</p>
        <p>MongoDB</p>
        <p>Express</p>
        <p>NodeJS</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>Tailwind CSS</p>
        <p>Cloudinary</p>
        <p>bcrypt</p>
        <p>MERN-stack</p>
      </div>
      <div>
        <p>Soft Skills</p>
        <p>Analytical Skills</p>
        <p>Time Managment</p>
        <p>Communication</p>
        <p>Indepent Projects</p>
        <p>Organizational Skills</p>
        <p>Attention to Detail</p>
        <p>Positive Work Environment</p>
      </div>
      <div className="about-box text-l">
      
        <div>
          <p>
            Growing up at the intersection of music and technology, I developed
            a passion for innovation while witnessing music becoming
            increasingly accessible. This experience sparked my interest in
            various roles within the entertainment and service industries, such
            as band manager and event promoter, as I aimed to combine my
            creative interests with the dynamic world of technology.
          </p>
          <p>
            At Ironhack Web Developer Bootcamp, I discovered the ideal fusion of
            music and technology through web development, a fascinating career
            path that aligns with my problem-solving and creative abilities. As
            a recent graduate, I'm excited to join a company that promotes
            continuous learning and development, enabling me to advance as a web
            developer.
          </p>
          <p>
            In my past roles, I've demonstrated strong communication,
            analytical, and organizational skills—essential for success in web
            development. My diverse background has honed my attention to detail,
            time management, and capacity to overcome challenges using
            innovative solutions. These skills and my passion for music and
            innovation make me a valuable asset to any web development team.
          </p>
          <p>
            Committed to lifelong learning and bridging the gap between people
            and technology, I'm eager to join a company that shares my vision
            and offers a supportive environment for professional growth as a web
            developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
