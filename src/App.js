import { useState, useEffect } from 'react';
import './App.css';
import './global.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Aboutme from './components/Aboutme/Aboutme';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Welcome from './components/Welcome/Welcome';
import FullScreenAsk from './components/FullScreenAsk/FullScreenAsk';

function App() {

  const [ currentSection, setCurrentSection ] = useState(0);
  const [ startSite, setStartSite ] = useState(false);
  const [ playMusic, setPlayMusic ] = useState(false);

  let containerElement;
  let isScrolling = false;


  const handleScroll = (e) => {
    if(!isScrolling){
      const currentScrollTop = containerElement.scrollTop;
      const currentWindowHeight = window.innerHeight;
      setCurrentSection(Math.round((currentScrollTop + 52) / currentWindowHeight));
    }
  }

  useEffect(() => {
    containerElement = document.getElementById('container');
    containerElement.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Welcome setStartSite={setStartSite} setPlayMusic={setPlayMusic} />
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <div id='container' className='container'>
        <Hero startSite={startSite} currentSection={currentSection} />
        <Aboutme />
        <Skills currentSection={currentSection} />
        <Projects />
        <Education />
        <Contact />
      </div>
      <MusicPlayer startSite={startSite} playMusic={playMusic} />
      <FullScreenAsk startSite={startSite} />
    </div>
  );
}

export default App;