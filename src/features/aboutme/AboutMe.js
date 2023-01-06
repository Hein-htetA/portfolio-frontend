import React from "react";
import AboutMeTextbox from "./AboutMeTextbox";
import AboutMeTitle from "./AboutMeTitle";
import ProfileImage from "./ProfileImage";
import Technologies from "./Technologies";

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-20 mb-40">
      <AboutMeTitle />
      <AboutMeTextbox />
      <Technologies />
      <ProfileImage />
    </section>
  );
};

export default AboutMe;
