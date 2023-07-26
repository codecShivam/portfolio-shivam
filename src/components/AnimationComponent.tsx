import { FC, useRef, useState, useEffect } from 'react';
import useInterval from 'use-interval';
import hello from './hello.json';;
import Animation from './Animation';


interface AnimationComponentProps {}

const titles = ['Title 1', 'Title 2', 'Title 3']; 

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
    <div>
      <div className="c-canvas" id="canvas" ref={canvasRef} />

      <div className="flex flex-row justify-center items-center">
         <h1> 
           <Animation data={hello} width={100} height={100} className="c-slider__animation" />
           I am Atanas Atanasov 
         </h1> 

        {/* <h2>
          {titles.map((title: string, index: number) => (
            <span key={title} className={index === activeIndex ? 'current' : undefined}>
              {title}
            </span>
          ))}
        </h2> */}
      </div>
    </div>
  );
};

export default AnimationComponent;
