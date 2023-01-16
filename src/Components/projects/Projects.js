import React from "react";
import "./Project.css";
import T_snake from "../../assets/media/snake.jpg";

export default function Projects() {
    return (
        <section id="proj">
      <div id="projects">
        <h3 className="title">Portfolio</h3>
        <h1 className="title">Some of my work</h1>
        <div className="cards">
          <img src={T_snake} alt="" />
          <div className="content">
        <h3>BROWSER EXTENTION</h3>
            <h1>Continuous Lo-Fi Background Music</h1>
            <p className="desc">
              I have created a Chrome extention That Autostarts and autoplays
              music in browser in background, we have Total control over music,
              I intended for it to play a Lofi live stream but we can switch
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Background play</span>
              <span>Auto play - pause</span>
              <span>Full manual control</span>
              <span>Customizable music</span>
            </p>
              <a href="#">TAKE ME TO PROJECT</a>
          </div>
        </div>

        <div className="cards">
          <div className="content">
            <h3>BROWSER EXTENTION</h3>
            <h1>Continuous Lo-Fi Background Music</h1>
            <p className="desc">
              I have created a Chrome extention That Autostarts and autoplays
              music in browser in background, we have Total control over music,
              I intended for it to play a Lofi live stream but we can switch
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Background play</span>
              <span>Auto play - pause</span>
              <span>Full manual control</span>
              <span>Customizable music</span>
            </p>
              <a href="#">TAKE ME TO PROJECT</a>
          </div>
          <img src={T_snake} alt="" />
        </div>
      </div>
    </section>
  );
}
