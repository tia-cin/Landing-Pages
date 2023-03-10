import React from "react";
import "../styles/project3.css";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Expo, gsap, Power3 } from "gsap";

const Project3 = () => {
  React.useEffect(() => {
    gsap.to(".first", {
      duration: 1.5,
      delay: 0.2,
      left: -100,
      ease: Expo.easeInOut,
    });

    gsap.to(".second", {
      duration: 1.5,
      delay: 0.4,
      left: "-100%",
      ease: Expo.easeInOut,
    });

    gsap.to(".third", {
      duration: 1.5,
      delay: 0.6,
      left: "-100%",
      ease: Expo.easeInOut,
    });

    // navbar
    gsap.fromTo(
      ".logo",
      { duration: 1, delay: 1, opacity: 0 },
      { duration: 1, delay: 1, opacity: 1, x: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".menu",
      { duration: 1, delay: 1.2, opacity: 0 },
      { duration: 1, delay: 1.2, opacity: 1, x: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".search",
      { duration: 0.8, delay: 1.6, opacity: 0 },
      { duration: 0.8, delay: 1.6, opacity: 1, x: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".bag",
      { duration: 1, delay: 1.6, opacity: 0 },
      { duration: 1, delay: 1.6, opacity: 1, x: 20, ease: Expo.easeInOut }
    );

    // social media
    gsap.fromTo(
      ".media ul li",
      { duration: 1, delay: 2, opacity: 0 },
      { duration: 1, delay: 2, opacity: 1, x: 20, ease: Power3.easeInOut }
    );

    // product
    gsap.fromTo(
      ".size",
      { duration: 1, delay: 1.8, opacity: 0 },
      { duration: 1, delay: 1.8, opacity: 1, x: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".size ul li",
      { duration: 0.3, delay: 2, opacity: 0, y: 20 },
      { duration: 0.3, delay: 2, opacity: 1, y: 0, ease: Power3.easeInOut }
    );

    gsap.fromTo(
      ".product-title",
      { duration: 3, delay: 2.2, opacity: 0, y: 50 },
      { duration: 3, delay: 2.2, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".product-img",
      { duration: 1, delay: 4.2, opacity: 0, y: -800 },
      { duration: 1, delay: 4.2, opacity: 1, y: -300, ease: Expo.easeInOut }
    );

    // second product
    gsap.fromTo(
      ".bottom-right ul li:first-child",
      { duration: 0.5, delay: 2.4, opacity: 0, x: -20 },
      { duration: 0.5, delay: 2.4, opacity: 1, x: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".bottom-right ul li:last-child",
      { duration: 0.6, delay: 2.4, opacity: 0, x: -20 },
      { duration: 0.6, delay: 2.4, opacity: 1, x: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".bottom-img",
      { duration: 1, delay: 2.4, opacity: 0, x: -20 },
      { duration: 1, delay: 2.4, opacity: 1, x: 0, ease: Expo.easeInOut }
    );
  }, []);
  return (
    <div className="container">
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>

      <nav>
        <div className="logo">
          puma<span className="reg">&reg;</span>
        </div>
        <div className="menu">
          <HiOutlineBars3 />
        </div>
        <div className="search">
          <BiSearch />
        </div>
        <div className="bag">
          <BiShoppingBag />
        </div>
      </nav>

      <img src={shoe1} alt="puma-basket-basses-black" className="product-img" />

      <div className="product-text">
        <h1 className="product-title">puma.</h1>
      </div>

      <div className="size">
        <ul>
          <span>Size :</span>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </div>

      <div className="bottom-img">
        <img src={shoe2} alt="puma-basket-basses-white" />
      </div>

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
      <script src="index.js"></script>
    </div>
  );
};

export default Project3;
