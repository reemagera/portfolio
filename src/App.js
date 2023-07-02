import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;
