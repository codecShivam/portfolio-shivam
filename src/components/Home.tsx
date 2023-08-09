import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Navbar from './Navbar';
import Project from '../pages/projects/Projects';
import AnimationComponent from './AnimationComponent'; 

const Home: React.FC = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <AnimationComponent />
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Home;
