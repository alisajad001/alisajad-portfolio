import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};
export default App;
