import React, { FC, useRef, useState, useEffect } from 'react';
import useInterval from 'use-interval';
import hello from './hello.json';
import Animation from './Animation';

interface AnimationComponentProps {}

const titles = ['Title 1dfnwenflnlfnwelf', 'Title 2dfnlenlfknelenflke', 'Title 3lkenrlwnlkfnlnlkn'];

const AnimationComponent: FC<AnimationComponentProps> = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useInterval(() => {
    setActiveIndex((prevIndex) => (prevIndex === titles.length - 1 ? 0 : prevIndex + 1));
  }, 5000);

  useEffect(() => {
    const canvas = canvasRef.current;

    import('./canvas')
      .then(({ initCanvas, createDots }) => {
        createDots(initCanvas('canvas'));
      })
      .catch(console.error);

    return () => {
      if (canvas) {
        canvas.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className='bg-gray-900'>
      <div className="c-canvas" id="canvas" ref={canvasRef} />

      <div className="items-center absolute top-[33%] left-[36%]">
        <h1 className="items-center text-white ">
          <Animation data={hello} width={200} height={200} className="c-slider__animation" />
          <span className='ml-2 text-[3rem] '>I am Shivam Yadav</span>
        </h1>

        <h2 className='text-white mt-4'>
          {titles.map((title: string, index: number) => (
            <span
              key={title}
            >
              {title}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default AnimationComponent;
