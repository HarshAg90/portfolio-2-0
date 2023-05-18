import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./Home.css";

export default function Home({ themeFn }) {

  const [textIndex, setTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const textList = ["Hello","Namaste", "Bonjour", "Hola", "Ciao"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(false); // Fade out the text

      // Wait for fade-out animation to complete, then update the text index and fade in again
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
        setFadeIn(true); // Fade in the new text
      }, 500);
    }, 2000);

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, [textIndex, textList.length]);

  // const contrainerRef = useRef(null)
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <section id="home">
      <div id="particles-js">
        <div className="observer" ref={ref}></div>
        <div className="info_co">
          <h1 className={`l1 fade ${fadeIn ? "fade-in" : "fade-out"} ${inView ? "visible" : "invisible"}`}>
            {textList[textIndex]}
          </h1>
          <h1 className={"l2 " + (inView ? "visible" : "invisible")}>
            Harsh Agnihotri <span> </span>
          </h1>
          <h1 className={"l3 " + (inView ? "visible" : "invisible")}>
            A FULL-STACK DEVELOPER <span> </span>
          </h1>
          <h1 className={"l4 " + (inView ? "visible" : "invisible")}>
            Building the web <span> </span>
          </h1>
          <h1 className={"l5 " + (inView ? "visible" : "invisible")}>
            One line of code at a time <span> </span>
          </h1>
        </div>
        <div className={"theme-div "+(inView ? "visible" : "invisible")}>
          <button onClick={themeFn} id="theme-btn">
            <div className="bg"></div>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z" />
            </svg>
          </button>
          <button onClick={themeFn} id="linkedin">
            <div className="bg"></div>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z" />
            </svg>
          </button>
          <button onClick={themeFn} id="twitter">
            <div className="bg"></div>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z" />
            </svg>
          </button>
          <button onClick={themeFn} id="github">
            <div className="bg"></div>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
