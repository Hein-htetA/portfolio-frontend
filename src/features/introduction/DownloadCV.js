import React from "react";
import cv from "../../assets/HeinHtetAungCV.pdf";
import certificate from "../../assets/Certificates.pdf";

const DownloadCV = () => {
  return (
    <div className="flex justify-start gap-5 mt-5">
      <a
        href={cv}
        target={"_blank"}
        rel="noreferrer"
        className="w-36 text-bright-blue border-2 px-5 py-2 rounded-lg flex justify-center"
      >
        Resume
      </a>
      <a
        href={certificate}
        target={"_blank"}
        rel="noreferrer"
        className="w-36 text-bright-blue border-2 px-5 py-2 rounded-lg flex justify-center"
      >
        Certificates
      </a>
    </div>
  );
};

export default DownloadCV;
