import React from "react";

const sidebarOpenClass =
  "fixed top-0 bottom-0 right-0 left-0 z-10 transition-transform backdrop-blur-sm";
const sidebarHideClass = " translate-x-full";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={
        sidebarOpen ? sidebarOpenClass : sidebarOpenClass + sidebarHideClass
      }
    >
      <nav className="h-full ml-auto w-60 bg-zinc-800">
        <ul className="text-bright-blue flex text-lg flex-col gap-y-4 mb-40 w-full p-8 items-center justify-center relative top-1/2 -translate-y-3/4">
          <div className="bg-bright-blue h-px w-full"></div>
          <li onClick={toggleSidebar}>
            <a href="#about">About</a>
          </li>
          <div className="bg-bright-blue h-px w-full"></div>
          <li onClick={toggleSidebar}>
            <a href="#projects">Projects</a>
          </li>
          <div className="bg-bright-blue h-px w-full"></div>
          <li onClick={toggleSidebar}>
            <a href="#contact">Contact</a>
          </li>
          <div className="bg-bright-blue h-px w-full"></div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
