import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="boxes flex flex-col items-start">
        <h1 className="mb-4 text-black">
          Hello I'm Brodie, <em>Full-Stack Web Developer</em>
        </h1>
        <Button className="download" href={require("../Brodie-Kime-Resume.pdf")} download>
          Resume
        </Button>
      </div>
    </div>
  );
}

export default Home;