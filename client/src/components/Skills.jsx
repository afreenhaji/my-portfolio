import React from 'react';
import "../styles/Skills.css";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { TbBrandDjango } from "react-icons/tb";

function Skills() {
  return (
    <div className='skill'>
        <div className='sk'>SKILLS</div>
        <div className='s1'>
        <div className='s2'><FaJava size={100} /><sc>JAVA</sc></div>
        <div className='s2'><SiPython size={100}/><sc>PYTHON</sc></div>
        <div className='s2'><TbBrandJavascript size={100}/><sc>JAVA SCRIPT</sc></div>
        <div className='s2'><FaHtml5 size={100}/><sc>HTML</sc></div>
        <div className='s2'><FaReact size={100}/><sc>REACT</sc></div>
        <div className='s2'><GrMysql size={100}/><sc>MY SQL</sc></div>
        <div className='s2'><SiMongodb size={100}/><sc>MONGO DB</sc></div>
        <div className='s2'><SiExpress size={100}/><sc>EXPRESS JS</sc></div>
        <div className='s2'><FaCss3Alt size={100}/><sc>CSS</sc></div>
        <div className='s2'><DiNodejs size={100}/><sc>NODE JS</sc></div>
        <div className='s2'><TbBrandDjango size={100}/><sc>DJANGO</sc></div>
        </div>
        
    </div>
  )
}

export default Skills
