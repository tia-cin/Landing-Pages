import React from "react";
import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";
import model3 from "../assets/model3.png";
import model4 from "../assets/model4.png";
import model5 from "../assets/model5.png";
import "../styles/project2.css";
import {
  BsSearch,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { Expo, gsap } from "gsap";

const Project2 = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".logo",
      { duration: 1.6, delay: 0.2, opacity: 0 },
      { duration: 1.6, delay: 0.2, opacity: 1, y: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".search",
      { duration: 1.6, delay: 0.2, opacity: 0 },
      { duration: 1.6, delay: 0.2, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".img",
      { duration: 3, delay: 0.7, opacity: 0, y: 0 },
      { duration: 3, delay: 0.7, opacity: 1, y: -70, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".bottom-bar",
      { duration: 3, delay: 2, opacity: 0 },
      { duration: 3, delay: 0.7, opacity: 1, y: -40, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".icn",
      { duration: 2, delay: 2.5, opacity: 0 },
      { duration: 2, delay: 2.5, opacity: 1, y: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".title span",
      { duration: 3, delay: 2.5, opacity: 0 },
      { duration: 3, delay: 2.5, opacity: 1, y: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".media ul li",
      { duration: 3, delay: 4.5, opacity: 0 },
      { duration: 3, delay: 4.5, opacity: 1, y: -20, ease: Expo.easeInOut }
    );
  }, []);
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <span>Trendsetters</span>
        </div>

        <div className="search">
          <BsSearch />
        </div>
      </div>

      <div className="images">
        <div className="img img-1">
          <img src={model1} alt="model-1" />
        </div>
        <div className="img img-2">
          <img src={model2} alt="model-2" />
        </div>
        <div className="img img-3">
          <img src={model3} alt="model-3" />
        </div>
        <div className="img img-4">
          <img src={model4} alt="model-4" />
        </div>
        <div className="img img-5">
          <img src={model5} alt="model-5" />
        </div>
      </div>

      <div className="title">
        <span>Style Squad</span>
      </div>

      <div className="side-icon">
        <BsArrowLeft className="icn" />
        <BsArrowRight className="icn" />
      </div>

      <div className="bottom-bar">
        <div>fashion photoshoot</div>
        <div>2023</div>
        <div>design</div>
      </div>

      <div className="media">
        <ul>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsTwitter />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project2;
