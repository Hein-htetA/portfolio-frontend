import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NoteworthyProjects = () => {
  return (
    <div>
      <h4 className="text-center text-2xl text-light-gray mt-20 mb-4">
        Other Noteworthy Projects
      </h4>
      <div className="grid grid-cols-1 justify-center w-full gap-4 md:grid-cols-2">
        <div className="flex flex-col text-light-gray max-w-sm mx-auto border-2 border-light-gray px-4 py-2 rounded-lg">
          <div className="flex justify-end text-bright-blue items-center">
            <div className="text-lg">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </div>
          </div>
          <h5 className="text-lg text-gray mb-2 text-center">
            Inspired by Codding Addict Youtube Channel
          </h5>
          <p className="text-light-gray">
            I learned React Context and useReducer hook for state management by
            building this{" "}
            <span className="text-bright-blue">Cart Functionality</span>.
          </p>
        </div>
        {/**** ***********single project*****************/}
        <div className="flex flex-col text-light-gray max-w-sm mx-auto border-2 border-light-gray px-4 py-2 rounded-lg">
          <div className="flex justify-end text-bright-blue items-center">
            <div className="text-lg">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </div>
          </div>
          <h5 className="text-lg text-gray mb-2 text-center">
            Inspired by Codding Addict Youtube Channel
          </h5>
          <p>
            Responsive Web Application built with{" "}
            <span className="text-bright-blue">MaterialUI</span>.
          </p>
        </div>
        {/**** ***********single project*****************/}
        <div className="flex flex-col text-light-gray max-w-sm mx-auto border-2 border-light-gray px-4 py-2 rounded-lg">
          <div className="flex justify-end text-bright-blue items-center">
            <div className="text-lg">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </div>
          </div>
          <h5 className="text-lg text-gray mb-2 text-center">
            Inspired by Codding Addict Youtube Channel
          </h5>
          <p>
            By building this
            <span className="text-bright-blue"> modal</span> and
            <span className="text-bright-blue"> sidebar</span>, I learned CSS
            <span className="text-bright-blue"> transition</span> and
            <span className="text-bright-blue"> animation</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteworthyProjects;
