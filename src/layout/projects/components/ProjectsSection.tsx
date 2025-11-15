import { projectData } from "@/data/projectData";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 md:px-10">
      {projectData.map((project, index) => (
        <article
          key={index}
          className={`w-full max-w-[900px] 
            rounded-md pt-4 pr-1 gap-3 text-gray-200
            flex flex-col
            ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}
            `}
          style={{ backgroundColor: project.bgcolor }}
        >
          {/* Content */}
          <div className="flex flex-col px-4 gap-1 mt-2">
            <h1 className="text-2xl font-semibold tracking-wide">
              {project.title}
            </h1>
            <h2 className="text-xl font-light">
              Completed using {project.language}
            </h2>

            <div className="flex gap-4 mt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  Github <ExternalLink size={16} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  Website <ExternalLink size={16} />
                </a>
              )}
            </div>

            {project.link && (
              <iframe
                src={project.link}
                className="w-full h-64 md:h-80 rounded-sm rounded-tl-none mt-3"
              ></iframe>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectsSection;
