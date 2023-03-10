import React from "react";
import model1 from "../../assets/model1.png";
import model2 from "../../assets/model2.png";
import model3 from "../../assets/model3.png";
import model4 from "../../assets/model4.png";
import model5 from "../../assets/model5.png";
import "./project-2.css";
import {
  BsFacebook,
  BsSearch,
  BsList,
  BsInstagram,
  BsTwitter,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { gsap, Expo } from "gsap";

const Project2 = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".logo",
      { duration: 1.6, opacity: 0 },
      { duration: 1.6, delay: 0.2, opacity: 1, y: 20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".search",
      { duration: 1.6, opacity: 0 },
      { duration: 1.6, delay: 0.2, opacity: 1, y: 20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".img",
      { duration: 3, opacity: 0 },
      { duration: 3, delay: 0.7, opacity: 1, y: 70, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".bottom-bar",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 2, opacity: 1, x: -40, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".icn",
      { duration: 2, opacity: 0 },
      { duration: 2, delay: 2.5, opacity: 1, y: 40, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".title span",
      { duration: 3, opacity: 0 },
      { duration: 3, delay: 3, opacity: 1, x: -100, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".media ul li",
      { duration: 3, opacity: 0 },
      { duration: 3, delay: 4.5, opacity: 1, y: 50, ease: Expo.easeInOut }
    );
  }, []);
  return (
    <div className="project-2">
      <div className="navbar">
        <div className="logo">
          <span>Brand</span>
        </div>
        <div className="search">
          <BsSearch />
          <BsList />
        </div>
      </div>

      <div className="images">
        <img className="img img-1" src={model1} />
        <img className="img img-2" src={model2} />
        <img className="img img-3" src={model3} />
        <img className="img img-4" src={model4} />
        <img className="img img-5" src={model5} />
      </div>

      <div className="title">
        <span>stylebrand</span>
      </div>

      <div className="side-icon">
        <BsArrowLeft className="icn" />
        <BsArrowRight className="icn" />
      </div>

      <div className="bottom-bar">
        <div>street fashion</div>
        <div>2022</div>
        <div>design brand</div>
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
