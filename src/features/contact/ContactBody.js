import React from "react";

const ContactBody = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-light-gray text-center mb-8">
        Whether you have a question or just want to say hi, feel free to leave a
        message. My inbox is always open.
      </p>
      <a
        href="mailto: heinha123456@gmail.com"
        className="px-4 py-2 text-bright-blue border-2 border-bright-blue rounded-lg "
      >
        Send Email
      </a>
    </div>
  );
};

export default ContactBody;
