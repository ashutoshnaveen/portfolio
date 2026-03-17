import Navbar from './components/Navbar';
import AmbientAudio from './components/AmbientAudio';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Awards from './components/Awards';
import Extracurriculars from './components/Extracurriculars';
import Ventures from './components/Ventures';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <AmbientAudio />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Timeline />
      <Awards />
      <Extracurriculars />
      <Ventures />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
