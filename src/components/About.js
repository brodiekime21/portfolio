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
      <h1 id="about-me-title">About Me</h1>
      <div id="experience-soft-skills-flex">
        <div className="about-box">
          <h2 className="experience-soft-skills-titles">Experience in</h2>
          <div className="skills-about">
            <div className="skill-about">React</div>
            <div className="skill-about">Javascript</div>
            <div className="skill-about">MongoDB</div>
            <div className="skill-about">Express</div>
            <div className="skill-about">NodeJS</div>
            <div className="skill-about">HTML</div>
            <div className="skill-about">CSS</div>
            <div className="skill-about">Tailwind CSS</div>
            <div className="skill-about">Boostrap</div>
            <div className="skill-about">Cloudinary</div>
            <div className="skill-about">bcrypt</div>
            <div className="skill-about">MERN-stack</div>
            <div className="skill-about">GitHub</div>
            <div className="skill-about">Canva</div>

          </div>
        </div>
        <div className="about-box">
          <h2 className="experience-soft-skills-titles">Soft Skills</h2>
          <div className="skills-about">
            <div className="skill-about">Analytical Skills</div>
            <div className="skill-about">Time Managment</div>
            <div className="skill-about">Communication</div>
            <div className="skill-about">Indepent Projects</div>
            <div className="skill-about">Organization</div>
            <div className="skill-about">Attention to Detail</div>
            <div className="skill-about">Teamwork</div>
          </div>
        </div>
      </div>
      <div className="about-box text-l">
        <div id="about-me-text">
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
            development. My diverse background in the entertainment and service
            industries has honed my attention to detail, time management, and
            capacity to overcome challenges using innovative solutions. Driven
            by a passion for music, technology, and connecting people, I am
            dedicated to using my web development skills to create meaningful
            experiences and positively impact the digital landscape, which is
            the driving force of my career path and makes me a valuable asset to
            any web development team that shares these goals.
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
