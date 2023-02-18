import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import NoteworthyProjects from "./NoteworthyProjects";
import ProjectsTitle from "./ProjectsTitle";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 mb-40">
      <ProjectsTitle />
      <FeaturedProjects />
    </section>
  );
};

export default Projects;
