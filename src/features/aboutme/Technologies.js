import React from "react";

const Technologies = () => {
  return (
    <div className="flex justify-center flex-col mb-8">
      <h4 className="text-gray mt-4 mb-2 text-lg text-center">
        Here are a few technologies I've been working with recently.
      </h4>
      <ul className="grid grid-cols-2 md:grid-cols-3 text-gray gap-x-6">
        <li className="relative mb-2 pl-4 before:content-['∽'] before:absolute before:left-0">
          JavaScript (ES6+)
        </li>
        <li className="relative mb-2 pl-4 before:content-['∽'] before:absolute before:left-0">
          React
        </li>
        <li className="relative mb-2 pl-4 before:content-['∽'] before:absolute before:left-0">
          Node.js
        </li>
        <li className="relative mb-2 pl-4 before:content-['∽'] before:absolute before:left-0">
          Express.js
        </li>
        <li className="relative mb-2 pl-4 before:content-['∽'] before:absolute before:left-0">
          MongoDB
        </li>
        <li className="relative mb-2 pl-4 before:content-['∽'] before:absolute before:left-0">
          PostgreSQL
        </li>
        <li className="relative mb-2 pl-4 before:content-['∽'] before:absolute before:left-0">
          Tailwind( favourite )
        </li>
        <li className="relative mb-2 pl-4 before:content-['∽'] before:absolute before:left-0">
          MaterialUI
        </li>
        <li className="relative mb-2 pl-4 before:content-['∽'] before:absolute before:left-0">
          Bootstrap
        </li>
      </ul>
    </div>
  );
};

export default Technologies;
