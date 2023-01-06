import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FeaturedProjects = () => {
  return (
    <div>
      <h4 className="text-center text-2xl text-light-gray mb-4">
        Featured Projects
      </h4>
      <div className="grid grid-cols-1 justify-center w-full gap-4 md:grid-cols-2">
        <div className="flex flex-col text-light-gray max-w-sm mx-auto border-2 border-light-gray px-4 py-2 rounded-lg">
          <div className="flex justify-between text-bright-blue items-center mb-2">
            <h5 className="text-xl text-light-gray">YTU Cafeteria</h5>
            <div className="text-lg">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </div>
          </div>
          <p className="text-lg text-gray mb-2">
            A single page E-commerce web application where students can open
            their own restaurants alongside with restaurants from University's
            cafeteria.
          </p>
          <ul className="flex gap-x-5 flex-wrap justify-center text-sm text-bright-blue">
            <li>React</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>AWS-S3 Bucket</li>
            <li>Vanila CSS</li>
          </ul>
        </div>
        {/**** ****************************/}
        <div className="flex flex-col text-light-gray max-w-sm mx-auto border-2 border-light-gray px-4 py-2 rounded-lg">
          <div className="flex justify-between text-bright-blue items-center mb-1">
            <h5 className="text-xl text-light-gray">Attendance Form</h5>
            <div className="text-lg">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </div>
          </div>
          <p className="text-lg text-gray mb-2">
            Attendance tracking tool for a language training center.
          </p>
          <ul className="flex gap-x-5 flex-wrap justify-center text-sm text-bright-blue">
            <li>React</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>MaterialUI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
