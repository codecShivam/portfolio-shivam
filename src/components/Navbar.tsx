import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const iconMap: Record<string, React.ReactElement> = {
  "": <AiOutlineHome />,
  about: <AiOutlineUser />,
  projects: <BiBook />,
  service: <RiServiceLine />,
  contact: <BiMessageSquareDetail />,
};

const NavbarLink: React.FC<{
  to: string;
  icon: React.ReactElement;
  active: boolean;
  onClick: () => void;
}> = ({ to, icon, active, onClick }) => (
  <CSSTransition in={active} timeout={500} classNames="fade">
    <Link
      to={to}
      onClick={onClick}
      className={`transition-colors duration-300 ease-in-out ${
        active ? "active" : ""
      }`}
    >
      {icon}
    </Link>
  </CSSTransition>
);

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("");

  return (
    <nav className="nav">
      {Object.keys(iconMap).map((navKey) => (
        <NavbarLink
          key={navKey}
          to={`/${navKey}`}
          icon={iconMap[navKey]}
          active={activeNav === navKey}
          onClick={() => setActiveNav(navKey)}
        />
      ))}
    </nav>
  );
};

export default Navbar;
