import React from "react";
import ContactBody from "./ContactBody";
import ContactTitle from "./ContactTitle";

const Contact = () => {
  return (
    <section id="contact" className="mb-20">
      <ContactTitle />
      <ContactBody />
    </section>
  );
};

export default Contact;
