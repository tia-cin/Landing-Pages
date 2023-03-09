import React from "react";
import "./index.css";
import watch from "./watch.png";
import { BsSearch, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Expo, Power3, gsap } from "gsap";

export const Project1 = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".logo",
      { duration: 1, opacity: 0 },
      { duration: 1, opacity: 1, x: 20, ease: Expo.easeOut }
    );

    gsap.fromTo(
      "nav ul li",
      { duration: 1, opacity: 0 },
      { duration: 1, opacity: 1, x: -20, ease: Power3.easeInOut }
    );

    gsap.fromTo(
      ".search",
      { duration: 1, opacity: 0 },
      { duration: 1, opacity: 1, delay: 0.5, x: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".menu",
      { duration: 1, opacity: 0 },
      { duration: 1, opacity: 1, deplay: 0.6, x: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".title",
      { duration: 1, opacity: 0 },
      { duration: 1, opacity: 1, delay: 1, y: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".btn",
      { duration: 1, opacity: 0 },
      { duration: 1, opacity: 1, deplay: 1.6, y: 20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".line-one",
      { duration: 1, opacity: 0 },
      { duration: 1, opacity: 1, delay: 2, y: -800, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".line-two",
      { duration: 1, opacity: 0 },
      { duration: 1, opacity: 1, delay: 2.5, y: 800, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".img",
      { duration: 2, opacity: 0 },
      { duration: 2, opacity: 1, delay: 2.9, y: -800, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".year",
      { duration: 1, opacity: 0 },
      { duration: 1, opacity: 1, delay: 1.4, y: -20, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".media ul li",
      { duration: 2, opacity: 0 },
      { duration: 2, opacity: 1, delay: 3.2, y: 40, ease: Expo.easeInOut }
    );
  }, []);
  return (
    <div className="container">
      <div className="stripes">
        <div className="line-one"></div>
        <div className="line-two"></div>
      </div>
      <nav>
        <div className="logo">
          <span>WearableWorld</span>
        </div>
        <ul>
          <li>collection</li>
          <li>products</li>
          <li>offers</li>
          <li>contact</li>
        </ul>
        <div className="search">
          <BsSearch />
        </div>
        <div className="menu">
          <HiOutlineBars3 />
        </div>
      </nav>

      <div className="img">
        <img src={watch} alt="smart-watch" />
      </div>

      <div className="title">
        <p>wearableworld</p>
        <span>IntelliWatch</span>
      </div>

      <button className="btn">Order Now</button>

      <div className="year">2023</div>

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
