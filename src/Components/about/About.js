import React from "react";
import "./about.css";

export default function About() {
  return (
    <div id="about">
      <h1 className="Title">About Me - </h1>
      <p>
        I am a Computer Science Student and Software developer
        <br />I like to work on frontend styling and writting Scripts
        <br />
        to simplify daily life tasks, Coding is one of my hobbies along with Art
        <br />
        I'm currently persuing BCA, doing freelancing
        <br />
        and trying to make a career in big facinating tech world
      </p>
      <div className="edu">
        <h1>Education</h1>
        <div className="schools">
          <h2>Bachlor of Computer Academics</h2>
          <h3>
            <span>MSI IPU - Delhi, India</span> <span>2021-2024</span>
          </h3>
        </div>
      </div>
      <p>
        I have many leadership and management skills
        <br /> I am Currently Web Developemt department head In GDSC MSIT
        <br /> I have won many Debates & competitions, I have been college Class
        representative,
      </p>
    </div>
  );
}
