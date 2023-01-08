import React from 'react';
import "./art_div.css";
import mood from '../../assets/media/mood.jpeg';
import spider from '../../assets/media/spiders.jpeg';
import whale from '../../assets/media/whale.jpeg';
import wings from '../../assets/media/wings.jpeg';
import wrench from '../../assets/media/wrench.jpeg';

export default function Art_div() {
  return (
    <div id="art-d">
        <img className="art_img mood"  src={mood} alt="mood pic" />
        <img className="art_img spider" src={spider} alt="spiderman art" />
        <img className="art_img cloud_fish" src={whale}  alt="whale swimming in clouds" />
        <img className="art_img wing_man" src={wings} alt="man with wings" />
        <img className="art_img wrench" src={wrench}alt="hacker from a game" />
    </div>
  )
}
