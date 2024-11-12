import React from "react";
import { educations } from "../../constants";
const Education = () => {
  return (
    <div className="px-4 py-8 bg-gray-50">
      <h1 className="text-4xl text-center font-extrabold text-gray-800 mt-8 mb-6">
        Educations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {educations.map((education, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {education.name}
            </h2>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Year: </span>
              {education.year}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-medium">Subject: </span>
              {education.subject}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Board/University: </span>
              {education.board}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
