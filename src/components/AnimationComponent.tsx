import { FC, useRef, useState, useEffect } from "react";
import useInterval from "use-interval";
import hello from "./hello.json";
import Animation from "./Animation";

interface AnimationComponentProps {}

const titles = [
  "Exploring IT realms through my B.Tech journey.",
  "Crafting open-source magic for the digital stage.",
  "Shaping the web, one code line at a time.",
];

const AnimationComponent: FC<AnimationComponentProps> = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useInterval(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === titles.length - 1 ? 0 : prevIndex + 1
    );
  }, 2000);

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

  return (
    <div className="bg-gray-900">
      <div className="c-canvas" id="canvas" ref={canvasRef} />
      <div className="flex flex-col items-center justify-center absolute top-[24%] left-1/3">
        <Animation
          data={hello}
          width={250}
          height={250}
          className="c-slider__animation"
        />
        <h1 className="flex flex-row justify-center text-white ">
          <span className=" text-[4rem] ">I am Shivam Yadav</span>
        </h1>
        <h2 className="text-white mt-4  flex flex-row items-center justify-center text-[1.8rem]">
          <span key={titles[activeIndex]}>{titles[activeIndex]}</span>
        </h2>
      </div>
    </div>
  );
};

export default AnimationComponent;
