import About from './About';
import Education from './Education';
import Skills from './Skills';
import Certificates from './Certificates';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* <main className="container mx-auto p-6 md:p-12"> */}
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      {/* </main> */}
    </>
  );
}

export default App;
