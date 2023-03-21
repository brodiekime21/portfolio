import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="boxes flex flex-col items-center">
        <h1 className="text-6xl font-bold mb-4 text-white">
          Hello
        </h1>
        <h1 className="text-6xl font-bold mb-4 text-white">
          I'm <span className="inline-block">Brodie</span>
        </h1>
        <h1 className="text-2xl font-semibold text-white">
          Full-Stack Web Developer
        </h1>
        <Button className="download mt-8" href={require("../Brodie-Kime-Resume.pdf")} download>
          Resume
        </Button>
      </div>
    </div>
  );
}

export default Home;