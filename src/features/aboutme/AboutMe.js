import React from "react";
import AboutMeTextbox from "./AboutMeTextbox";
import AboutMeTitle from "./AboutMeTitle";
import ProfileImage from "./ProfileImage";
import Technologies from "./Technologies";

const AboutMe = () => {
  return (
    <section id="about" className="scroll-mt-20 mb-40">
      <AboutMeTitle />
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-x-5">
        <div>
          <AboutMeTextbox />
          <Technologies />
        </div>
        <div>
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
