import React from "react";

import { experiences } from "../../constants";
const Experience = () => {
  return (
    <div className=" mx-auto p-8 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">
        Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              {experience.position}
            </h2>
            <p className="text-gray-500 text-sm mb-2">{experience.duration}</p>
            <p className="text-gray-600 text-lg">{experience.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
