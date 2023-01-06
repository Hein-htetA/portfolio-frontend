import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 text-gray flex flex-col items-center mb-5">
      <div className="w-40 flex justify-between mb-2 text-xl">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faTelegram} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <p className="text-sm">Designed & Built by Hein Htet Aung</p>
    </div>
  );
};

export default Footer;
