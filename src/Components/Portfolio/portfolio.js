import React from 'react';
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div id='portfolio'>
        <div className="head">
        <h3 className="title" data-aos="fade-down" data-aos-delay="100">Portfolio</h3>
        <h1 className='title' data-aos="fade-down">Some of my Achievement</h1>
        </div>
        <div className="p_content">
        <div className="exp" >
            <h1 data-aos="fade-down">Web-dev Head @ GDSC - MSIT</h1>
            <h3 data-aos="fade-down" data-aos-delay="100">September 2022 - ongoing</h3>
        </div>
        <div className="exp">
            <h1 data-aos="fade-down">Freelancer</h1>
            <h3 data-aos="fade-down" data-aos-delay="100">March 2022 - ongoing</h3>
        </div>
        <div className="achievements">
            <div className="card" data-aos="fade-right">
                <h2>Personal Project</h2>
                <h1>20+</h1>
            </div>
            <div className="card" data-aos="fade-right" data-aos-delay="100">
                <h2>Freelance Project</h2>
                <h1>30+</h1>
            </div>
            <div className="card" data-aos="fade-right" data-aos-delay="200">
                <h2>Happy Clients</h2>
                <h1>20+</h1>
            </div>
        </div>
        </div>
    </div>
  )
}
