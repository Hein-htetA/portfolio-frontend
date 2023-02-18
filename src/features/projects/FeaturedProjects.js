import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FeaturedProjects = () => {
  return (
    <div>
      {/* <h4 className="text-center text-2xl text-light-gray mb-4">
        Featured Projects
      </h4> */}
      <div className="grid grid-cols-1 justify-center w-full gap-4 md:grid-cols-2 max-w-3xl mx-auto">
        <div className="flex flex-col text-light-gray max-w-sm mx-auto border-2 border-light-gray px-4 py-2 rounded-lg">
          <div className="flex justify-between text-bright-blue items-center mb-2">
            <h5 className="text-xl text-light-gray">YTU Bookshelf</h5>
            <div className="text-lg flex gap-x-2 items-center">
              <a
                href="https://github.com/Hein-htetA/YTU-Reuseable-Textbooks-Frontend"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://main.d2q8mxtpfmxkyy.amplifyapp.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>
          <p className="text-lg text-gray mb-2 grow">
            A platform where students can trade their used textbooks.
          </p>
          <ul className="flex gap-x-5 flex-wrap justify-center text-sm text-bright-blue">
            <li>
              <a href="https://reactjs.org/" target={"_blank"} rel="noreferrer">
                React
              </a>
            </li>
            <li>
              <a
                href="https://www.typescriptlang.org/"
                target={"_blank"}
                rel="noreferrer"
              >
                TypeScript
              </a>
            </li>
            <li>
              <a
                href="https://expressjs.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                Express.js
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                MongoDB
              </a>
            </li>
            <li>
              <a
                href="https://nodejs.org/en/"
                target={"_blank"}
                rel="noreferrer"
              >
                Node.js
              </a>
            </li>
            <li>
              <a href="https://jwt.io/" target={"_blank"} rel="noreferrer">
                JWT
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com/s3/"
                target={"_blank"}
                rel="noreferrer"
              >
                AWS S-3 Bucket
              </a>
            </li>
            <li>
              <a
                href="https://redux-toolkit.js.org/"
                target={"_blank"}
                rel="noreferrer"
              >
                Redux-ToolKit
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                Tailwind CSS
              </a>
            </li>
          </ul>
        </div>
        {/***************************/}
        <div className="flex flex-col text-light-gray max-w-sm mx-auto border-2 border-light-gray px-4 py-2 rounded-lg">
          <div className="flex justify-between text-bright-blue items-center mb-2">
            <h5 className="text-xl text-light-gray">YTU Cafeteria</h5>
            <div className="text-lg flex gap-x-2 items-center">
              <a
                href="https://github.com/Hein-htetA/cafeteria-test-site-frontend"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://main.dpg72h128xqq7.amplifyapp.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>
          <p className="text-lg text-gray mb-2">
            A single page E-commerce web application where students can open
            their own restaurants alongside with restaurants from University's
            cafeteria.
          </p>
          <ul className="flex gap-x-5 flex-wrap justify-center text-sm text-bright-blue">
            <li>
              <a href="https://reactjs.org/" target={"_blank"} rel="noreferrer">
                React
              </a>
            </li>
            <li>
              <a
                href="https://expressjs.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                Express.js
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                MongoDB
              </a>
            </li>
            <li>
              <a
                href="https://nodejs.org/en/"
                target={"_blank"}
                rel="noreferrer"
              >
                Node.js
              </a>
            </li>
            <li>
              <a
                href="https://aws.amazon.com/s3/"
                target={"_blank"}
                rel="noreferrer"
              >
                AWS S-3 Bucket
              </a>
            </li>
            <li>
              <a
                href="https://redux-toolkit.js.org/"
                target={"_blank"}
                rel="noreferrer"
              >
                Redux-ToolKit
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                target={"_blank"}
                rel="noreferrer"
              >
                Vanila CSS
              </a>
            </li>
          </ul>
        </div>
        {/**** ****************************/}
        <div className="flex flex-col text-light-gray max-w-sm mx-auto border-2 border-light-gray px-4 py-2 rounded-lg">
          <div className="flex justify-between text-bright-blue items-center mb-1">
            <h5 className="text-xl text-light-gray">Attendance Form</h5>
            <div className="text-lg flex gap-x-2 items-center">
              <a
                href="https://github.com/Hein-htetA/marvelous-ones-attendance-frontend"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://cheerful-otter-907e95.netlify.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
          </div>
          <div className="text-lg text-gray mb-2 text-center">
            <div className="text-left">
              Attendance tracking tool for a language training center.
            </div>
            <div className="mt-2 text-red-600">***Desktop View Only***</div>
            <div>password - hein</div>
          </div>
          <ul className="flex gap-x-5 flex-wrap justify-center text-sm text-bright-blue mt-auto">
            <li>
              <a href="https://reactjs.org/" target={"_blank"} rel="noreferrer">
                React
              </a>
            </li>
            <li>
              <a
                href="https://expressjs.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                Express.js
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                MongoDB
              </a>
            </li>
            <li>
              <a
                href="https://nodejs.org/en/"
                target={"_blank"}
                rel="noreferrer"
              >
                Node.js
              </a>
            </li>
            <li>
              <a href="https://mui.com/" target={"_blank"} rel="noreferrer">
                MaterialUI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
