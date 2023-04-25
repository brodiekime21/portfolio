import { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

function Contact() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <div className="flex items-center justify-center h-screen">
      <div       
      className={`contact-container ${isVisible ? "fade-in" : "fade-out"}`}
      ref={sectionRef}>
        <h1 className="">
          Reach out to my email below or connect with me on         
          <a 
          href="https://www.linkedin.com/in/brodie-kime/"
          className=""
        >
          LinkedIn
        </a>
        <a className="text-4xl font-bold mb-4 text-white" href="mailto:brodie.kime@gmail.com">Email me @ brodie.kime@gmail.com</a>
        </h1>
      </div>
    </div>
  );
}

export default Contact;

