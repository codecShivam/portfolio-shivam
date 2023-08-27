import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail, BiBook } from "react-icons/bi";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./nav.css";

const iconMap: Record<string, React.ReactElement> = {
  about: <AiOutlineUser />,
  projects: <BiBook />,
  "": <AiOutlineHome />,
  service: <RiServiceLine />,
  contact: <BiMessageSquareDetail />,
};

const NavbarLink: React.FC<{
  to: string;
  icon: React.ReactElement;
  name: string;
  active: boolean;
  onClick: () => void;
}> = ({ to, icon, name, active, onClick }) => (
  <CSSTransition in={active} timeout={500} classNames="fade">
    <Link
      to={to}
      onClick={onClick}
      className={`transition-colors duration-300 ease-in-out ${
        active ? "active" : ""
      }`}
    >
      <div className={`icon-wrapper ${active ? "active" : ""}`}>
        {icon}
        {name === "" ? (
          <span className="link-name">home</span>
        ) : (
          <span className="link-name">{name}</span>
        )}
      </div>
    </Link>
  </CSSTransition>
);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {Object.keys(iconMap).map((navKey) => (
          <NavbarLink
            key={navKey}
            to={`/${navKey}`}
            icon={iconMap[navKey]}
            name={navKey.charAt(0).toUpperCase() + navKey.slice(1)}
            active={location.pathname === `/${navKey}`}
            onClick={() => setMenuOpen(false)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
