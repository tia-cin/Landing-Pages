import React from "react";
import "./project-9.css";
import messi from "../../assets/lionel-messi.png";
import { BsList } from "react-icons/bs";
import { gsap, Expo, Power2 } from "gsap";

const Project9: React.FC = () => {
  React.useEffect(() => {
    gsap.to(".block-1", {
      duration: 2,
      x: "70",
      y: "-260",
      scale: "1.8",
      ease: Expo.easeInOut,
    });
    gsap.to(".block-2", {
      duration: 2,
      x: "-280",
      y: "165",
      scale: "1.2",
      ease: Expo.easeInOut,
    });
    gsap.to(".block-3", {
      duration: 2,
      x: "300",
      y: "-260",
      scale: "1.2",
      ease: Expo.easeInOut,
    });
    gsap.to(".block-4", {
      duration: 2,
      x: "-10",
      y: "170",
      scale: "1.4",
      ease: Expo.easeInOut,
    });
    gsap.fromTo(
      ".bg-text h1",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 0.5, opacity: 1, y: 50, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".logo",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 1, opacity: 1, x: -20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".menu",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 1.2, opacity: 1, x: -10, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".media",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 1.4, opacity: 1, x: -150, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".bottomnav",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 2.4, opacity: 1, x: -20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".bottomnav ul li:first-child",
      { duration: 0.5, opacity: 0 },
      { duration: 0.5, delay: 2.4, opacity: 1, x: -20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".bottomnav ul li:last-child",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 2.4, opacity: 1, x: -20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".watchnow",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 2.8, opacity: 2, x: 20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".img img",
      { duration: 2, delay: 1.5, opacity: 0 },
      {
        duration: 2,
        delay: 1.5,
        opacity: 1,
        width: "60%",
        ease: Power2.easeInOut,
      }
    );
  }, []);
  return (
    <div className="project-9">
      <div className="stripes">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>

      <nav className="navbar">
        <div className="menu">
          <BsList />
        </div>
        <div className="logo">fifa</div>
        <div className="media">
          <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter</li>
          </ul>
        </div>
      </nav>

      <div className="img">
        <img src={messi} alt="lionel-messi" />
      </div>

      <div className="bg-text">
        <h1>goat</h1>
      </div>

      <div className="blocks">
        <div className="block-1 block">Lionel</div>
        <div className="block-2 block">World</div>
        <div className="block-3 block">Champion</div>
        <div className="block-4 block">Messi</div>
      </div>
    </div>
  );
};

export default Project9;
