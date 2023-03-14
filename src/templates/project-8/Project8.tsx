import React from "react";
import { BsCart, BsList } from "react-icons/bs";
import picture from "../../assets/picture.png";
import "./project-8.css";

const Project8 = () => {
  return (
    <div className="project-8">
      <div className="stripes">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>

      <nav className="navbar">
        <div className="logo">bd</div>
        <div className="categories">
          <ul>
            <li>male</li>
            <li>female</li>
            <li>unisex</li>
            <li>kids</li>
          </ul>
        </div>
        <div className="menu">
          <BsList />
        </div>
        <div className="cart">
          <BsCart />
        </div>
      </nav>

      <div className="img">
        <img src={picture} alt="woman-pose" />
      </div>

      <div className="title">
        <span>
          <label>lorem</label>ipsum&nbsp;
        </span>
      </div>

      <div className="sub-title">
        Amet nostrud sunt ipsum reprehenderit reprehenderit fugiat in quis culpa
        mollit.
      </div>

      <div className="num">07</div>

      <button>Start Now</button>

      <div className="scrolldown">scroll</div>

      <div className="media">
        <ul>
          <li>facebook</li>
          <li>instagram</li>
          <li>twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Project8;
