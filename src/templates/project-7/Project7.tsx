import React from "react";
import athlete from "../../assets/atlete.png";
import "./project-7.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsCart,
  BsPlay,
} from "react-icons/bs";
import { gsap, Expo, Elastic } from "gsap";

const Project7: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { duration: 1.5, opacity: 0, y: 20 },
      { duration: 1.5, delay: 1.2, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".blocks",
      { duration: 1.5, opacity: 0, x: -60 },
      { duration: 1.5, delay: 1.6, opacity: 1, x: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".tag-line",
      { duration: 1.5, opacity: 0, x: -80 },
      { duration: 1.5, delay: 2, opacity: 1, x: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".hero",
      { duration: 2, opacity: 0, x: 170 },
      { duration: 2, delay: 3, opacity: 1, x: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".title",
      { duration: 3, y: -600 },
      { duration: 3, delay: 4.4, y: 0, ease: Elastic.easeOut.config(2, 1.4) }
    );

    gsap.fromTo(
      ".year",
      { duration: 1.5, opacity: 0, x: -40 },
      { duration: 1.5, delay: 5, opacity: 1, x: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".content p",
      { duration: 2, opacity: 0, y: 20 },
      { duration: 2, delay: 5.2, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".content button",
      { duration: 2, opacity: 0, y: 20 },
      { duration: 2, delay: 5.5, opacity: 1, y: 0, ease: Expo.easeInOut }
    );

    gsap.fromTo(
      ".media ul li",
      { duration: 1.5, opacity: 0, x: -30 },
      { duration: 1.5, delay: 6, opacity: 1, x: 0, ease: Expo.easeInOut }
    );
  }, []);
  return (
    <div className="project-7">
      <nav className="navbar">
        <div className="logo">
          <BsPlay />
        </div>
        <div className="menu">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>products</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="cart">
          <BsCart />
        </div>
      </nav>

      <div className="hero">
        <img src={athlete} alt="female-voleyball-player" />
      </div>

      <div className="blocks">
        <div className="block-0">0</div>
        <div className="block-1">1</div>
      </div>

      <div className="tag-line">
        <span>
          Lorem ipsum dolor sit amet
          <br />
          Aliquam erat volutpat
        </span>
      </div>

      <div className="year">2023</div>

      <div className="title">brand</div>

      <div className="content">
        <p>
          Fusce consequat euismod nunc. Praesent tincidunt risus ac turpis
          volutpat.
        </p>
        <button>Start Now</button>
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

export default Project7;
