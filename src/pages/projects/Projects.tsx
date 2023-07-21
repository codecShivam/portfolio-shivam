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
        className="absolute sm:left-[10%] left-0 sm:top-[11%] top-[6%] right-0 sm:right-[10%]"
        id="about"
      >
        <div className="content pt-12">
          <div className="mx-auto   px-16">
            <main className="container  mx-auto max-width pt-10 mb-20">
              <section>
                <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                  Projects
                </h1>
                <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
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
