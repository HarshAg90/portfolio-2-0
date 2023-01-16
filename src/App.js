import React from "react";
import Home from "./Components/home/Home";
import Nav from "./Components/home/nav";
import Edu_certi from "./Components/skills/Quali_comp";
import Projects from "./Components/projects/Projects";
import About from "./Components/about/About";
import Portfolio from "./Components/Portfolio/portfolio";
import Contact from "./Components/contact/Contact";

function App() {

  function Theme() {
    document.body.classList.toggle("light-body");
    document.body.classList.toggle("dark-body");
  }

  return (
    <div id="light-body">
      <Nav />
      <Home themeFn={Theme} />
      <About />
      <Edu_certi />
      <Projects />
      <Portfolio/>
      <Contact/>

      <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script> 
    </div>
  );
}

export default App;