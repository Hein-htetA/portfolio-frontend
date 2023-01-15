import React from "react";
import DownloadCV from "./DownloadCV";

const Introduction = () => {
  return (
    <section className="mb-20">
      <p className="text-bright-blue">Hi, my name is</p>
      <p className="text-light-gray text-4xl mt-6">Hein Htet Aung.</p>
      <p className="text-gray">
        I am a Front-End Web Developer living in Yangon.
      </p>
      <DownloadCV />
    </section>
  );
};

export default Introduction;
