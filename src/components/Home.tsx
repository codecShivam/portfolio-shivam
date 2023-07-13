// import { FaBars } from "react-icons/fa";
// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Project from "../pages/projects/Projects";
import Navbar from "./Navbar";

const Home: React.FC = () => {


  return (
    <Router>
      <main>
        <Navbar />
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </main>
    </Router>
  );
};

export default Home;
