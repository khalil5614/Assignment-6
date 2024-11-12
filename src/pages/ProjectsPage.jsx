import React from "react";
import { projectList } from "../constants";
const ProjectsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col"
          >
            {/* Project Thumbnail */}
            {/* <img
              src={project.thumb_url}
              alt={`Thumbnail of ${project.title}`}
              className="w-full h-64 object-cover rounded-t-lg"
            /> */}
            <img
              src={project.thumb_url}
              alt={`Thumbnail of ${project.title}`}
              className="w-full h-64 object-contain rounded-t-lg"
            />

            <div className="flex-grow p-6">
              <h3 className="text-xl font-semibold text-gray-900 truncate">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>

            {/* Technologies Section */}
            <div className="p-6 bg-gray-50">
              <h4 className="text-md font-semibold text-gray-800 mb-3">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-4 justify-start">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <button
                      type="button"
                      className="flex items-center bg-gray-700 text-white font-medium rounded-lg text-sm px-4 py-2 gap-2 transition-transform transform hover:scale-105 hover:bg-white hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500"
                      aria-label={`Technology: ${tech.name}`}
                    >
                      <img
                        src={tech.link}
                        alt={`${tech.name} icon`}
                        className="w-6 h-6"
                      />
                      <span>{tech.name}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Link */}
            {/* <div className="p-6 bg-gray-100 rounded-b-lg">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-lg"
              >
                View Project
              </a>
            </div> */}
            <div className="p-6 bg-gray-100 rounded-b-lg">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transform transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Project
                <svg
                  className="ml-2 w-5 h-5 transition-transform duration-300 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L15.586 11H7a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
