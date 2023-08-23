import React from "react";

interface ProjectProps {
    title: string;
    image: string;
    description: string;
    techstack: string;
    previewLink: string;
    githubLink: string;
}

const Project: React.FC<ProjectProps> = ({
    title,
    image,
    description,
    techstack,
    previewLink,
    githubLink,
}) => {
    return (
        <article className="rounded-xl mt-6 mb-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900 hover:shadow-lg hover:scale-105 hover:-translate-y-2 hover:translate-x-2 transition-transform duration-300">
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    className="w-full h-60 object-cover animate-zoomInAnimation"
                    alt=""
                    loading="lazy"
                />
            </div>
            <div className="dark:bg-dark-card p-4">
                <h1 className="dark:text-light-heading font-semibold text-md pt-1">{title}</h1>
                <p className="text-content pt-3 text-sm font-medium font-serif">{description}</p>
                <h3 className="text-dark-heading dark:text-light-heading font-medium pt-3">
                    Tech Stack: <span className="font-light">{techstack}</span>
                </h3>
                <div className="flex justify-between items-center mt-3">
                    <a
                        href={previewLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline font-semibold"
                    >
                        Live Preview
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline font-semibold"
                    >
                        View Code
                    </a>
                </div>
            </div>
        </article>
    );
};

export default Project;
