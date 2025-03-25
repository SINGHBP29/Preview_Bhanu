import { projectsData } from './project1';
import ProjectCard from './project-card';
import '../styles/project.css';
const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h1 className="font-extrabold text-2xl tracking-wide">PROJECTS</h1>
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 5).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
              <h2 className="text-center text-lg font-bold mt-4">{project.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;