import React from 'react'
import Img from "../assets/img.png";
import "../styles/About.css";
import { FaGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

function About() {
  return (
    <div className='about' id="about">
      <div className='photo'>
        <img src={Img} alt="My Photo" />
      </div>
      <div className='about-para'>
        <p>
          Dedicated software engineer with innovative problem-solving skills and a passion for technology. Aims to develop and
          implement high-quality software solutions to contribute to the success of the organization.</p>
        <a href="/Afreen_CV.pdf" download="Afreen_CV.pdf">
          <button>DOWNLOAD CV</button>
        </a>
        <div className='logo'>
          <t><a
            href="https://github.com/afreenhaji"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaGithub size={40} />
          </a></t>
          <t1><a
            href="https://www.linkedin.com/in/afreenhaji"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          ><SiLinkedin size={40} /></a></t1>
          <t2><a
            href="https://leetcode.com/afreenhaji"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          ><SiLeetcode size={40} /></a></t2>
        </div>
      </div>
    </div>
  )
}

export default About