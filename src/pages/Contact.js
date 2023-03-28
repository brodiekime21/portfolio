import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="boxes flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Please feel free to reach out to my email below or connect with me on         
        </h1>
          <a 
          href="https://www.linkedin.com/in/brodie-kime/"
          className="mr-6 text-4xl font-bold hover:text-white focus:outline-none focus:ring focus:ring-white"
        >
          LinkedIn
        </a>

        <h1 className="text-4xl font-bold mb-4 text-white">brodie.kime@gmail.com</h1>
      </div>
    </div>
  );
}

export default Contact;

