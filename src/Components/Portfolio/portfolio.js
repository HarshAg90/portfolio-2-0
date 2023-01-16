import React from 'react';
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div id='portfolio'>
        <h3 className="title">Portfolio</h3>
        <h1 className='title'>Some of my Achievement</h1>
            <div className="exp">
                <h1>Web-dev Head @ GDSC - MSIT</h1>
                <h3>September 2022 - ongoing</h3>
            </div>
            <div className="exp">
                <h1>Freelancer</h1>
                <h3>March 2022 - ongoing</h3>
            </div>
        <div className="achievements">
            <div className="card">
                <h2>Personal Project</h2>
                <h1>20+</h1>
            </div>
            <div className="card">
                <h2>Freelance Project</h2>
                <h1>30+</h1>
            </div>
            <div className="card">
                <h2>Happy Clients</h2>
                <h1>20+</h1>
            </div>
        </div>
    </div>
  )
}
