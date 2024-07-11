import './App.css';
import Header from './components/Header/Header';
import About from './components/Main/About';
import Contact from './components/Main/Contact';
import Home from './components/Main/Home';
import Projects from './components/Main/Projects';
import Skills from './components/Main/Skills';
function App() {
  return (
    <>
      <Header></Header>
      <section id="home">
      <Home></Home>
      </section>
      <section id="about">
        <About></About>
      </section>
      <section id="skills">
        <Skills></Skills>
      </section>
      <section id="projects">
        <Projects></Projects>
      </section>
      <section id="contact" >
        <Contact></Contact>
      </section>
    </>
  );
}

export default App;
