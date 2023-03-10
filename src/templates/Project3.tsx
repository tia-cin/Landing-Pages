import React from "react";
import "../styles/project3.css";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import {
  BsSearch,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Expo, gsap } from "gsap";

const Project3 = () => {
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
          <BsSearch />
        </div>
        <div className="bag">
          <BiShoppingBag />
        </div>
      </nav>

      <img src={shoe1} alt="puma-basket-basses-black" className="product-img" />

      <div className="product-text">
        <h1 className="product-title">puma.</h1>
      </div>

      <div className="product-desc">
        <p>Elevate your training with our shoes</p>
        <button>Shop now</button>
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
