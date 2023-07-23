import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import React from "react";
import Project from "../../components/Project";
import { projectDetails } from "./Details";

interface ProjectDetail {
  title: string;
  image: string;
  description: string;
  techstack: string;
  previewLink: string;
  githubLink: string;
}

const About: React.FC = () => {
  useEffect(() => {
    setTimeout(() => animatePage(), 0);
  }, []);

  const animatePage = () => {
    const page = document.getElementById("about");
    if (page) {
      page.classList.add("slide-in-about");
    }
  };

  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 700 }
  });

  return (
    <animated.div style={animationProps}>
    <div
      className="absolute overflow-hidden sm:left-[10%] left-0 sm:top-[11%] top-[6%] right-0 sm:right-[10%] overflow-y-hidden overscr"
      id="about"
      style={{ height: "calc(93.2vh - 7rem)" }}
    >
      <div className="content pt-12 overflow-y-auto " style={{ maxHeight: "100%" }}>
        <style>
          {`
            /* Customize scrollbar for webkit-based browsers (e.g., Chrome, Safari) */
            ::-webkit-scrollbar {
              width: 4px; /* Set the width of the scrollbar */
            }

            ::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.3); /* Set the color of the scrollbar thumb */
              border-radius: 100px; /* Set the border radius of the scrollbar thumb */
            }

            ::-webkit-scrollbar-thumb:hover {
              background-color: rgba(0, 0, 0, 0.6); /* Set the color of the scrollbar thumb on hover */
            }

            ::-webkit-scrollbar-track {
              background-color: rgba(0, 0, 0, 0); /* Set the color of the scrollbar track */
            }
          `}
        </style>
        <div className="mx-auto px-16 ">
          {/* Add overflow-hidden class to keep scrollbar within rounded container */}
          <main className="container mx-auto  max-width pt-10 mb-20">
            <section>
              <h1 className="text-2xl  text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                Projects
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
                {projectDetails.map(
                  ({
                    title,
                    image,
                    description,
                    techstack,
                    previewLink,
                    githubLink
                  }: ProjectDetail) => (
                    <Project
                      title={title}
                      image={image}
                      description={description}
                      techstack={techstack}
                      previewLink={previewLink}
                      githubLink={githubLink}
                    />
                  )
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  </animated.div>
  );
};

export default About;
