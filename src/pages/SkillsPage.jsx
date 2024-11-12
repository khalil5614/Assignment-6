import React from "react";
import { skillSet } from "../constants";

// const SkillsPage = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">
//         My Skills
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {skillSet.map((skill, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start"
//           >
//             <h3 className="text-xl font-semibold text-gray-900 mb-4">
//               {skill.name}
//             </h3>

//             <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
//               <div
//                 className={`h-full rounded-full ${
//                   skill.proficiency === "Advanced"
//                     ? "bg-blue-600"
//                     : skill.proficiency === "Intermediate"
//                     ? "bg-yellow-500"
//                     : "bg-gray-400"
//                 }`}
//                 style={{
//                   width:
//                     skill.proficiency === "Advanced"
//                       ? "80%"
//                       : skill.proficiency === "Intermediate"
//                       ? "60%"
//                       : "40%",
//                 }}
//               ></div>
//             </div>
//             <p className="text-sm text-gray-600">{skill.proficiency}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const SkillsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">
        My Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        {skillSet.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <img
              src={skill.link}
              alt={`${skill.name} logo`}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// const SkillsPage = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">
//         My Skills
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {skillSet.map((skill, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start"
//           >
//             {/* Skill Name and Logo */}
//             <div className="flex items-center mb-4">
//               <img
//                 src={skill.link}
//                 alt={`${skill.name} logo`}
//                 className="w-12 h-12 object-contain mr-4"
//               />
//               <h3 className="text-xl font-semibold text-gray-900">
//                 {skill.name}
//               </h3>
//             </div>

//             {/* Progress Bar */}
//             <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
//               <div
//                 className={`h-full rounded-full ${
//                   skill.proficiency === "Advanced"
//                     ? "bg-blue-600"
//                     : skill.proficiency === "Intermediate"
//                     ? "bg-yellow-500"
//                     : "bg-gray-400"
//                 }`}
//                 style={{
//                   width:
//                     skill.proficiency === "Advanced"
//                       ? "80%"
//                       : skill.proficiency === "Intermediate"
//                       ? "60%"
//                       : "40%",
//                 }}
//               ></div>
//             </div>

//             {/* Proficiency Level */}
//             <p className="text-sm text-gray-600">{skill.proficiency}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default SkillsPage;
