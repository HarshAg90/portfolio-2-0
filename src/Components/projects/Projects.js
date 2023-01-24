import React from "react";
import "./Project.css";
import lofi_i from "../../assets/media/Lofi_icon.png";
import Screen_saver from "../../assets/media/screen_saver.png";
import hand_detection from "../../assets/media/hand_detection.png";
import beat_maker from "../../assets/media/beatmaker.png";
import stock_pic from "../../assets/media/stock_pic_store.png";
import snake_game from "../../assets/media/sank_game.png";
import color_picker from "../../assets/media/color_picker.png";

export default function Projects() {
  return (
    <section id="proj">
      <div id="projects">
        <h3 className="title">Portfolio</h3>
        <h1 className="title">Some of my work</h1>
        <div className="cards">
          <img src={lofi_i} alt="" />
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
            <a href="https://github.com/HarshAg90/Focus-Lofi-Extention" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>

        <div className="cards rev">
          <img src={Screen_saver} alt="" />
          <div className="content">
            <h3>ENHANCED SCREEN SAVER</h3>
            <h1>Github Graph Clock</h1>
            <p className="desc">
              Screen Saver + Github Comit history Graph + Reminder [Still working on some more new features]
              Tech Stack – GraphQL API, AJAX, Express.js, Html-CSS, Github API, Javascript
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Theme based Clocks</span>
              <span>Github Graph</span>
              <span>Reminder to work(on github)</span>
              <span>To do Reminders</span>
            </p>
            <a href="https://github.com/HarshAg90/Smart-Screen-Saver" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>

        <div className="cards">
          <img src={hand_detection} alt="" />
          <div className="content">
            <h3>IMAGE DETECTION</h3>
            <h1>Python Hand-Gestures Detection Program</h1>
            <p className="desc">
              Pyhton Programme to detect Hand Gestures, classify them and show them on the screen
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Open Cv</span>
              <span>Live video feed detection</span>
            </p>
            <a href="https://github.com/HarshAg90/Image-Detection" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
        <div className="cards rev">
          <img src={beat_maker} alt="" />
          <div className="content">
            <h3>WEB PAGE</h3>
            <h1>Beats Maker Website</h1>
            <p className="desc">
              A simple web page to generate different beats from different instruments, made entirely
              from Vanila JS
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Beat generation</span>
              <span>9 different instruments to choose from</span>
              <span>Speed change</span>
              <span>Easy to use</span>
            </p>
            <a href="https://github.com/HarshAg90/WEBSITE-to-make-Beats" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
        <div className="cards">
          <img src={stock_pic} alt="" />
          <div className="content">
            <h3>WEB PAGE</h3>
            <h1>Stock Pics Fetch Site</h1>
            <p className="desc">
              A full website with API connected to fetch stock Pics for Anything and download it without ads or spam content 
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Stock Photos</span>
              <span>Learning from past searches</span>
              <span>Pixel REST API used</span>
              <span>Downloadable</span>
              <span>Responsive</span>
            </p>
            <a href="https://github.com/HarshAg90/Photon-" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
        <div className="cards rev">
          <img src={snake_game} alt="" />
          <div className="content">
            <h3>CLI GAME</h3>
            <h1>Snake game Playable in SHELL (CLI)</h1>
            <p className="desc">
              its a Snake game in playable in CLI, made with python and curses module, it have speed adjustment, score system and everything of snake game, its AWESOME
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Its A game</span>
              <span>CLI + game</span>
              <span>ITS A GAME</span>
              <span>Green snake</span>
              <span>Red food</span>
            </p>
            <a href="https://github.com/HarshAg90/CLI-Snake" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
        <div className="cards">
          <img src={color_picker} alt="" />
          <div className="content">
            <h3>WEB PAGE</h3>
            <h1>Color Suggestion site</h1>
            <p className="desc">
              A simple side project to generate random color pallet and show it beautifully on webpage
              with ability to copy it from 1 click
            </p>
            <h2>Features</h2>
            <p className="features">
              <span>Color generation</span>
              <span>Responsive</span>
              <span>Random, refreshable</span>
            </p>
            <a href="https://github.com/HarshAg90/Color-suggestion" target="_blank">TAKE ME TO PROJECT</a>
          </div>
        </div>
      </div>
    </section>
  );
}
