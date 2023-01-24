import React from 'react';
import "./contact.css";
import instagram from '../../assets/media/instagram.png';
import twitter from '../../assets/media/twitter.png';
import linkedin from '../../assets/media/linkedin.png';

export default function Contact() {
  return (
    <div id="contact">
        <h2>Contact me at</h2>
        <h1>sudo.harsh404@gmail.com</h1>
        <div className="links">
          <a href="https://www.instagram.com/sudo.harsh/" target="_blank" className="insta">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com/HarshAg90" target="_blank" className="twitter">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/harshag90/" target="_blank" className="linkedin">
            <img src={linkedin} alt="" />
          </a>
        </div>

        <div className="tnc">
            <h2>&copy; Copyright</h2>
            <p>made solely by Harsh Agnihotri</p>
        </div>
    </div>
  )
}
