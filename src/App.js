import { Routes, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {






  return (
    <div >

      <Navbar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />



        </Routes>

    </div>
  );
}

export default App;