import React, { useState, useEffect } from "react";
import "../styles/Header.css";

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header">
      <a
        href="#home"
        className="nav-item"
      >
        AFREEN.
      </a>
      <a
        href="#home"
        className={`nav-item ${activeSection === "home" ? "active" : ""}`}
      >
        HOME
      </a>
      <a
        href="#about"
        className={`nav-item ${activeSection === "about" ? "active" : ""}`}
      >
        ABOUT
      </a>
      <a
        href="#project"
        className={`nav-item ${activeSection === "project" ? "active" : ""}`}
      >
        PROJECT
      </a>
      <a
        href="#contact"
        className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
      >
        CONTACT
      </a>
    </div>
  );
}

export default Header;
