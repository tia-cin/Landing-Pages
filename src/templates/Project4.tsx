import React from "react";
import "../styles/project3.css";
import model from "../assets/model.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { BiAperture, BiSearch } from "react-icons/bi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Expo, gsap, Power3 } from "gsap";

const Project4 = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo-icon">
          <BiAperture />
        </div>
        <div className="logo">MaecenasNullam</div>
        <div className="search">
          <BiSearch />
        </div>
      </nav>

      <div className="img">
        <img src={model} alt="model" />
      </div>

      <div className="title">
        <h1>
          <span className="text-one">
            Macens<label>Nullam</label>
          </span>
        </h1>
        <h2>
          <span>A</span>liquam
        </h2>
        <h3>
          <span className="text-two">
            nec nulla <label>auctor</label>
          </span>
        </h3>
        <p>
          <span className="text-three">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            modi quam. At facilis totam quidem enim nihil voluptatum omnis ea.
          </span>
        </p>
      </div>

      <div className="line"></div>

      <div className="tag">
        <span>Proin in odio vel leo fringilla malesuada</span>
      </div>

      <button>Start now</button>

      <div className="bottom left-right icon">
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
          <li>twitter</li>
          <li>email</li>
        </ul>
      </div>
    </div>
  );
};

export default Project4;
