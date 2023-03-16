import React from "react";
import top from "../../assets/15-1.png";
import bottom from "../../assets/15-2.png";
import { gsap } from "gsap";
import "./project-15.css";

const Project15: React.FC = () => {
  React.useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".glock",
          start: "top top",
          end: "bottom bottom",
          markers: true,
          scrub: true,
        },
      })
      .to(".three .head", { yPercent: -60 })
      .to(".three .base", { yPercent: 65 })
      .to(".two .head", { yPercent: -30 })
      .to(".two .base", { yPercent: 35 });
  }, []);
  return (
    <div className="project-15">
      <h1 className="header-section">Scroll to see what it's inside</h1>

      <section className="glock">
        <div className="one">
          <img src={top} className="head piece" alt="barrel" />
          <img src={bottom} className="base piece" alt="base" />
        </div>
        <div className="two">
          <img src={top} className="head piece" alt="spring" />
          <img src={bottom} className="base piece" alt="spring" />
        </div>
        <div className="three">
          <img src={top} className="head piece" alt="spring" />
          <img src={bottom} className="base piece" alt="spring" />
        </div>
      </section>

      <h1 className="header-section">Boom.</h1>
    </div>
  );
};

export default Project15;
