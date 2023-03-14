import React from "react";
import { BsList, BsSearch, BsArrowUp, BsArrowDown } from "react-icons/bs";
import model from "../../assets/model-vacation.png";
import vacation from "../../assets/vacation.png";
import "./project-10.css";
import { gsap, Expo } from "gsap";

const Project10: React.FC = () => {
  React.useEffect(() => {
    gsap.to(".bg", { duration: 2, width: "100%", ease: Expo.easeInOut });

    gsap.fromTo(
      ".navbar",
      { duration: 1.5, delay: 2.5, opacity: 0 },
      { duration: 1.5, delay: 2.5, opacity: 1, y: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".media ul li",
      { duration: 1.5, delay: 2.8, opacity: 0 },
      { duration: 1.5, delay: 2.8, opacity: 1, x: -30, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".text h1 .text-bar",
      { duration: 1.5, delay: 1.6, y: "100%" },
      { duration: 1.5, delay: 1.6, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".text p .text-bar",
      { duration: 1.5, delay: 2, y: "100%" },
      { duration: 1.5, delay: 2, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".bottomnav",
      { duration: 1.5, delay: 3.2, opacity: 0, y: 30 },
      { duration: 1.5, delay: 3.2, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".bottomnav .next",
      { duration: 1.5, delay: 3.5, opacity: 0, x: -20, ease: Expo.easeInOut },
      { duration: 1.5, delay: 3.5, opacity: 1, x: 0 }
    );
  }, []);
  return (
    <div className="project-10">
      <nav className="navbar">
        <div className="logo">Summer</div>
        <div className="menu-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
          </ul>
        </div>
        <div className="menu">
          <BsList />
        </div>
        <div className="search">
          <BsSearch />
        </div>
      </nav>
      <div className="media">
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <div className="img">
          <img src={model} alt="model-on-the-beach" />
        </div>
        <div className="block"></div>
      </div>
      <div className="text">
        <h1>
          <span className="text-bar">
            Breathe in <label> the sea</label>
          </span>
        </h1>
        <p>
          <span className="text-bar">get the summer body</span>
        </p>
      </div>
      <div className="bottomnav">
        <div className="next">up next</div>

        <div className="nav">
          <ul>
            <li>
              <BsArrowUp />
            </li>
            <li>
              <BsArrowDown />
            </li>
          </ul>
          <div className="bottomnav-img">
            <img src={vacation} alt="summer-beach" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project10;
