import React from "react";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/link.png";
import redditIcon from "../../assets/reddit.png";
import gmailIcon from "../../assets/gmail.png";
import twitterIcon from "../../assets/twitter.png";
import resumeIcon from "../../assets/link (1).png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javaScript.png";
import tailwindIcon from "../../assets/tailwind.png";
import cIcon from "../../assets/c.png";
import gitIcon from "../../assets/git.png";
import reactIcon from "../../assets/react.png";
import profileImage from "../../assets/ShivamYadav_.jpg";
import viteIcon from "../../assets/vite.svg";
import "./about.css";
import { useState } from "react";

const About = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="absolute sm:left-[10%] left-0 sm:top-[11%] top-[6%] right-0 sm:right-[10%]">
        <div className="content pt-12">
          <div className="mx-auto px-16" id="about">
            <div className="text-6xl font-montserrat md:text-7xl text-center md:text-left font-medium text-gray-500 pb-4 mb-16">
              About Me
            </div>
            <div className="md:flex items-center space-y-8 md:space-y-0">
              <div className="md:order-last basis-1/3 h-full">
                <img
                  src={profileImage}
                  className="rounded-full h-52 w-52 mx-auto cursor-grab border-2 border-slate-200"
                  alt=""
                />
              </div>
              <div className="basis-2/3 space-y-4">
                <span className="text-gray-500 text-xl">Hi, I am </span>
                <div className="text-cyan-500 text-4xl  font-bold">
                  Shivam Yadav
                </div>
                <div className="text-xl text-gray-500 font-semibold">
                  Passionate Developer from &nbsp;🇮🇳
                </div>
                <div className="font-medium font-roboto text-gray-500">
                  As a dynamic and enthusiastic individual, I am always seeking
                  new challenges that allow me to push myself beyond my limits.
                  I thrive in competitive environments and enjoy collaborating
                  with like-minded individuals who share my passion for
                  continuous growth and development. I have a strong desire to
                  acquire new skills and knowledge, and I enjoy sharing my
                  expertise with others. I approach tasks with an open mind and
                  constantly seek innovative ways to overcome obstacles and
                  achieve success.
                </div>
              </div>
            </div>
            <div className="md:flex place-items-baseline items-baseline">
              <div className="py-10 flex items-center space-x-4 justify-center">
                <a
                  href="https://github.com/codecShivam"
                  target="_blank"
                  rel="noreferrer"
                  className={`relative rounded-full ${
                    hoveredIcon === "github" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("github")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={githubIcon} className="h-10 w-10" alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-yadav-513005257/"
                  target="_blank"
                  rel="noreferrer"
                  className={`relative rounded-full ${
                    hoveredIcon === "linkedin" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("linkedin")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={linkedinIcon} className="h-10 w-10" alt="" />
                </a>
                <a
                  href="https://www.reddit.com/user/codecShivam"
                  target="_blank"
                  rel="noreferrer"
                  className={`relative rounded-full ${
                    hoveredIcon === "reddit" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("reddit")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={redditIcon} className="h-10 w-10" alt="" />
                </a>
                <a
                  href="mailto:codecshivam@gmail.com"
                  rel="noreferrer"
                  className={`relative rounded-full ${
                    hoveredIcon === "gmail" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("gmail")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={gmailIcon} className="h-10 w-10" alt="" />
                </a>
                <a
                  href="https://twitter.com/codecShivam"
                  target="_blank"
                  rel="noreferrer"
                  className={`relative rounded-full ${
                    hoveredIcon === "twitter" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("twitter")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={twitterIcon} className="h-10 w-10" alt="" />
                </a>
              </div>
              <a
                className="p-2 bg-gray-800 text-white cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border"
                href="https://drive.google.com/file/d/13eGNa5rewHdGSvlscJN6DZ9V8bovc-dx/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
              >
                <div>Resume</div>
                <img className="h-6 w-6" src={resumeIcon} alt="" />
              </a>
            </div>
            <div className="mt-12 font-dosis">
              <div className="flex flex-row justify-start">
                <h1 className="text-4xl text-gray-500 font-bold">
                  Stack I Use&#58;
                </h1>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 pb-12">
                <span
                  className={`w-14 h-14 p-2 mb-5 cursor-grab shadow-lg shadow-gray-400 hover:shadow-none -translate-y-1 transform duration-300 hover:translate-y-0 rounded-full ${
                    hoveredIcon === "html" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("html")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={htmlIcon} alt="" />
                  <div
                    className={`flex  mt-1 justify-center items-center text-gray-500 ${
                      hoveredIcon === "html" ? "" : "hidden"
                    }`}
                  >
                    <span className="bg-white p-1 px-2 rounded-full">HTML</span>
                  </div>
                </span>
                <span
                  className={`w-14 h-14 p-2 cursor-grab shadow-lg shadow-gray-400 hover:shadow-none -translate-y-1 transform duration-300 hover:translate-y-0 rounded-full ${
                    hoveredIcon === "css" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("css")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={cssIcon} alt="" />
                  <div
                    className={`flex  mt-1 justify-center items-center text-gray-500 ${
                      hoveredIcon === "css" ? "" : "hidden"
                    }`}
                  >
                    <span className="bg-white p-1 px-2 rounded-full">CSS</span>
                  </div>
                </span>
                <span
                  className={`w-14 h-14 p-2 cursor-grab shadow-lg shadow-gray-400 hover:shadow-none -translate-y-1 transform duration-300 hover:translate-y-0 rounded-full ${
                    hoveredIcon === "javascript" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("javascript")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={javascriptIcon} alt="" />
                  <div
                    className={`flex  mt-1 justify-center items-center text-gray-500 ${
                      hoveredIcon === "javascript" ? "" : "hidden"
                    }`}
                  >
                    <span className="bg-white p-1 px-2 rounded-full">
                      JavaScript
                    </span>
                  </div>
                </span>
                <span
                  className={`w-14 h-14 p-2 cursor-grab shadow-lg shadow-gray-400 hover:shadow-none -translate-y-1 transform duration-300 hover:translate-y-0 rounded-full ${
                    hoveredIcon === "tailwind" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("tailwind")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={tailwindIcon} alt="" />
                  <div
                    className={`flex  mt-1 justify-center items-center text-gray-500 ${
                      hoveredIcon === "tailwind" ? "" : "hidden"
                    }`}
                  >
                    <span className="bg-white p-1 px-2 rounded-full">
                      Tailwind
                    </span>
                  </div>
                </span>
                <span
                  className={`w-14 h-14 p-2 cursor-grab shadow-lg shadow-gray-400 hover:shadow-none -translate-y-1 transform duration-300 hover:translate-y-0 rounded-full ${
                    hoveredIcon === "c" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("c")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={cIcon} alt="" />
                  <div
                    className={`flex  mt-1 justify-center items-center text-gray-500 ${
                      hoveredIcon === "c" ? "" : "hidden"
                    }`}
                  >
                    <span className="bg-white p-1 px-4 rounded-full">C</span>
                  </div>
                </span>
                <span
                  className={`w-14 h-14 p-2 cursor-grab shadow-lg  shadow-gray-400 hover:shadow-none -translate-y-1 transform duration-300 hover:translate-y-0 rounded-full ${
                    hoveredIcon === "git" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("git")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={gitIcon} alt="" />
                  <div
                    className={`flex  mt-1 justify-center items-center text-gray-500 ${
                      hoveredIcon === "git" ? "" : "hidden"
                    }`}
                  >
                    <span className="bg-white p-1 px-2 rounded-full">Git</span>
                  </div>
                </span>
                <span
                  className={`w-14 h-14 p-2 cursor-grab shadow-lg shadow-gray-400 hover:shadow-none -translate-y-1 transform duration-300 hover:translate-y-0 rounded-full ${
                    hoveredIcon === "react" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("react")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={reactIcon} alt="" />
                  <div
                    className={`flex  mt-1 justify-center items-center text-gray-500 ${
                      hoveredIcon === "react" ? "" : "hidden"
                    }`}
                  >
                    <span className="bg-white p-1 px-2 rounded-full">
                      React
                    </span>
                  </div>
                </span>
                <span
                  className={`w-14 h-14 p-2 cursor-grab shadow-lg shadow-gray-400 hover:shadow-none -translate-y-1 transform duration-300 hover:translate-y-0 rounded-full ${
                    hoveredIcon === "vite" ? "text-vite" : ""
                  }`}
                  onMouseEnter={() => handleIconHover("vite")}
                  onMouseLeave={handleIconLeave}
                >
                  <img src={viteIcon} alt="" />
                  <div
                    className={`flex  mt-1 justify-center items-center text-gray-500 ${
                      hoveredIcon === "vite" ? "" : "hidden"
                    }`}
                  >
                    <span className="bg-white p-1 px-2 font-medium rounded-full">
                      Vite
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
