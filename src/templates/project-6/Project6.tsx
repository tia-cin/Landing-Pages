import React from "react";
import "./project-6.css";
import { gsap, Expo } from "gsap";

const Project6: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".letter-1",
      { duration: 1, opacity: 0, y: 40 },
      { duration: 1, delay: 0.5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".letter-2",
      { duration: 1.2, opacity: 0, y: 40 },
      { duration: 1.2, delay: 0.5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".letter-3",
      { duration: 1.4, opacity: 0, y: 40 },
      { duration: 1.4, delay: 0.5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".letter-4",
      { duration: 1.6, opacity: 0, y: 40 },
      { duration: 1.6, delay: 0.5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".letter-5",
      { duration: 1.8, opacity: 0, y: 40 },
      { duration: 1.8, delay: 0.5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".letter-6",
      { duration: 2, opacity: 0, y: 40 },
      { duration: 2, delay: 0.5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

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
      <p className="title">
        <span className="letter letter-1">L</span>
        <span className="letter letter-2">O</span>
        <span className="letter letter-3">R</span>
        <span className="letter letter-4">E</span>
        <span className="letter letter-5">M</span>
        <span className="letter letter-6">.</span>
      </p>

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
