import React from "react";
import "./project-14.css";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Project14: React.FC = () => {
  const colors = [
    "#243119",
    "#c9f2c7",
    "#269460",
    "#aceca1",
    "#96be8c",
    "#269460",
    "#aceca1",
    "#96be8c",
  ];
  React.useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: ".grid",
          anticipatePin: 1,
        },
      })
      .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
      .to(".gridBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 })
      .from(".gridLayer", { scale: 3.3333, ease: "none" });
    gsap.set(".gridBlock", {
      backgroundColor: (i) => colors[i],
    });

    const bigImg = document.querySelector(".centerBlock");
    bigImg?.addEventListener("load", () => {
      gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });
    });
  }, []);
  return (
    <div className="project-14">
      <h1 className="header-section">
        Scroll down to see a photo gallery being revealed
      </h1>

      <div className="grid-container">
        <div className="grid">
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer centerPiece">
            <div className="gridBlock centerBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock">
              <a href="https://greensock.com" target="_blank"></a>
            </div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
          <div className="gridLayer">
            <div className="gridBlock"></div>
          </div>
        </div>
      </div>

      <h1 className="header-section" style={{ marginTop: 0 }}>
        Final
      </h1>
    </div>
  );
};

export default Project14;
