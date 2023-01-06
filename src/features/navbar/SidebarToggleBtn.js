import React from "react";

const navBtnClass = `text-bright-blue w-9 visible sm:invisible relative ml-auto mr-8 z-20 h-7 before:content-[''] before:block before:w-full before:h-0.5 before:bg-bright-blue before:my-1.5 before:transition-transform after:content-[''] after:block after:w-full after:h-0.5 after:bg-bright-blue after:my-1.5 after-transition-transform `;

const sidebarOpenClass = ` before:rotate-45 before:-translate-x-0.5 before:translate-y-3 after:-rotate-45 after:-translate-x-0.5 after:-translate-y-1`;

const SidebarToggleBtn = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <button
      className={sidebarOpen ? navBtnClass + sidebarOpenClass : navBtnClass}
      onClick={toggleSidebar}
    >
      <div
        className={
          sidebarOpen
            ? "opacity-0 block w-full w-full h-0.5 bg-bright-blue my-1.5"
            : `block w-full w-full h-0.5 bg-bright-blue my-2`
        }
      ></div>
    </button>
  );
};

export default SidebarToggleBtn;
