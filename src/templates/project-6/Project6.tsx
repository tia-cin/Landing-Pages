import React from "react";
import "./project-6.css";
import anime from "animejs/lib/anime.es.js";
import { gsap, Expo } from "gsap";

const Project6: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".scrolldown",
      { duration: 1.5, opacity: 0 },
      { duration: 1.5, delay: 0.7, opacity: 1, y: 200, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".menu ul li",
      { duration: 1.5, opacity: 0 },
      { duration: 1.5, delay: 1, opacity: 1, x: -30, ease: Expo.easeInOut }
    );
  }, []);
  return (
    <div className="project-6">
      <p className="title">Lorem.</p>

      <div className="menu">
        <ul>
          <li>home</li>
          <li>services</li>
          <li>portfolio</li>
          <li>about us</li>
        </ul>
      </div>

      <div className="scrolldown">scroll down</div>
    </div>
  );
};

export default Project6;
