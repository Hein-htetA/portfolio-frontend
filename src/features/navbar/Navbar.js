import React, { useState } from "react";
import NavbarToggleBtn from "./SidebarToggleBtn";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";

const Navbar = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <nav className="py-5 w-full shadow-lg shadow-stone-900 sticky top-0 bg-black flex justify-end z-10">
      <NavbarToggleBtn
        toggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
      />
      <NavLinks toggleSidebar={toggleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default Navbar;
