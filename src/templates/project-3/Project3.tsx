import React from "react";
import shoe1 from "../../assets/shoe1.png";
import shoe2 from "../../assets/shoe2.png";
import "./project-3.css";
import {
  BsFacebook,
  BsSearch,
  BsList,
  BsInstagram,
  BsTwitter,
  BsArrowLeft,
  BsArrowRight,
  BsBagCheck,
} from "react-icons/bs";
import { gsap, Expo, Power3 } from "gsap";

const Project3 = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".logo",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 1, opacity: 1, x: -20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".menu",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 1.2, opacity: 1, x: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".search",
      { duration: 0.8, opacity: 0 },
      { duration: 0.8, delay: 1.6, opacity: 1, x: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".bag",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 1.6, opacity: 1, x: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".media ul li",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 2, opacity: 1, x: -20, ease: Power3.easeInOut }
    );

    gsap.fromTo(
      ".size",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 1.8, opacity: 1, x: -20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".size ul li",
      { duration: 0.3, opacity: 0 },
      { duration: 0.3, delay: 2, opacity: 1, y: 20, ease: Power3.easeInOut }
    );
    gsap.fromTo(
      ".bottom-right ul li:first-child",
      { duration: 0.5, opacity: 0 },
      { duration: 0.5, delay: 2.4, opacity: 1, x: -20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".bottom-right ul li:last-child",
      { duration: 0.6, opacity: 0 },
      { duration: 0.6, delay: 2.4, opacity: 1, x: -20, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".bottom-img",
      { duration: 1, opacity: 0 },
      { duration: 1, delay: 2.4, opacity: 1, x: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".product-title",
      { duration: 3, opacity: 0 },
      { duration: 3, delay: 2.2, opacity: 1, y: 50, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".product-img",
      { duration: 1, opacity: 0, y: -800 },
      { duration: 1, delay: 4.2, opacity: 1, y: -300, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".product-desc p",
      { duration: 3, opacity: 0 },
      { duration: 3, delay: 4.5, opacity: 1, y: -50, ease: Expo.easeInOut }
    );
    gsap.fromTo(
      ".product-desc button",
      { duration: 3, opacity: 0 },
      { duration: 3, delay: 6, opacity: 1, y: -50, ease: Expo.easeInOut }
    );
  }, []);
  return (
    <div className="project-3">
      <div className="overlay"></div>

      <div className="nav">
        <div className="logo">
          brand<span className="reg">&reg;</span>
        </div>
        <div className="menu">
          <BsList />
        </div>
        <div className="search">
          <BsSearch />
        </div>
        <div className="bag">
          <BsBagCheck />
        </div>
      </div>

      <img src={shoe1} alt="black-sneaker" className="product-img" />

      <div className="product-text">
        <h1 className="product-title">adidas.</h1>
      </div>

      <div className="product-desc">
        <p>The pure comfort is here !</p>
        <button>reserve now</button>
      </div>

      <div className="size">
        <span>Size :</span>
        <ul>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </div>

      <img src={shoe2} alt="white-sneaker" className="bottom-img" />

      <div className="bottom-right left-button">
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

export default Project3;
