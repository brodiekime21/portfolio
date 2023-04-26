import { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

function Contact() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <div id="contact" className={`${isVisible ? "fade-in" : "fade-out"}`}
      ref={sectionRef}>
      <p className="contact">Currently looking for new opportunities.<br></br>Click below to reach out.
      </p>
      <h1 className="contact">
        <a className=" contact-button" href="mailto:brodie.kime@gmail.com">brodie.kime@gmail.com</a>
      </h1>
    </div>
  );
}

export default Contact;

