import React from "react";
import "./index.css";
import watch from "./watch.png";
import { TweenMax, Expo, Power3, gsap } from "gsap";

export const Project1 = () => {
  // React.useEffect(() => {
  //   gsap.from(".logo", 1, {
  //     opacity: 0,
  //     x: -20,
  //     ease: Expo.easeInOut,
  //   });

  //   gsap.from("nav ul li", 1, {
  //     opacity: 0,
  //     x: -20,
  //     ease: Power3.easeInOut,
  //   });

  //   gsap.from(".search", 1, {
  //     opacity: 0,
  //     delay: 0.5,
  //     x: -20,
  //     ease: Expo.easeInOut,
  //   });

  //   gsap.from(".menu", 1, {
  //     opacity: 0,
  //     deplay: 0.6,
  //     x: -20,
  //     ease: Expo.easeInOut,
  //   });

  //   gsap.from(".title", 1, {
  //     opacity: 0,
  //     delay: 1,
  //     y: 20,
  //     ease: Expo.easeInOut,
  //   });

  //   gsap.from(".btn", 1, {
  //     opacity: 0,
  //     deplay: 1.6,
  //     y: 20,
  //     ease: Expo.easeInOut,
  //   });

  //   gsap.from(".line-one", 1, {
  //     opacity: 0,
  //     delay: 2,
  //     y: -800,
  //     ease: Expo.easeInOut,
  //   });

  //   gsap.from(".line-two", 1, {
  //     opacity: 0,
  //     delay: 2.5,
  //     y: -800,
  //     ease: Expo.easeInOut,
  //   });

  //   gsap.from(".img", 2, {
  //     opacity: 0,
  //     delay: 2.9,
  //     y: -800,
  //     ease: Expo.easeInOut,
  //   });

  //   gsap.from(".year", 1, {
  //     opacity: 0,
  //     delay: 1.4,
  //     y: -20,
  //     ease: Expo.easeInOut,
  //   });

  //   gsap.from(".media ul li", 2, {
  //     opacity: 0,
  //     delay: 3.2,
  //     y: 40,
  //     ease: Expo.easeInOut,
  //   });
  // }, []);
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
          <i className="fa fa-search"></i>
        </div>
        <div className="menu">
          <i className="fa fa-bars"></i>
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
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-instagram"></i>
          </li>
          <li>
            <i className="fa fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
