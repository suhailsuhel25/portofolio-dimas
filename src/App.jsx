import './index.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#081B28] overflow-x-hidden relative">
      
      <Navbar />
      
      <main>
        <Hero />
        <Intro />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
