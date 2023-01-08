import React from "react";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <ul className="text-bright-blue flex-row text-lg hidden ml-auto justify-end items-center gap-x-8  md:flex px-8">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
