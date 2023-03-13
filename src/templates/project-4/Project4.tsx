import React from "react";
import model from "../../assets/model.png";
import "./project-4.css";
import {
  BsSearch,
  BsArrowLeft,
  BsArrowRight,
  BsScissors,
} from "react-icons/bs";
import { gsap, Expo, Power3 } from "gsap";

const Project4: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".logo",
      { opacity: 0, duration: 1.6 },
      { duration: 1.6, delay: 0.2, opacity: 1, y: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".search",
      { duration: 1.6, opacity: 0 },
      { duration: 1.6, delay: 0.4, opacity: 1, y: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".logo-icon",
      { duration: 1.6, opacity: 0 },
      { duration: 1.6, delay: 0, opacity: 1, y: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".text-one",
      { duration: 2, opacity: 1 },
      { duration: 2, delay: 2.6, opacity: 1, y: 40, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".text-two",
      { duration: 1.5, opacity: 0 },
      { duration: 1.5, delay: 3.4, opacity: 1, y: -40, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".text-two label",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 4, opacity: 1, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      "h2",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 4, opacity: 1, x: -60, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".text-three",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 4.7, opacity: 1, y: 40, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      "button",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 5.5, opacity: 1, y: -30, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".line",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 5, opacity: 1, x: -100, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".tag",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 5.3, opacity: 1, y: -30, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".media ul li",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 6, opacity: 1, y: -40, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".left-right ul li",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 6.4, opacity: 1, y: -40, ease: Expo.easeInOut }
    );
  }, []);
  return (
    <div className="project-4 overflow-hidden">
      <nav className="navbar">
        <div className="logo-icon">
          <BsScissors />
        </div>
        <div className="logo">Brand</div>
        <div className="search">
          <BsSearch />
        </div>
      </nav>

      <div className="img">
        <img src={model} alt="model-profile" />
      </div>

      <div className="title">
        <h1>
          <span className="text-one">
            Lorem&<label> ipsum</label>
          </span>
        </h1>
        <h2>
          <span>G</span>oert!
        </h2>
        <h3>
          <span className="text-two">
            sitametira <label>elit!</label>
          </span>
        </h3>
        <p>
          <span className="text-three">
            Lorem ipsum dolor consectetur adipisicing . Eveniet, modi quam. At
            facilis totam quidem enim nihil voluptatum omnis ea.
          </span>
        </p>
      </div>

      <div className="line"></div>
      <div className="tag">
        <span>At facilis totam quidem</span>
      </div>

      <button>Start Now</button>

      <div className="bottom left-right icn">
        <ul>
          <li>
            <BsArrowLeft />
          </li>
          <li>
            <BsArrowRight />
          </li>
        </ul>
      </div>

      <div className="media">
        <ul>
          <li>facebook</li>
          <li>instagram</li>
          <li>snapchat</li>
        </ul>
      </div>
    </div>
  );
};

export default Project4;
