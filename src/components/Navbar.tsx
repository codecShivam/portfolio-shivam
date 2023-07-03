import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("");

  return (
    <nav className="nav">
      <CSSTransition
        in={activeNav === ""}
        timeout={500}
        classNames="fade"
      >
        <Link
          to="/"
          onClick={() => setActiveNav("")}
          className={`transition-colors duration-300 ease-in-out ${
            activeNav === "" ? "active" : ""
          }`}
        >
          <AiOutlineHome className="fill-current text-white" />
        </Link>
      </CSSTransition>
      <CSSTransition
        in={activeNav === "about"}
        timeout={500}
        classNames="fade"
      >
        <Link
          to="/about"
          onClick={() => setActiveNav("about")}
          className={`transition-colors duration-300 ease-in-out ${
            activeNav === "about" ? "active" : ""
          }`}
        >
          <AiOutlineUser className="fill-current text-white" />
        </Link>
      </CSSTransition>
      <CSSTransition
        in={activeNav === "experience"}
        timeout={500}
        classNames="fade"
      >
        <Link
          to="/experience"
          onClick={() => setActiveNav("experience")}
          className={`transition-colors duration-300 ease-in-out ${
            activeNav === "experience" ? "active" : ""
          }`}
        >
          <BiBook className="fill-current text-white" />
        </Link>
      </CSSTransition>
      <CSSTransition
        in={activeNav === "service"}
        timeout={500}
        classNames="fade"
      >
        <Link
          to="/service"
          onClick={() => setActiveNav("service")}
          className={`transition-colors duration-300 ease-in-out ${
            activeNav === "service" ? "active" : ""
          }`}
        >
          <RiServiceLine className="fill-current text-white" />
        </Link>
      </CSSTransition>
      <CSSTransition
        in={activeNav === "contact"}
        timeout={500}
        classNames="fade"
      >
        <Link
          to="/contact"
          onClick={() => setActiveNav("contact")}
          className={`transition-colors duration-300 ease-in-out ${
            activeNav === "contact" ? "active" : ""
          }`}
        >
          <BiMessageSquareDetail className="fill-current text-white" />
        </Link>
      </CSSTransition>

      <CSSTransition
        in={true}
        timeout={500}
        classNames="fade"
      >
        <div className="animation-container">
          {/* Render your page content here */}
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
