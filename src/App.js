import React from "react";
import Home from "./Components/home/Home";
import Nav from "./Components/home/nav";
import Edu_certi from "./Components/skills/Quali_comp";
import Projects from "./Components/projects/Projects";
import About from "./Components/about/About";
import Portfolio from "./Components/Portfolio/portfolio";
import Contact from "./Components/contact/Contact";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function App() {

  function Theme() {
    document.body.classList.toggle("light-body");
    document.body.classList.toggle("dark-body");
  }
  var options = {
    particles: {
      color: {
        value: "#54bab9"
      },
      number: {
        value: 10,
        density: {
          enable: false,
          value_area: 800
        }
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000"
        },
        polygon: {
          nb_sides: 6
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5445118727262681,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 142.0465754938091,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 40,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  
  return (
    <div id="light-body">
      <Nav />
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
      <Home themeFn={Theme} />
      <About />
      <Edu_certi />
      <Projects />
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;