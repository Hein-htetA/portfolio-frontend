import React from "react";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <ul className="text-bright-blue flex-row text-lg hidden ml-auto justify-end items-center gap-x-8  sm:flex px-8">
      <li onClick={toggleSidebar}>
        <a href="#about">About</a>
      </li>
      <li onClick={toggleSidebar}>
        <a href="#projects">Projects</a>
      </li>
      <li onClick={toggleSidebar}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
