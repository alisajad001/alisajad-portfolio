import Project from "./Project";

import { projects } from "../data";

const Projects = () => {
  return (
    <div className="w-full h-auto bg-gray-900 py-20" id="projects">
      <div className="max-w-[1000px] mx-auto h-full p-5 flex flex-col justify-evenly">
        <p className="font-bold text-4xl md:text-5xl text-gray-300">
          <span className="text-cyan-400 text-glow">02</span> Projects
        </p>

        <div className="mt-20 flex flex-col gap-6 justify-between sm:flex-row">
          {projects.map((project) => {
            return (
              <Project
                title={project.title}
                techs={project.techs}
                desc={project.desc}
                demoLink={project.demoLink}
                img={project.img}
                key={project.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
