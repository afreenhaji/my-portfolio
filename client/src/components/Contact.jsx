import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h4 className="contact-subtitle">GET IN TOUCH</h4>
      <h1 className="contact-title">
        <h1 className="contact-title">
          I love to hear from you. Whether you have a question, just want to chat about tech, are looking to hire me for your next project <br />
          — shoot me a message.
        </h1>

      </h1>

      <div className="contact-details">
        <div>
          <h5>REACH ME AT</h5>
          <p className="contact-email">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=afreenhaji29@gmail.com" target="_blank" rel="noopener noreferrer">
              afreenhaji29@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h5>SOCIAL</h5>
          <p className="contact-social">
            <p1><a href="https://www.linkedin.com/in/afreenhaji">LinkedIn</a></p1>
            <p1><a href="https://leetcode.com/afreenhaji">Leetcode</a></p1>
            <p1><a href="https://github.com/afreenhaji">GitHub</a></p1>
          </p>
        </div>

        <div className="contact-button">
          <button
            onClick={() => window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=afreenhaji29@gmail.com",
              "_blank"
            )}
          >
            SAY HELLO.
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
