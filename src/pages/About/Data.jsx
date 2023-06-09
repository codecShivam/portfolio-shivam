import React from "react";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javaScript.png";
import tailwindIcon from "../../assets/tailwind.png";
import cIcon from "../../assets/c.png";
import gitIcon from "../../assets/git.png";
import reactIcon from "../../assets/react.png";
import viteIcon from "../../assets/vite.svg";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/link.png";
import redditIcon from "../../assets/reddit.png";
import gmailIcon from "../../assets/gmail.png";
import twitterIcon from "../../assets/twitter.png";

export const stacks = [
  {
    id: 1,
    name: "HTML",
    icon: <img src={htmlIcon} alt="HTML" />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <img src={cssIcon} alt="CSS" />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <img src={javascriptIcon} alt="JavaScript" />,
  },
  {
    id: 4,
    name: "Tailwind",
    icon: <img src={tailwindIcon} alt="Tailwind CSS" />,
  },
  {
    id: 5,
    name: "C",
    icon: <img src={cIcon} alt="C" />,
  },
  {
    id: 6,
    name: "Git",
    icon: <img src={gitIcon} alt="Git" />,
  },
  {
    id: 7,
    name: "React",
    icon: <img src={reactIcon} alt="React" />,
  },
  {
    id: 8,
    name: "Vite",
    icon: <img src={viteIcon} alt="Vite" />,
  },
];

export const socials = [
  {
    id: 1,
    name: "github",
    url: "https://github.com/codecShivam",
    icon: <img src={githubIcon} className="h-10 w-10" alt="Github Icon" />,
  },
  {
    id: 2,
    name: "linkedin",
    url: "https://www.linkedin.com/in/shivam-yadav-513005257/",
    icon: <img src={linkedinIcon} className="h-10 w-10" alt="LinkedIn Icon" />,
  },
  {
    id: 3,
    name: "reddit",
    url: "https://www.reddit.com/user/codecShivam",
    icon: <img src={redditIcon} className="h-10 w-10" alt="Reddit Icon" />,
  },
  {
    id: 4,
    name: "gmail",
    url: "mailto:codecshivam@gmail.com",
    icon: <img src={gmailIcon} className="h-10 w-10" alt="Gmail Icon" />,
  },
  {
    id: 5,
    name: "twitter",
    url: "https://twitter.com/codecShivam",
    icon: <img src={twitterIcon} className="h-10 w-10" alt="Twitter Icon" />,
  },
];
