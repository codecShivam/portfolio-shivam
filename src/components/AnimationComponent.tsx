import { FC, useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useInterval from "use-interval";
import hello from "./hello.json";
import Animation from "./Animation";

const titles = [
  "Exploring IT realms through my B.Tech journey.",
  "Crafting open-source magic for the digital stage.",
  "Shaping the web, one code line at a time.",
];
interface AnimationComponentProps {}
const AnimationComponent: FC<AnimationComponentProps> = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useInterval(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === titles.length - 1 ? 0 : prevIndex + 1
    );
  }, 2900);

  useEffect(() => {
    const canvas = canvasRef.current;

    import("./canvas")
      .then(({ initCanvas, createDots }) => {
        createDots(initCanvas("canvas"));
      })
      .catch(console.error);

    return () => {
      if (canvas) {
        canvas.innerHTML = "";
      }
    };
  }, []);

  const isHomePage = location.pathname === "/";
  const isBuildingPage = location.pathname === "/service";
  const renderDiv = isHomePage ? (
    <div className="absolute top-[24%] xl:left-1/3 lg:left-[26%] md:left-[20%] sm:left-[16%] left-[4%]">
      <Animation
        data={hello}
        width={250}
        height={250}
        className="c-slider__animation"
      />
      <h1 className=" text-white">
        <span className="md:text-[3.7rem] sm:text-[3rem] text-[2rem] flex flex-row justify-center items-center">
          I am Shivam Yadav
        </span>
      </h1>
      <h2 className="text-white mt-4 flex flex-row items-center justify-center sm:text-[1.8rem] text-[1rem]">
        <span key={titles[activeIndex]}>{titles[activeIndex]}</span>
      </h2>
    </div>
  ) : isBuildingPage ? (
    <div className="flex flex-col items-center justify-center absolute top-[24%] left-1/3">
      <h1 className="flex flex-row justify-center text-white ">
        <span className="text-[4rem] ">Under Construction</span>
      </h1>
    </div>
  ) : null;

  return (
    <div className="bg-[#000300]">
      <div className="c-canvas" id="canvas" ref={canvasRef} />
      {renderDiv}
    </div>
  );
};

export default AnimationComponent;
