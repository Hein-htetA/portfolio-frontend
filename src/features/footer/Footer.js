import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RightSideEmail from "./RightSideEmail";

const afterClass =
  " md:after:h-28 md:after:w-px md:after:content-[''] md:after:bg-gray";

const Footer = () => {
  return (
    <div className="mt-10 text-gray flex flex-col items-center mb-5">
      <div
        className={
          "flex justify-between gap-x-3 text-xl md:fixed md:flex-col md:left-7 md:bottom-0 md:gap-y-4 md:items-center" +
          afterClass
        }
      >
        <a
          href="https://github.com/Hein-htetA"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100012656290113&mibextid=ZbWKwL"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.linkedin.com/in/hein-htet-aung-8b9427203/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://t.me/Hein_HtetAung" target={"_blank"} rel="noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a
          href="https://www.instagram.com/heinha12345/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <RightSideEmail />
      <p className="text-sm mt-1">Designed & Built by Hein Htet Aung</p>
    </div>
  );
};

export default Footer;
