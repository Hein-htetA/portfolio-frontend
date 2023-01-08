import React, { useState } from "react";
import AboutMe from "./features/aboutme/AboutMe";
import Contact from "./features/contact/Contact";
import Footer from "./features/footer/Footer";
import Introduction from "./features/introduction/Introduction";
import Navbar from "./features/navbar/Navbar";
import Projects from "./features/projects/Projects";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex bg-black font-serif flex-col scroll-pt-14">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <main className="p-6 py-2 md:px-24">
        <Introduction />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
