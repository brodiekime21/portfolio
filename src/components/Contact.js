import { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

function Contact() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <div id="contact" className={`${isVisible ? "fade-in" : "fade-out"}`}
      ref={sectionRef}>
      <p className="contact">Reach out to my email below or connect with me on&nbsp;
      <a 
        href="https://www.linkedin.com/in/brodie-kime/"
        className="linkedin-contact"
      >
        LinkedIn
      </a>
      </p>
      <h1 className="contact text-4xl font-bold mb-4 text-white">
        <a href="mailto:brodie.kime@gmail.com">Email me: brodie.kime@gmail.com</a>
      </h1>
    </div>
  );
}

export default Contact;

