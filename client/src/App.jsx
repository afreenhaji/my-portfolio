import React from 'react';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Edu from './components/Edu.jsx';
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="edu">
        <Edu />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
