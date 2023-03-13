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
import { gsap, Expo, Circ } from "gsap";

const Project7 = () => {
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
