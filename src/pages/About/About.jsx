import React from "react";
import resumeIcon from "../../assets/link (1).png";
import profileImage from "../../assets/ShivamYadav_.jpg";
import { stacks, socials } from "./Data";
import "./about.css";
import { useState } from "react";

const About = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconid) => {
    setHoveredIcon(iconid);
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
                {socials.map((social) => {
                  const { id, name, url, icon } = social;
                  return (
                    <a id={id} href={url} target="_blank" rel="noreferrer">
                      {icon}
                    </a>
                  );
                })}
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
                {stacks.map((stack) => {
                  const { id, name, icon } = stack;
                  return (
                    <span
                      className={`w-14 h-14 p-2 mb-5 cursor-grab shadow-lg shadow-gray-400 hover:shadow-none -translate-y-1 transform duration-300 hover:translate-y-0 rounded-full `}
                      onMouseEnter={() => handleIconHover(id)}
                      onMouseLeave={handleIconLeave}
                    >
                      {icon}
                      <div
                        className={`flex  mt-1 justify-center items-center text-gray-500 ${
                          hoveredIcon === id ? "" : "hidden"
                        }`}
                      >
                        <span className="bg-slate-50 font-medium p-1 px-2 rounded-full">
                          {name}
                        </span>
                      </div>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;